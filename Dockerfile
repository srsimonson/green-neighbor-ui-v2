FROM node:12-alpine as build
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM nginx:stable-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /var/www
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
