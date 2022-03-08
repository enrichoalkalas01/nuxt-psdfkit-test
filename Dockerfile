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
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 8080/tcp
CMD [ "yarn", "serve" ]