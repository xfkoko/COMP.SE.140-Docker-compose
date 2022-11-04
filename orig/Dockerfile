FROM node:latest

WORKDIR /

COPY . .

RUN npm install

RUN npm install amqplib

CMD [ "node", "orig.js" ]