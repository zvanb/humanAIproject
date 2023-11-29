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
def predict_illness():
    # Get the symptoms from the request sent by JavaScript
    symptoms = request.json.get('symptoms')

    #Your prediction logic here using the symptoms...
    processed_input = symptoms[:132]  # Ensure only the first 132 features are used
    
    # Reshape the input to be a 2D array (required by scikit-learn)
    user_input = [processed_input]  # Convert to a list of lists
    
    # Use the trained model to make predictions
    predicted_illness = model.predict(user_input)

    return jsonify({'prediction': predicted_illness[0]})


if __name__ == '__main__':
    app.run(port=8000, debug=True)
