from flask import Flask, jsonify, request
from flask_cors import CORS
import requests


app = Flask(__name__)
CORS(app, resources=r'/api/*')

@app.route("/")
def status():
    return jsonify("OK")


@app.route("/api/v1/products/search")
def search():
    search_value = request.args.get("name")
    limit = request.args.get("limit") or 30
    skip = request.args.get("skip") or 0

    url = f'https://dummyjson.com/products/search?q={search_value}'
    params = f'limit={limit}&skip={skip}'

    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        return jsonify(data)
    except requests.exceptions.RequestException as e:
        return(f"Request failed: {e}")



@app.route("/api/v1/products/<id>")
def product(id):
    url = f'https://dummyjson.com/products/{id}'
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        return jsonify(data)
    except requests.exceptions.RequestException as e:
        return(f"Request failed: {e}")


@app.route("/api/v1/products")
def products():
    url = 'https://dummyjson.com/products'
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        return jsonify(data)
    except requests.exceptions.RequestException as e:
        return(f"Request failed: {e}")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)

