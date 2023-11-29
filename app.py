import subprocess
from flask import Flask, render_template, request, jsonify
import joblib

app = Flask(__name__)

def build_model():
    try:
        subprocess.run(["python", "models/buildModel.py"])  # Run buildModel.py using subprocess
        print("Model built successfully.")
    except FileNotFoundError:
        print("buildModel.py not found.")
    except Exception as e:
        print("Error building model:", str(e))

def load_model():
    try:
        model = joblib.load('models/trainedModel.pkl')
        return model
    except FileNotFoundError:
        print("Model file not found.")
        return None
    except Exception as e:
        print("Error loading model:", str(e))
        return None

model = load_model()
if model is None:
    build_model()
    model = load_model()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    user_symptoms = data.get('symptoms')

    # Perform prediction with your model using the received symptoms
    # Replace this with your actual model prediction logic
    #prediction = predict_with_your_model(user_symptoms)

    # Return the prediction result as JSON
    return jsonify({'prediction': "hello world"})

if __name__ == '__main__':
    app.run(port=8000, debug=True)
