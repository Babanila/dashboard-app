# Base image
FROM python:3.9-alpine

# Set environment
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Install build and runtime dependencies
RUN apk add --no-cache \
    build-base \
    libffi-dev \
    openssl-dev \
    python3-dev \
    musl-dev \
    libstdc++ \
    gcc \
    make \
    linux-headers

# Create working directory
WORKDIR /app

# Copy dependencies first
COPY requirements.txt .

# Create and activate virtual environment
RUN python -m venv /venv && \
    /venv/bin/pip install --upgrade pip && \
    /venv/bin/pip install --no-cache-dir -r requirements.txt

# Copy application files
COPY . .

# Environment setup
ENV VIRTUAL_ENV=/venv
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

# Expose port
EXPOSE 8000

# For development
CMD ["python", "app.py"]

# Run using Gunicorn + Uvicorn worker for production
# CMD ["gunicorn", "app:app", "-w", "4", "-b", "0.0.0.0:8000"]
