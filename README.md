# go-react-ts-todo
ToDo application using Golang, React, TypeScript 

To run server
```
cd server
go run main.go
```

To run client
```
cd client
yarn dev
```

## Rest Endpoints
### Healthcheck
GET http://localhost:4000/healthcheck

### Add Todo
POST http://localhost:4000/api/todos

with body
```
{
    "title": "Testing",
    "body": "Finish Tutorial"
}
```

Response:
```
[
    {
        "id": 1,
        "title": "Testing",
        "done": false,
        "body": "Finish Tutorial"
    }
]
```

### Mark Todo Done
PATCH http://localhost:4000/api/todos/:id/done

Response:
```
[
    {
        "id": 1,
        "title": "Testing",
        "done": true,
        "body": "Finish Tutorial"
    }
]
```

### Get All Todos
GET http://localhost:4000/api/todos

Response:
```
[
    {
        "id": 1,
        "title": "Testing",
        "done": false,
        "body": "Finish Tutorial"
    }
]
```
