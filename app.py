from flask import Flask, render_template
import joblib

app = Flask(__name__)

# Load the trained model
model = joblib.load('models/trained_model.pkl')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get user input from form
    #symptoms = request.form['symptoms']

    # Preprocess input data (if needed)
    # Make prediction using the loaded model
    #predicted_illness = model.predict([symptoms])  # Replace [symptoms] with actual data format

    # Pass the predicted illness to the template
    #return render_template('index.html', prediction=predicted_illness)
    pass