FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm install

# Error: permission denied, vite.config
# USER node

CMD npm run dev