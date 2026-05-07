# User Management Backend API

A simple backend module for User Management using Node.js, Express.js, PostgreSQL, and TypeORM.

## Features

- **Create User API** - POST /api/users
- **Get User by ID API** - GET /api/users/:id
- Email validation and duplicate prevention
- Centralized error handling
- TypeORM for database operations
- TypeScript for type safety

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **TypeORM** - ORM for database operations
- **TypeScript** - Type-safe JavaScript
- **dotenv** - Environment variable management

## Project Structure

```
src/
├── config/           # Configuration files
│   ├── database.ts   # Database configuration
│   └── dataSource.ts # TypeORM data source
├── controllers/      # Request handlers
│   └── UserController.ts
├── entities/         # TypeORM entities
│   └── User.ts
├── middlewares/      # Express middlewares
│   └── errorHandler.ts
├── repositories/     # Data access layer
│   └── UserRepository.ts
├── routes/          # API routes
│   └── userRoutes.ts
├── services/        # Business logic
│   └── UserService.ts
├── app.ts           # Express app setup
└── index.ts         # Server entry point
```

## Setup Instructions

### Prerequisites

- Node.js (Latest LTS)
- PostgreSQL (running and accessible)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd re-be
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Update `.env` with your PostgreSQL credentials:
```
NODE_ENV=development
PORT=8080
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=your_password
DATABASE_NAME=re_be_db
```

5. Build the project:
```bash
npm run build
```

6. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The server will start on `http://localhost:8080`

## API Endpoints

### 1. Create User

**Endpoint:** `POST /api/users`

**Request Body:**
```json
{
  "firstName": "Siva",
  "lastName": "Kumar",
  "email": "siva@test.com"
}
```

**Validations:**
- `firstName` is mandatory
- `email` is mandatory
- `email` must be in valid format
- Duplicate emails are not allowed

**Success Response (201 Created):**
```json
{
  "message": "User created successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "firstName": "Siva",
    "lastName": "Kumar",
    "email": "siva@test.com",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Error Responses:**

- **400 Bad Request** (Invalid data):
```json
{
  "message": "Invalid request data"
}
```

- **409 Conflict** (Duplicate email):
```json
{
  "message": "Email already exists"
}
```

### 2. Get User by ID

**Endpoint:** `GET /api/users/:id`

**Path Parameters:**
- `id` (UUID) - User ID

**Success Response (200 OK):**
```json
{
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "firstName": "Siva",
    "lastName": "Kumar",
    "email": "siva@test.com",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Error Responses:**

- **404 Not Found** (User doesn't exist):
```json
{
  "message": "User not found"
}
```

- **400 Bad Request** (Invalid UUID):
```json
{
  "message": "Invalid user id"
}
```

## Database Schema

The `users` table is automatically created by TypeORM with the following structure:

| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | Primary Key |
| firstName | varchar(100) | Required |
| lastName | varchar(100) | Optional |
| email | varchar(255) | Required, Unique |
| createdAt | timestamp | Auto-generated |
| updatedAt | timestamp | Auto-updated |

## Testing with Postman

### Create User
1. Method: POST
2. URL: `http://localhost:8080/api/users`
3. Headers: `Content-Type: application/json`
4. Body:
```json
{
  "firstName": "Siva",
  "lastName": "Kumar",
  "email": "siva@test.com"
}
```

### Get User
1. Method: GET
2. URL: `http://localhost:8080/api/users/{user-id}`
3. Replace `{user-id}` with the actual UUID from the create response

## Health Check

**Endpoint:** `GET /health`

**Response:**
```json
{
  "status": "ok"
}
```

## Development

### Build
```bash
npm run build
```

### Development Server
```bash
npm run dev
```

### Run Tests
```bash
npm run test
```

## Error Handling

The application includes centralized error handling middleware that:
- Validates request data
- Returns appropriate HTTP status codes
- Provides meaningful error messages
- Handles database errors gracefully

## Environment Variables

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 8080)
- `DATABASE_HOST` - PostgreSQL host
- `DATABASE_PORT` - PostgreSQL port
- `DATABASE_USERNAME` - PostgreSQL username
- `DATABASE_PASSWORD` - PostgreSQL password
- `DATABASE_NAME` - Database name

## License

ISC
