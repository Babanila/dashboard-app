# Multi-App Docker Compose Setup

This repository contains two applications, each in its own folder (`Frontend` and `Backend`).  
The root `docker-compose.yml` manages building and running both applications simultaneously.

## Prerequisites

- Docker installed on your machine
- Docker Compose installed (usually bundled with Docker)

## How to run both applications

1. Clone the repository

2. Open a terminal and navigate to the root directory of this project.

3. Build and start both applications with:
    ```bash
        docker-compose up --build
    ```

4. Access the applications in your browser:

    - Frontend App (Dashboard UI): http://localhost:3000
    - Backend App (Flask API):  http://localhost:8000
                    http://localhost:8000/api/v1/products



5. Stop the applications
    To stop the running containers, press Ctrl+C in the terminal where Docker Compose is running, or run:

    ```bash
    docker-compose down
    ```
