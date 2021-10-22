#!/usr/bin/env sh
docker build -t davidghulijanyan/library-api .
docker push davidghulijanyan/library-api

ssh deploy@$DEPLOY_SERVER << EOF
docker pull davidghulijanyan/library-api
docker stop library-api || true
docker rm library-api || true
docker rmi davidghulijanyan/library-api:current || true
docker tag davidghulijanyan/library-api:latest davidghulijanyan/library-api:current
docker run -d --restart always --name library-api -p 8081:8081 davidghulijanyan/library-api:current
EOF
