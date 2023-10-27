# STAGE 1: BUILD PROCESS
FROM node:20-alpine as builder

RUN mkdir /app
WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .

RUN npm run build

# STAGE 2: PRODUCTION
FROM nginx:alpine-slim

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
