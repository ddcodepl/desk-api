FROM node:14-alpine3.11
RUN apk add g++ make python3 python3-dev
WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

EXPOSE 5001

RUN npm ci

RUN npm run build

CMD [ "npm", "run", "start" ]
