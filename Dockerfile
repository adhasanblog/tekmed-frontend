#Node version

FROM node:22.15

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]