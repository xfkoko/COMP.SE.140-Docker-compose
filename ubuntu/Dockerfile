#I used thia as a base for my "VM" environment
FROM ubuntu:20.04

RUN apt-get update
RUN apt-get install -y openssh-server

RUN mkdir /var/run/sshd

RUN echo 'root:password123' | chpasswd

RUN sed -ri 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

RUN apt-get install -y python3
RUN apt-get install -y python3-pip
RUN python3 -m pip install --user ansible
RUN python3 -m pip install --upgrade --user ansible
RUN apt-get install -y sudo

EXPOSE 22

CMD ["/usr/sbin/sshd", "-D"]