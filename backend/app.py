from apis import blueprints
from flask import Flask, request, jsonify

# Create server and register apis
app = Flask(__name__)
for bp in blueprints:
    app.register_blueprint(bp)


@app.route("/")
def hello_world():
    return "<p>Flask is working</p>"


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
