# Step 1: Use an official Node.js runtime as a parent image
FROM node:18-alpine AS builder

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Build the Next.js application
RUN npm run build

# Step 7: Use a smaller image for the production environment
FROM node:18-alpine AS runner

# Step 8: Set the working directory inside the container
WORKDIR /app

# Step 9: Copy the build artifacts and necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Step 10: Expose the port Next.js runs on
EXPOSE 3000

# Step 11: Start the Next.js application
CMD ["npm", "run", "start"]
