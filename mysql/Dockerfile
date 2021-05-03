FROM mysql

ENV MYSQL_DATABASE=dockerdes2 \
    MYSQL_ROOT_PASSWORD=root

ADD schema.sql /docker-entrypoint-initdb.d

EXPOSE 3306
