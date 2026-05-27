# Event Booking System Backend

A production-inspired backend system built using Node.js, Express.js, TypeScript, MongoDB, and Socket.io.

This project was designed primarily for:

* Backend architecture learning
* Enterprise backend pattern understanding
* Real-world API design practice

The application supports:

* JWT Authentication
* Refresh Token Flow
* Role-Based Access Control (RBAC)
* Event Management
* Ticket Booking System
* Atomic Ticket Updates
* Background Job Processing
* Excel Bulk Upload
* Real-Time Chat using Socket.io
* Pagination, Search, and Filtering
* Validation and Global Error Handling

---

# Tech Stack

## Backend

* Node.js
* Express.js
* TypeScript

## Database

* MongoDB
* Mongoose

## Authentication & Security

* JWT
* bcrypt

## File Upload & Parsing

* multer
* xlsx

## Real-Time Communication

* Socket.io

## Validation

* Zod

---

# Key Features

## Authentication

* User Registration
* User Login
* JWT Access Token
* Refresh Token Rotation
* Logout & Session Invalidation
* Protected Routes

## Role-Based Access Control

Supported roles:

* ORGANIZER
* CUSTOMER

Authorization is handled using middleware.

---

## Event Management

Organizers can:

* Create events
* Update events
* Delete events
* View their events
* Bulk upload events using Excel

Customers can:

* Browse events
* Search events
* Filter events
* View event details

---

## Ticket Booking System

Customers can:

* Book tickets
* View booking history

The booking system uses MongoDB atomic updates to prevent overbooking.

---

## Background Jobs

Implemented using Node.js EventEmitter.

### Booking Confirmation Job

Triggered after successful booking.

Simulates:

* Sending booking confirmation email

### Event Update Notification Job

Triggered after event updates.

Simulates:

* Sending notifications to booked customers

---

## Real-Time Chat

Implemented using Socket.io.

Features:

* Organizer ↔ Customer chat
* Room-based messaging
* Real-time message broadcasting
* Message persistence in MongoDB

---

# Enterprise Architecture

The project follows a layered architecture inspired by enterprise backend systems.

## Architecture Layers

```text
Routes
  ↓
Controller
  ↓
Service
  ↓
Repository
  ↓
MongoDB
```

---

# Why This Architecture?

## Controller Layer

Handles:

* Request
* Response
* HTTP status codes

Controllers remain thin and contain no business logic.

---

## Service Layer

Contains:

* Business logic
* Authorization checks
* Application workflows
* Validation rules

Example:

* Ticket booking logic
* Ownership validation
* Refresh token flow

---

## Repository Layer

Responsible only for:

* Database queries
* MongoDB interactions

Benefits:

* Better maintainability
* Easier testing
* Clean separation of concerns

---

## Middleware Layer

Reusable request-processing components.

Examples:

* Authentication middleware
* RBAC middleware
* Validation middleware
* Global error middleware

---

## Utility Layer

Contains reusable helper logic.

Examples:

* JWT utilities
* Excel parser
* Async handler
* ApiError class

---

# Folder Structure

```bash
src/
│
├── config/
│   ├── db.ts
│   ├── env.ts
│   ├── multer.ts
│   └── socket.ts
│
├── constants/
│   └── statusCodes.ts
│
├── middleware/
│   ├── auth.middleware.ts
│   ├── role.middleware.ts
│   ├── validate.middleware.ts
│   └── error.middleware.ts
│
├── modules/
│   │
│   ├── auth/
│   ├── user/
│   ├── event/
│   ├── booking/
│   └── chat/
│
├── jobs/
│   ├── booking.job.ts
│   ├── eventUpdate.job.ts
│   └── eventBus.ts
│
├── utils/
│   ├── ApiError.ts
│   ├── asyncHandler.ts
│   ├── jwt.ts
│   └── excel.ts
│
├── app.ts
└── server.ts
```

---

# Authentication Flow

## Login Flow

```text
Client Login Request
        ↓
Validate Credentials
        ↓
Generate Access Token
Generate Refresh Token
        ↓
Store Refresh Token in DB
        ↓
Return Tokens
```

---

## Access Token

Used for:

* Accessing protected APIs

Characteristics:

