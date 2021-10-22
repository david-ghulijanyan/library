#!/usr/bin/env sh
docker build -t davidghulijanyan/library-client .
docker push davidghulijanyan/library-client

ssh deploy@$DEPLOY_SERVER << EOF
docker pull davidghulijanyan/library-client
docker stop library-client || true
docker rm library-client || true
docker rmi davidghulijanyan/library-client:current || true
docker tag davidghulijanyan/library-client:latest davidghulijanyan/library-client:current
docker run -d --restart always --name library-client -p 8080:8080 davidghulijanyan/library-client:current
EOF
