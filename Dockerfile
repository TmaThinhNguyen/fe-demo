FROM node:19-alpha3.16


WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 80

CMD node index.js
