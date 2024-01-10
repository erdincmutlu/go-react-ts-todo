# go-react-ts-todo
ToDo application using Golang, React, TypeScript 

To run
```
cd server
go run main.go
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