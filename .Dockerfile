FROM node:18-alpine

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build

FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
