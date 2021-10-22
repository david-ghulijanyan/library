FROM nginx:alpine

RUN apk update
RUN apk add nginx-plus
RUN apk add nginx-mod-http-headers-more
COPY build/ /usr/share/nginx/html/
COPY .env /usr/share/nginx/html/.env

COPY nginx.conf  /etc/nginx/conf.d/nginx_library-client.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]