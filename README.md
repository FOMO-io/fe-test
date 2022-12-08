# fe-test

## Docker commands
```
docker compose build
docker compose up

docker compose ps
docker compose logs --follow

docker kill $(docker ps -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
```

## Backend
```
localhost:8000/api (GET, POST)
POST request data for creating a `DanceClass` record
{
    "teacher": "Jose",
    "location": "Long Beach",
    "date": "2022-11-10T19:00:00"
}

localhost:8000/load-dev-data (GET)
This endpoint is used to clear the database and load dev data
```

The `POST` endpoint returns a `400` error when attempting to create a duplicate `DanceClass` record

## Frontend
```
npm install
npm run dev
```
