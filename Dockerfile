FROM node:22 AS builder
WORKDIR /build
COPY ./var-spa/ ./
RUN npm install
RUN npm run build

FROM node:22 AS server
WORKDIR /opt
COPY ./var-ui/ ./
COPY --from=builder /build/dist/ /opt/public/app/
RUN npm install
CMD ["node", "./bin/www"]
EXPOSE 3000
