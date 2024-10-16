# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set environment variables
ENV FILE=/usr/src/app/input/objects.txt

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml (if available)
COPY package.json package-lock.yaml* ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Create input and output directories
RUN mkdir -p /usr/src/app/input /usr/src/app/output

# Build only challengeB.ts
RUN npx tsc src/challengeB.ts --outDir dist

# Command to run the application and redirect output to a file
CMD ["sh", "-c", "node dist/challengeB.js > /usr/src/app/output/results.txt"]
