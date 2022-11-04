# AMQP Exercise

Kosti Korhonen

## Information about host

```
$ uname -a
MINGW64_NT-10.0-19043 tietokone 3.1.7-340.x86_64 2020-09-22 19:03 UTC x86_64 Msys

$ docker --version
Docker version 20.10.17, build 100c701

$ docker-compose --version
Docker Compose version v2.10.2
```

## Benefits of topic-based communication

I see as the main benefit that anyone can join in the conversation as listener or a publisher. This makes it also so that we don't need to know exact address of the other machines or servers as we can just post a message to a certain topic.

## Your main learnings

Learned how to use the depends on command in the docker-compose. Also, learned that sometime you need to go back a version to use some nice functionalities of a service (docker-compose v2.1 used in this exercise rather than v3).

I was already pretty familiar with rabbitmq but I had not used the topic-based communication before so that was nice to learn and test.