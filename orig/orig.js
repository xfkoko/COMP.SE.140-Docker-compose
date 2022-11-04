#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

console.log("Started")

amqp.connect('amqp://rapid-runner-rabbit:5672', function(error0, connection) {
    if (error0) {
        process.exit(1);
    }
    connection.createChannel(async function(error1, channel) {
        if (error1) {
            throw error1;
        }
        var exchange = 'topic_logs';
        var key = 'compose140.o';
        var msg = 'MSG_1';
        channel.assertExchange(exchange, 'topic', {
            durable: false
        });
        channel.publish(exchange, key, Buffer.from(msg));
        console.log(" [x] Sent %s:'%s'", key, msg);
        var msg = 'MSG_2';
        await sleep(3000)
        channel.assertExchange(exchange, 'topic', {
            durable: false
        });
        channel.publish(exchange, key, Buffer.from(msg));
        console.log(" [x] Sent %s:'%s'", key, msg);
        var msg = 'MSG_3';
        await sleep(3000)
        channel.assertExchange(exchange, 'topic', {
            durable: false
        });
        channel.publish(exchange, key, Buffer.from(msg));
        console.log(" [x] Sent %s:'%s'", key, msg);
    });

    /*setTimeout(function() {
        connection.close();
        process.exit(0)
    }, 500);*/
});

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}