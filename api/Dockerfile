FROM node:alpine

ENV NODE_ENV=dev

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

CMD  ["yarn", "dev"]