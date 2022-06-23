FROM node:16-alpine

ENV NODE_ENV=dev
ENV NUXT_HOST=0.0.0.0

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

CMD  ["yarn", "dev"]