* Short-lived
* Secure
* Sent in Authorization header

---

## Refresh Token

Used for:

* Generating new access tokens

Characteristics:

* Long-lived
* Stored in database
* Rotated after refresh

---

## Token Rotation

Every refresh request:

* Generates new refresh token
* Invalidates old refresh token

This improves security and prevents replay attacks.

---

# RBAC (Role-Based Access Control)

Authorization middleware restricts API access based on user roles.

Examples:

```ts
authorizeRoles("ORGANIZER")
```

```ts
authorizeRoles("CUSTOMER")
```

---

# Atomic Booking Logic

The system prevents overbooking using MongoDB atomic updates.

## Why Atomic Updates?

Without atomic operations:

* Multiple users could book the same remaining ticket simultaneously.

Implemented using:

```ts
$inc
$gte
findOneAndUpdate()
```

This ensures:

* Ticket availability is checked and updated safely in one operation.

---

# Background Job Architecture

The application uses an event-driven architecture.

## Flow

```text
Business Action
      ↓
Emit Event
      ↓
Background Listener
      ↓
Execute Async Task
```

---

## Events Implemented

### booking.created

Triggers:

* Booking confirmation simulation

### event.updated

Triggers:

* Event update notification simulation

---

# Socket.io Architecture

## Chat Flow

```text
Client Connects
       ↓
Join Room
       ↓
Send Message
       ↓
Persist Message
       ↓
Broadcast to Room
```

---

## Room-Based Communication

Example room format:

```text
chat_eventId_customerId
```

This isolates conversations efficiently.

---

# API Versioning

All APIs are versioned.

Example:

```text
/api/v1/auth
/api/v1/events
/api/v1/bookings
```

Benefits:

* Backward compatibility
* Safer future upgrades
* Cleaner API evolution

---

# API Endpoints

# Auth APIs

| Method | Endpoint                   | Access    |
| ------ | -------------------------- | --------- |
| POST   | /api/v1/auth/register      | Public    |
| POST   | /api/v1/auth/login         | Public    |
| POST   | /api/v1/auth/refresh-token | Public    |
| POST   | /api/v1/auth/logout        | Protected |

---

# Event APIs

| Method | Endpoint                   | Access    |
| ------ | -------------------------- | --------- |
| POST   | /api/v1/events             | ORGANIZER |
| PATCH  | /api/v1/events/:id         | ORGANIZER |
| DELETE | /api/v1/events/:id         | ORGANIZER |
| GET    | /api/v1/events             | Public    |
| GET    | /api/v1/events/:id         | Public    |
| POST   | /api/v1/events/bulk-upload | ORGANIZER |

---

# Booking APIs

| Method | Endpoint                        | Access    |
| ------ | ------------------------------- | --------- |
| POST   | /api/v1/bookings                | CUSTOMER  |
| GET    | /api/v1/bookings/my-bookings    | CUSTOMER  |
| GET    | /api/v1/bookings/event/:eventId | ORGANIZER |

---

# Query Features

## Pagination

```http
GET /api/v1/events?page=1&limit=10
```

---

## Search

```http
GET /api/v1/events?search=music
```

---

## Filtering

```http
GET /api/v1/events?location=Bangalore
```

---

# Validation & Error Handling

## Validation

Implemented using Zod.

All incoming requests are validated before reaching business logic.

---

## Global Error Handling

Centralized error middleware provides:

* Consistent API responses
* Better debugging
* Cleaner controllers

---

# Environment Variables

Create a `.env` file:

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/event-booking

JWT_ACCESS_SECRET=access_secret_key
JWT_REFRESH_SECRET=refresh_secret_key

ACCESS_TOKEN_EXPIRES=15m
REFRESH_TOKEN_EXPIRES=7d
```

---

# Setup Instructions

## Clone Repository

```bash
git clone <repository_url>
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

---

# Future Improvements

Planned improvements for production-scale systems:

* Redis-based caching
* BullMQ queues
* Docker containerization
* Unit & integration testing
* Rate limiting
* AWS S3 file uploads
* Email service integration
* Message delivery tracking
* Notification service
* Admin analytics dashboard

---

# Author

L Rakesh Singh

MERN Developer

---

# License

This project is for learning, interview preparation, and educational purposes.
