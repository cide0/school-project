CLI = docker-compose -f docker/compose/docker-compose-cli.yml
PHPUNIT = /var/www/html/vendor/bin/phpunit

.PHONY: list
list:
	@echo
	@cat Makefile | grep '^[a-z0-9_-]\+:' | sed 's/:.*//' | sed 's/^/  make /' | sort
	@echo

.PHONY: build-dev
build-dev:
	docker build -f docker/php/Dockerfile . \
	-t jiel/php:dev
	docker build -f docker/nginx/Dockerfile . \
	-t jiel/nginx:dev
	docker build -f docker/php_cli/Dockerfile . \
	-t jiel/php_cli:dev
	docker build -f docker/mysql/Dockerfile . \
    -t jiel/mysql:dev

.PHONY: up
up:
	docker-compose -f docker/compose/docker-compose-dev.yml up -d
	cd ./code/public/app && \
	docker-compose up -d --build
	docker ps

.PHONY: down
down:
	docker-compose -f docker/compose/docker-compose-dev.yml down
	cd ./code/public/app && \
	docker-compose down
	docker ps

.PHONY: install
install: build-dev
	$(CLI) run --rm --no-deps php_cli php -d memory_limit=-1 /usr/local/bin/composer install

.PHONY: update
update:
	$(CLI) run --rm --no-deps php_cli php -d memory_limit=-1 /usr/local/bin/composer update

.PHONY: cleanup
cleanup:
	docker system prune -a -f --volumes

.PHONY: init-angular
init-angular:
	cd ./code/public/app && \
	docker-compose run app ng new angular-docker --directory .

.PHONY: npm-install
npm-install:
	docker exec jiel_angular rm -rf package-lock.json
	docker exec jiel_angular npm install
	sudo docker cp jiel_angular:/code/node_modules ./code/public/app/ #for windows, open admin shell, remove this line in Makefile and  execute npm-install

.PHONY: run
run: up npm-install