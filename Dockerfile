FROM node:lts-alpine3.11

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

EXPOSE 5555

RUN npm ci

RUN npm run build

CMD [ "npm", "run", "start" ]
