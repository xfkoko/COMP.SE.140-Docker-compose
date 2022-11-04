#!/usr/bin/env node

console.log("Started")

var amqp = require('amqplib/callback_api');

var args = process.argv.slice(2);

if (args.length == 0) {
  console.log("Usage: receive_logs_topic.js <facility>.<severity>");
  process.exit(1);
}

amqp.connect('amqp://rapid-runner-rabbit:5672', function(error0, connection) {
  if (error0) {
    process.exit(1);
  }

  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var exchange = 'topic_logs';

    channel.assertExchange(exchange, 'topic', {
      durable: false
    });

    channel.assertQueue('', {
      exclusive: true
    }, function(error2, q) {
      if (error2) {
        throw error2;
      }
      console.log(' [*] Waiting for logs. To exit press CTRL+C');

      args.forEach(function(key) {
        channel.bindQueue(q.queue, exchange, key);
      });

      channel.consume(q.queue, async function(msg) {
        var message = `Got ${msg.content.toString()}`
        console.log(" [x] %s:'%s'", msg.fields.routingKey, msg.content.toString());
        // SEND THE NEW TOPIC
        await sleep(1000)
        channel.assertExchange(exchange, 'topic', {
            durable: false
        });
        var message = `Got ${msg.content.toString()}`
        var newkey = 'compose140.i';
        channel.publish(exchange, newkey, Buffer.from(message));
        console.log(" [x] Sent %s:'%s'", newkey, message);
      }, {
        noAck: true
      });
    });
  });
});

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}