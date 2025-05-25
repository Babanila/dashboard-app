# Stage 1: Build the React app
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve using NGINX
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/nginx.conf # Remove default nginx config and replace with your own (optional)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
