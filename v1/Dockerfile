FROM node:12.5.0-slim
MAINTAINER Kota Sato "satokota@jp.ibm.com"

WORKDIR /usr/src/app
COPY pacman/package*.json ./
RUN npm install
COPY pacman .

ENV PORT=8080
EXPOSE 8080

CMD [ "npm", "start" ]
