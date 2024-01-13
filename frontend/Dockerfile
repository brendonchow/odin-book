FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci

RUN npm run build

# serve

FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html