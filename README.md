# Job-Application-Tracker-API

A RESTful Job Application Tracker API built with Node.js and Express.js, featuring CRUD operations, middleware, request validation, and centralized error handling. MongoDB integration in progress.

# Job Application Tracker API

A RESTful backend API for managing job applications, built with **Node.js** and **Express.js**.

This project is part of my backend development journey. It focuses on building a structured, maintainable API while developing a deeper understanding of server-side development, middleware, request handling, validation, and database integration.

## Features

- Create new job applications.
- Retrieve job applications.
- Update existing job applications.
- Delete job applications.
- Request logging middleware.
- Request data validation.
- Centralized error-handling middleware.
- Environment variable configuration.
- Modular project structure.

## Tech Stack

- **Node.js** – JavaScript runtime.
- **Express.js** – Backend web framework.
- **Mongoose** – MongoDB object modeling library (database integration in progress).
- **MongoDB** – Planned database.
- **dotenv** – Environment variable management.
- **Thunder Client** – API testing.

## Project Structure

```text
Node.js-express.js-series/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── applicationController.js
│
├── data/
│   └── applications.js
│
├── middleware/
│   ├── errorHandler.js
│   ├── requestLogger.js
│   └── validateApplication.js
│
├── models/
│
├── routes/
│   └── applicationRoutes.js
│
├── utils/
│   └── validation.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm

### Installation

1. Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

2. Navigate into the project:

```bash
cd Node.js-express.js-series
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the project root:

```env
PORT=3000
```

5. Start the development server using your configured start script.

## API Functionality

The API currently supports CRUD operations for job applications.

| HTTP Method | Functionality         |
| ----------- | --------------------- |
| GET         | Retrieve applications |
| POST        | Create an application |
| PUT/PATCH   | Update an application |
| DELETE      | Delete an application |

The API uses request validation and centralized error handling to manage invalid requests and unexpected server errors.

## Development Progress

### Completed

- Express server setup.
- RESTful routing.
- Controller-based request handling.
- CRUD operations using temporary in-memory data.
- Custom middleware.
- Request validation.
- Centralized error handling.
- Environment variable configuration.
- Initial Mongoose connection module.

### In Progress

- MongoDB Atlas configuration.
- Establishing a database connection.
- Creating Mongoose schemas and models.
- Replacing in-memory storage with persistent database storage.
- Testing database-backed CRUD operations.

## What I'm Learning

Through this project, I'm developing practical experience with:

- REST API architecture.
- Separation of concerns.
- Asynchronous JavaScript.
- Express middleware.
- Error handling and debugging.
- Environment configuration.
- MongoDB and Mongoose.

## Future Improvements

- Persistent database storage.
- Authentication and authorization.
- Improved API security.
- Automated testing.
- API documentation.

## Author

Developed as part of my journey towards becoming a professional software engineer.
