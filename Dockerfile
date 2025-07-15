# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.14.0

# Base image
FROM node:${NODE_VERSION}-alpine as base
WORKDIR /usr/src/app

# Install dependencies
FROM base as deps
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm install --omit=dev --legacy-peer-deps

# Build the app
FROM deps as build
COPY . .
RUN npm run build

# Final runtime image
FROM base as final
ENV NODE_ENV production
USER node

COPY package.json ./
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/build ./build

EXPOSE 3001
CMD ["npm", "start"]
