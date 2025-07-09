# Step 1: Use official Node.js image
FROM node:18-alpine

# Step 2: Create app directory
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Build the app (optional, if needed)
RUN npm run build

# Step 6: Copy rest of the code
COPY . .

# Step 7: Expose port (default 3000)
EXPOSE 3000

# Step 8: Start the app
CMD ["npm", "start"]
