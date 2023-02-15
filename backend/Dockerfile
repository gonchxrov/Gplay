FROM node:14.17.1-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g nodemon
RUN mv node_modules /node_modules

EXPOSE 4000
CMD ["npm", "start"]