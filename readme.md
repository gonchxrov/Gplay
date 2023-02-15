# Gplay

### General

Requires:
* docker
* docker-compose

### Build

Install all dependencies and build docker

```bash
docker-compose up --build -d
```

### Migrate 
Run migrations and seeders

```bash
docker exec backend npm run build
```

## Development
Regular development flow is:

```bash
docker-compose up -d
```