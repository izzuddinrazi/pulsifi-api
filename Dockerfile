FROM node:16-alpine
RUN addgroup -S pulsifi-group && adduser -S pulsifi -G pulsifi-group
WORKDIR /pulsifi
COPY ./server server
WORKDIR /pulsifi/server
RUN npm install nodemon -g
RUN npm install --save
USER pulsifi
CMD ["npm", "start"]