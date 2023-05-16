# FROM node:18.16.0
# WORKDIR /app
# COPY package.json .

# RUN npm install
# # COPY . .
# RUN npm run build
# # EXPOSE 8080/tcp
# CMD [ "npm", "start"  ]


# FROM node:18.16.0

# WORKDIR /app

# # COPY . .
# COPY package.json .

# RUN npm install

# RUN npm run build

# ENV HOST 0.0.0.0
# EXPOSE 3000

# CMD [ "npm", "run", "start" ]


# FROM node:18.16.0-alpine

# WORKDIR /app

# # COPY . .
# COPY package.json .

# RUN npm install
# RUN npm run build

# ENV NUXT_HOST=0.0.0.0
# ENV NUXT_PORT=3000

# EXPOSE 3000 

# # ENTRYPOINT ["node", ".output/server/index.mjs"]




FROM node:18.16.0

# WORKDIR /app

# COPY . .
COPY package.json .

RUN npm install

RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "npm", "run", "start" ]
# ENTRYPOINT ["node", ".output/server/index.mjs"]