# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY ./book-my-sport/package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code into the container
COPY ./book-my-sport ./

# Expose the port your app will run on
EXPOSE 3000

# Start your application
CMD ["npm", "start"]
