# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:16-alpine

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/

ENV NODE_ENV=production

RUN npm run build

CMD [ "npm", "start" ]
