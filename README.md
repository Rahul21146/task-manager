# Task Manager – Full Stack Application

A **Full Stack Task Management System** built using **React, Node.js, Express, MySQL, and Sequelize**.

Users can register, login, and manage their personal tasks.

---

# Tech Stack

Frontend

* React
* Axios
* React Router
* React Hot Toast

Backend

* Node.js
* Express.js
* Sequelize ORM
* JWT Authentication
* bcrypt

Database

* MySQL

---

# Project Structure

```
task-manager
│
├── backend
│
├── frontend
│
└── README.md
```

---

# Database Setup

Create database:

```sql
CREATE DATABASE taskmanager;
USE taskmanager;
```

---

# Users Table

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);
```

---

# Tasks Table

```sql
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    status ENUM('pending','completed') DEFAULT 'pending',
    UserId INT,
    FOREIGN KEY (UserId) REFERENCES users(id) ON DELETE CASCADE
);
```

---

# Refresh Tokens Table

```sql
CREATE TABLE refresh_tokens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    token TEXT,
    UserId INT,
    FOREIGN KEY (UserId) REFERENCES users(id)
);
```

---

# Backend Setup

Go to backend folder

```
cd backend
```

Install dependencies

```
npm install
```

Create `.env`

```
DB_NAME=taskmanager
DB_USER=root
DB_PASS=yourpassword
DB_HOST=localhost
JWT_SECRET=secret
JWT_REFRESH=refreshsecret
```

Run backend

```
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

# Frontend Setup

Go to frontend folder

```
cd frontend
```

Install dependencies

```
npm install
```

Start frontend

```
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

# API Endpoints

Authentication

```
POST /auth/register
POST /auth/login
```

Tasks

```
GET /tasks
POST /tasks
PATCH /tasks/:id
DELETE /tasks/:id
```

Authorization Header

```
Authorization: Bearer ACCESS_TOKEN
```

---

# Author

Rahul Singh
Full Stack Developer
MERN Stack | System Design | DSA
