FROM node:20 AS build-stage 

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --only=developement

# Error: permission denied, mkdir '/usr/src/app/build'
# USER node

RUN npm run tsc

FROM node:20


WORKDIR /usr/src/app

COPY --chown=node:node --from=build-stage /usr/src/app/build ./build
COPY --chown=node:node --from=build-stage /usr/src/app/package-lock.json .
COPY --chown=node:node --from=build-stage /usr/src/app/package.json .

RUN npm ci --only=production

USER node

CMD npm start