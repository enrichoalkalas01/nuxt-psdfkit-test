# Use the official Node.js 14 image as the base
FROM node:18.15.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the Nuxt.js application
RUN npm run build

# Expose the port that Nuxt.js will run on
EXPOSE 3000

# Start the Nuxt.js application
CMD [ "npm", "run", "start" ]