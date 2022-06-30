FROM node:alpine

ENV NODE_ENV=staging

WORKDIR /app

COPY package.json yarn.lock tsconfig.json ./

RUN yarn install

COPY . .

CMD  ["sh", "-c", "npx prisma generate && yarn dev"] 