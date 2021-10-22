FROM node:16-alpine

EXPOSE 8081

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN mkdir /build
WORKDIR /build
ADD package.json package-lock.json /build/
RUN npm install
ADD . /build

CMD ["npm", "docker:start"]
