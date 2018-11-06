FROM node:10-alpine
ADD ./server /code
WORKDIR /code
RUN npm install
CMD ["npm", "start"]