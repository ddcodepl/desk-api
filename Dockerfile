FROM node:14-alpine3.11
RUN apk add g++ make python3 python3-dev
WORKDIR /app

COPY package*.json ./

COPY . .

COPY ../desk /app/desk

ENV PI_DESK_PATH=/app/desk

EXPOSE 5001

RUN npm ci

RUN npm run build

CMD [ "npm", "run", "start" ]
