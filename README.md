# fe-test

## Backend
```
https://fomo-test.herokuapp.com/api (GET, POST)

POST request data for creating a `DanceClass` record
{
    "teacher": "Jose",
    "location": "Long Beach",
    "date": "2022-11-10T19:00:00"
}

The `POST` endpoint returns a `400` error when attempting to create a duplicate `DanceClass` record
```

```
https://fomo-test.herokuapp.com/api/load-dev-data (GET)

This endpoint is used to clear the database and load dev data
```

## Frontend
```
cd frontend
npm install
npm run dev
```
