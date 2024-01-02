FROM node:21-alpine3.19 as build

RUN corepack enable
RUN corepack prepare yarn@4 --activate

WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build


FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build/ /usr/share/nginx/html