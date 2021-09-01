import json

from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={
    r"/api/*": {
        "origins": "http://127.0.0.1:8080",  # 指定请求来源，Access-Control-Allow-Origin
        "supports_credentials": True,  # 指定携带身份凭证，Access-Control-Allow-Credentials
        "max_age": 3600,  # 预检请求缓存时间，Access-Control-Max-Age
        }
    })


@app.route("/api/data")
def get_data():
    data = [
        {"a": 1, "b": 1},
        {"a": 2, "b": 2},
    ]
    return jsonify(data)


@app.route("/api/data", methods=["PUT"])
def get_data_by_put():
    data = [
        {"a": 3, "b": 3},
    ]
    return jsonify(data)
