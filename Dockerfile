FROM node:17-slim

WORKDIR /usr/src/app
COPY pacman/package*.json ./
RUN npm install
COPY pacman .

ENV PORT=8080
EXPOSE 8080

CMD [ "npm", "start" ]
