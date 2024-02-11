FROM node:lts-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

ENV NEXT_PUBLIC_SERVER_URL=https://ecommerce-server-jljn.onrender.com

COPY . .
RUN npm run build

USER node

CMD [ "npm", "start" ]

EXPOSE 3000