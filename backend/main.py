from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import os


app = Flask(__name__)
CORS(app)

@app.route('/api/status', methods=['GET'])
def status_check():
    return jsonify(message="Hello from Flask!")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists("frontend/dist/" + path):
        return send_from_directory('frontend/dist', path)
    else:
        return send_from_directory('frontend/dist', 'index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
