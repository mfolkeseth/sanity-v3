ARG NODE_VERSION

FROM node:$NODE_VERSION-alpine as build

ENV NODE_ENV production

ARG NO_MINIFY

WORKDIR /usr/src/app

RUN npm set progress=false
RUN npm config set depth 0

COPY package*.json ./

RUN --mount=type=secret,id=npmrc,target=/root/.npmrc,required=true \
  npm ci

COPY ./ ./

RUN [ $NO_MINIFY ] && npm run build:non-minified || npm run build

FROM nginx:1.23-alpine AS runtime

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 9306
