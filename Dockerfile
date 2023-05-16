FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
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

RUN npm install    
# RUN npm install -g pm2
COPY . .
RUN npm run build
# EXPOSE 8080/tcp
CMD [ "npm", "run", "start" ]