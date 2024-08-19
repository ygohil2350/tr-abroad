# FROM node:18-alpine

# WORKDIR /app
# COPY package.json pnpm-lock.yaml ./
# RUN npm install -g pnpm
# RUN pnpm install
# COPY . .
# RUN pnpm run build

# FROM nginx:1-alpine-slim
# COPY dist /usr/share/nginx/html/
# COPY default.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

FROM node:20.14.0-alpine AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

ENV NODE_OPTIONS=--max_old_space_size=8198
ARG BUILD_ENV
WORKDIR /app

# Install dependencies
COPY package.json .
COPY pnpm-lock.yaml .
COPY deps /app/deps
RUN pnpm install --frozen-lockfile

COPY dist/. /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]