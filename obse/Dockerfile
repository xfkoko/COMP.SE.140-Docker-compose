FROM node:latest

WORKDIR /

COPY . .

RUN npm install

RUN npm install amqplib 

RUN mkdir /filefolder

RUN echo "" > /filefolder/file.txt

EXPOSE 8080

CMD [ "node", "obse.js", "#" ]