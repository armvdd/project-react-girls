# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:16-alpine AS build-stage

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY img/ /app/img/
COPY public/ /app/public/
COPY src/ /app/src/
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.23.1-alpine

COPY --from=build-stage /app/build/ /var/www

# Copy the nginx.conf
COPY /nginx.conf /nginx_template.conf

COPY nginx_init.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]