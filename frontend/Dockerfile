# Stage 1: Build the React app with Vite
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY vite.config.ts ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve using NGINX
FROM nginx:alpine

# Copy the built assets from Vite (different output directory than CRA)
COPY --from=builder /app/dist /usr/share/nginx/html

# Uncomment to use custom nginx config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
