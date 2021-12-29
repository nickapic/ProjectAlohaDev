FROM NODE:16-slim

WORKDIR /usr/src/app

COPY ./pacakge*.json ./

RUN npm install 

COPY . .

RUN npm run install-client