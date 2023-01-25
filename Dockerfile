FROM node:18-alpine3.16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
# Note: I don't know how to manage volume in Kubernetes yet.
COPY ./videos ./videos
EXPOSE ${PORT}
CMD ["npm", "start"]
