FROM node:20 AS node-builder
WORKDIR /app
COPY frontend/ ./frontend/
WORKDIR /app/frontend
RUN npm install
RUN npm run build

FROM golang:1.19 AS go-builder
WORKDIR /app
COPY go.mod ./
RUN go mod download
COPY *.go ./
RUN CGO_ENABLED=0 GOOS=linux go build -o yabts .

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /app
COPY --from=node-builder /app/frontend/ ./frontend/
COPY --from=go-builder /app .
EXPOSE 3000
CMD ["./yabts"]