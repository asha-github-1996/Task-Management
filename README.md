# Task Management System

> A scalable, real-time collaborative task management system designed for remote teams. This application allows multiple users to create, assign, update, and track tasks in real-time across different projects.

## System architecture documentation link: https://docs.google.com/document/d/1dQL6RMIREkMXF0WBe2GFDs-52HFwuUsiUW7ZdOUmmSU/edit?usp=sharing

#### Features:

- Real-Time Task Updates : Recieve instant updates on task changes across all devices.
- Project Management : Create, Update, manage projects
- Task Management : Create, Update, manage tasks
- User Authentication : Secure user registration, login and role based access control

#### Architecture Overview

- Client Layer : Single Page Application(SPA) built with React and Typescript.
- Load Balancer : To evenly distribute the incoming traffic.
- API Gateway : Central point for handling client requests.
- Task Management Service : Handles all CRUD operations for tasks.
- Auth Service : Handles uaser login, registration and authorization.
- Real-Time COmmunication Service : WebSocket server for real-time updates.
- Database Layer : Realtional database (Mysql).
- Message Queue : Kafka for asynchronous task processing.
- CDN : To serve static assets.

#### Backend Setup using nodejs

1. #### Create and navigate to backend directory

```bash
 mkdir backend
 cd backend
```

2. #### Initialize node js

```bash
 npm init -y
```

3. #### Install neccessary dependencies

```bash
 npm install express mongoose bcryptjs jsonwebtoken dotenv
```

3. #### Run the backend server

```bash
npm run dev
```

#### Frontent Setup

1. #### Navigate to frontend directory

```bash
 cd frontend
```

2. #### Install dependencies

```bash
 npm install
```

3. #### Run the frontend server

```bash
npm run dev  # for developement
```
