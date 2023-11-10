FROM node:21-alpine
WORKDIR /code
RUN npm install -g @angular/cli

EXPOSE 49153

#comment out before re-initializing
COPY package*.json ./
RUN npm install
