FROM node:16-alpine as dev-deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

FROM node:16-alpine as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .

RUN yarn storybook:build

FROM nginx:1.23.3 as prod
EXPOSE 80

COPY --from=builder /app/storybook-static /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]