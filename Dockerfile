FROM node:8-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

RUN yarn build

RUN yarn global add serve

EXPOSE 80

CMD ["serve", "-s", "build", "-p", "80"]

