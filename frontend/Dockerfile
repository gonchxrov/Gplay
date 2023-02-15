FROM node:14-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g react-scripts
RUN mv node_modules /node_modules

EXPOSE 3000
CMD ["npm", "start"]