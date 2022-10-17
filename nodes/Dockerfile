# Base fo the "machines" that the controller should connect to
FROM ubuntu:20.04

RUN apt-get update
RUN apt-get install -y openssh-server

RUN mkdir /var/run/sshd

RUN sed -ri 's/PermitRootLogin prohibit-password/PermitRootLogin yes' /etc/ssh/sshd_config

RUN apt-get install -y vim
RUN apt-get install -y python3
RUN apt-get install -y python3-apt
RUN apt-get install -y sudo

# This was not needed anywhere as I used the keys
RUN echo 'root:Docker!' | chpasswq

EXPOSE 22

CMD ["/usr/sbin/sshd", "-D"]

# In addition to this I ran "su" in the container to login as the root and
# then set the "~/.ssh/authorized_keys" to hold my control_machine's public key