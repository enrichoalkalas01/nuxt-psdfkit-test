FROM node:12-alpine3.13
WORKDIR /app
COPY package.json .
RUN apk add --no-cache \
    autoconf \
    automake \
    bash \
    g++ \
    libc6-compat \
    libjpeg-turbo-dev \
    libpng-dev \
    make \
    nasm
# RUN npm install -g pm2
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080/tcp
CMD [ "npm", "run", "serve" ]