# 🐳 Multi-App Docker Compose Setup

This repository contains two applications:
- **Frontend** (React-based Dashboard UI)
- **Backend** (Flask-based API)

Both applications are managed through a single `docker-compose.yml` file located at the root of the project.

---

## ✅ Prerequisites

Before running the applications, ensure you have the following installed:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/) (usually included with Docker Desktop)

---

## 🚀 Running Both Applications

### 1. Clone the Repository

```bash
git clone [dashboard-app](https://github.com/Babanila/dashboard-app.git)
cd dashboard-app
```

### 2. Navigate to the Root Directory
Make sure you're in the directory containing docker-compose.yml.

### 3. Build and Start the Applications
Run the following command to build and launch both services:

```bash
docker-compose up --build
```

### 4. Access the Applications
Once running, you can access the services in your browser:

   - 🌐 Frontend (React Dashboard)
      -   http://localhost:3000

   - 🛠️ Backend (Flask API)
        -   http://localhost:8000
        -   http://localhost:8000/api/v1/products


### 🛑 Stopping the Applications
To stop the applications, either:
   - Press Ctrl + C in the terminal where Docker Compose is running or
   - Run the following command in a new terminal:
      ```bash
      docker-compose down
      ```
