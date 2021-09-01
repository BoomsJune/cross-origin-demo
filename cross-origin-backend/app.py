import json

from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/")
def html():
    return "hello"

@app.route("/api/data")
def get_data():
    data = [
        {"a": 1, "b": 1},
        {"a": 2, "b": 2},
    ]
    return jsonify(data)

@app.route("/api/jsonp/data")
def get_jsonp_data():
    callback = request.args.get("callback")
    data = [
        {"a": 1, "b": 1},
        {"a": 2, "b": 2},
    ]
    return f"{callback}({json.dumps(data)})"