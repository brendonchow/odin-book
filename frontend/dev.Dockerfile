FROM node:20

WORKDIR /usr/src/app

COPY ./frontend .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

CMD ["npm", "run", "dev"]