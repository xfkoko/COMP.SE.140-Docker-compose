FROM node:latest

WORKDIR /

COPY . .

RUN npm install

RUN npm install amqplib

CMD [ "node", "imed.js", "compose140.o" ]