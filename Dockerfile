FROM node:10
MAINTAINER Kota Sato "satokota@jp.ibm.com"

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

ENV PORT=80
EXPOSE 80

CMD [ "npm", "start" ]
