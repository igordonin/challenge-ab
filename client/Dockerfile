# Stage 1 - build
FROM node:16-alpine AS builder

ENV NODE_ENV=staging

WORKDIR /app

COPY package.json yarn.lock jsconfig.json ./

RUN yarn install

COPY . .

RUN yarn build

# Stage 2 - production
FROM node:16-alpine AS final

ENV NODE_ENV=staging
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

WORKDIR /app

ADD package.json .
ADD nuxt.config.js .

COPY --from=builder /app/.nuxt ./.nuxt
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/static ./static

CMD ["yarn", "start"]
