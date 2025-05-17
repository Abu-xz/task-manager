# 🗂️ Task Management API (Express + TypeScript + Repository Pattern)

This is a Task Management backend API built with **Node.js**, **Express**, and **TypeScript**, following the **Repository Design Pattern** for clean code architecture. This project is intended as a learning experience to understand how to organize server-side logic in a scalable and maintainable way.

---

## 📁 Project Structure (Repository Pattern)

```bash
src/
│
├── app.ts                 # Entry point of the app
│
├── config/                # Configuration files (e.g., DB connection)
│   └── db.ts
│
├── models/                # TypeScript interfaces or Mongoose schemas
│   └── task.model.ts
│
├── repositories/          # Data access layer (MongoDB or SQL logic)
│   └── task.repository.ts
│
├── services/              # Business logic layer
│   └── task.service.ts
│
├── controllers/           # Request handler layer
│   └── task.controller.ts
│
├── routes/                # Express routers
│   └── task.routes.ts
│
└── utils/                 # Utility/helper functions
    └── logger.ts


🚀 How It Works (Repository Pattern Explained)

# Client → Routes → Controllers → Services → Repositories → Database

🔁 Repository Pattern Layer Responsibilities:
Model

Defines the structure of a Task (e.g., title, description, status).

If using MongoDB, this contains the Mongoose schema.

Repository

Handles all database-related operations (CRUD).

Example: findTasks(), createTask(task), deleteTaskById(id)

Service

Contains all business logic and rules.

Example: Before creating a task, check if a task with the same title exists.

Controller

Express route handlers; receives HTTP requests and delegates work to service layer.

Returns appropriate HTTP responses (status codes, error handling, etc.)

Routes

Maps routes to controller functions (GET /tasks, POST /task, etc.)

