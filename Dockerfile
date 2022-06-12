FROM node:17

WORKDIR /

COPY package*.json  .

RUN npm i

COPY . .

ENV PORT = 6000
EXPOSE 6000

# RUN npm start vs CMD ["npm","start"]
CMD ["npm","start"]