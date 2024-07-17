# yabts

## Setup with docker guide

### Macos

Consider you have installed `docker` via `brew install --cask docker`

```
docker buildx build --no-cache -t yabts .
```

```
docker run -p 3000:3000 -it yabts
```
