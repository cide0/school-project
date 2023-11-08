# OX2 Biodiversity
## 1. Setup
### First of all, install make with the help of this guide: `https://earthly.dev/blog/makefiles-on-windows/`
### To start this project locally, execute the following commands in your terminal:
1. `make install` to build the required images and do composer install
2. `make run` to run the backend-containers, build and run the frontend-container and do npm install
### After these two steps you should be able to access `http://localhost:4200/` (frontend) and `http://localhost:80/` (backend)