# 📝 Blog Website

A modern, full-stack blog platform built with React and a serverless backend powered by Hono (Cloudflare Workers) and Prisma with PostgreSQL. Users can create, read, update, and delete blog posts with JWT-based authentication. This project is designed to showcase real-world scalable architecture with a clean UI and developer-friendly setup.

---

## Features

-  View all blog posts with titles, tags, and timestamps
-  Create, edit, and delete posts (authenticated users only)
-  JWT-based user authentication
-  Search and filter blog posts
-  Fully responsive design with React + Tailwind
-  Serverless backend using Hono and Cloudflare Workers

---

## 🛠 Tech Stack

| Layer     | Technology                                |
|-----------|--------------------------------------------|
| Frontend  | React, Vite, Tailwind CSS, React Router    |
| Backend   | Hono (Cloudflare Workers)                  |
| Database  | Prisma ORM with PostgreSQL                 |
| Auth      | JSON Web Tokens (JWT)                      |
| Infra     | Serverless (Cloudflare Workers)            |

---

## Frontend Routes

| Route           | Description                     |
|------------------|---------------------------------|
| `/signup`        | User registration               |
| `/signin`        | User login                      |
| `/blogs`         | Blog listing page               |
| `/blog/:id`      | View a single blog post         |
| `/create-blog`   | Create a new blog post (auth)   |

---

## API Endpoints

| Method | Route                 | Description                  |
|--------|-----------------------|------------------------------|
| POST   | `/api/v1/user/signup` | Register new user            |
| POST   | `/api/v1/user/signin` | Login user                   |
| POST   | `/api/blog`           | Create blog post (auth)      |
| PUT    | `/api/blog`           | Update blog post (auth)      |
| GET    | `/api/blog/bulk`      | Fetch all blog post          |
| GET    | `/api/blog/:id`       | Fetch single post by ID      |
| DELETE | `/api/blog/:id`       | Delete blog post (auth)      |

---
