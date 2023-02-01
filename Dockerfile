FROM node:17-alpha


WORKDIR /app

COPY package.json .

COPY . .

EXPOSE 80

CMD ["npm", "start"]
