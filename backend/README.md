## 🚀 Running the Backend Alone Locally (Without Docker)

To run the Flask backend directly on your machine (without Docker), follow these steps:

### 1. Navigate to the backend directory
Open your terminal and run:

```bash
cd backend
```

### 2. Create and activate a virtual environment
On macOS/Linux:

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install dependencies
Make sure you have requirements.txt in the same directory, then run:

```bash
pip install -r requirements.txt
```

### 4. Start the Flask API
Run the following command to launch the development server:

```bash
python app.py
```



## 🐳 Running the Backend with Docker

Follow these steps to build and run the backend using Docker:

### 1. Navigate to the Backend Directory

Open your terminal and change into the backend directory:

```bash
cd backend
```

### 2. Build the Docker Image
Run the following command to build the Docker image:

```bash
docker build -t fast-api .
```

### 3. Run the Docker Container
After the image is built, start the container with:

```bash
docker run -p 8000:8000 fast-api
 ```


## Usage

### 1. Goto the below url
```bash
http://localhost:8000/
```

### 2. Try out the api examples
- http://localhost:8000/api/v1/products
- http://localhost:8000/api/v1/products/search?name=phone
- http://localhost:8000/api/v1/products/search?name=phone&limit=10&skip=5