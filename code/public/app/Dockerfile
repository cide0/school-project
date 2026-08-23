FROM node:22-alpine
WORKDIR /code
RUN npm install -g @angular/cli

EXPOSE 49153

COPY package*.json ./
RUN npm install
