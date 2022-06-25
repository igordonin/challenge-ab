FROM node:alpine

ENV NODE_ENV=dev

WORKDIR /app

COPY package.json yarn.lock tsconfig.json ./

RUN yarn install

COPY . .

CMD  ["yarn", "dev"]