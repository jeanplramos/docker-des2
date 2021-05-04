FROM nginx:1.20.0-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d
COPY dockerize/dockerize-alpine-linux-amd64-v0.6.1.tar.gz .

RUN apk add --no-cache openssl

RUN tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-v0.6.1.tar.gz \
    && rm dockerize-alpine-linux-amd64-v0.6.1.tar.gz

