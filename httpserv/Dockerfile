FROM node:latest

WORKDIR /

COPY package.json ./

RUN npm install

COPY . .

RUN mkdir /filefolder

EXPOSE 8080

CMD [ "node", "httpserv.js" ]