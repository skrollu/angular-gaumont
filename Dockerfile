FROM node:15

WORKDIR /angular-app

COPY . .

RUN npm install

EXPOSE 4201

CMD ["npm", "start"]