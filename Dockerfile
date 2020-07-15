FROM node:12.16.1-alpine

WORKDIR /publish/

ADD . .

RUN yarn --production=true

RUN yarn build

CMD ["node", "server.js"]


EXPOSE 5001