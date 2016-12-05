# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API


### Session

- `POST /api/session`
- `DELETE /api/session`

### Users

- `POST /api/users` - create new user
- `GET /api/users/:id` - show user profile


### Questions

- `POST /api/questions` - create a new question
- `GET /api/questions/:id` - show a specific question

### Answers

- `POST /api/questions/:id/answers` - create a new answer for a specific question
- `GET /api/questions/:id/answers/:id` - show a specific answer for a specific question

### Comments

- `POST /api/questions/:id/answers/:id/comments` - create a new comment for a specific answer
- `GET /api/questions/:id/answers/:id/comments/:id` - shows a specific comment for a specific answer
