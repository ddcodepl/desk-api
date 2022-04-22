FROM node:14-alpine
RUN apk add g++ make python3 python3-dev git
WORKDIR /app

COPY package*.json ./

COPY . .

RUN git clone https://github.com/ddcodepl/PiDesk.git /app/desk

ENV PI_DESK_PATH=/app/desk

EXPOSE 5001

RUN npm ci

RUN npm run build

CMD [ "npm", "run", "start" ]
