// Array to store selected symptoms
let selectedSymptoms = [];

//Array that stores valid symptoms
const symptomsArray = ['itching', 'skin rash', 'nodal skin eruptions',
'continuous sneezing', 'shivering', 'chills', 'joint pain',
'stomach pain', 'acidity', 'ulcers on tongue', 'muscle wasting',
'vomiting', 'burning micturition', 'spotting urination', 'fatigue',
'weight gain', 'anxiety', 'cold hands and feets', 'mood swings',
'weight loss', 'restlessness', 'lethargy', 'patches in throat',
'irregular sugar level', 'cough', 'high fever', 'sunken eyes',
'breathlessness', 'sweating', 'dehydration', 'indigestion',
'headache', 'yellowish skin', 'dark urine', 'nausea',
'loss of appetite', 'pain behind the eyes', 'back pain',
'constipation', 'abdominal pain', 'diarrhoea', 'mild fever',
'yellow urine', 'yellowing of eyes', 'acute liver failure',
'fluid overload', 'swelling of stomach', 'swelled lymph nodes',
'malaise', 'blurred and distorted vision', 'phlegm',
'throat irritation', 'redness of eyes', 'sinus pressure',
'runny nose', 'congestion', 'chest pain', 'weakness in limbs',
'fast heart rate', 'pain during bowel movements',
'pain in anal region', 'bloody stool', 'irritation in anus',
'neck pain', 'dizziness', 'cramps', 'bruising', 'obesity',
'swollen legs', 'swollen blood vessels', 'puffy face and eyes',
'enlarged thyroid', 'brittle nails', 'swollen extremeties',
'excessive hunger', 'extra marital contacts',
'drying and tingling lips', 'slurred speech', 'knee pain',
'hip joint pain', 'muscle weakness', 'stiff neck',
'swelling joints', 'movement stiffness', 'spinning movements',
'loss of balance', 'unsteadiness', 'weakness of one body side',
'loss of smell', 'bladder discomfort', 'foul smell ofurine',
'continuous feel of urine', 'passage of gases', 'internal itching',
'toxic look (typhos)', 'depression', 'irritability', 'muscle pain',
'altered sensorium', 'red spots over body', 'belly pain',
'abnormal menstruation', 'dischromic patches',
'watering from eyes', 'increased appetite', 'polyuria',
'family history', 'mucoid sputum', 'rusty sputum',
'lack of concentration', 'visual disturbances',
'receiving blood transfusion', 'receiving unsterile injections',
'coma', 'stomach bleeding', 'distention of abdomen',
'history of alcohol consumption', 'blood in sputum',
'prominent veins on calf', 'palpitations', 'painful walking',
'pus filled pimples', 'blackheads', 'scurring', 'skin peeling',
'silver like dusting', 'small dents in nails',
'inflammatory nails', 'blister', 'red sore around nose',
'yellow crust ooze'];

//Populates options with valid symptoms
function populateDatalist() {
    const datalist = document.getElementById('symptomsList');
    symptomsArray.forEach(symptom => {
        const option = document.createElement('option');
        option.value = symptom;
        datalist.appendChild(option);
    });
}

populateDatalist();

// Function to add a symptom to the list
function addSymptom() {
    const symptomInput = document.getElementById('symptomInput').value.trim().toLowerCase(); // Convert to lowercase
    const symptomExists = symptomsArray.some(symptom => symptom.toLowerCase() === symptomInput);
    if (symptomInput && symptomExists) {
        // Add the symptom only if it exists in the predefined symptoms list
        const selectedSymptoms = document.getElementById('selectedSymptoms');
        const listItem = document.createElement('li');
        listItem.textContent = symptomInput;
        selectedSymptoms.appendChild(listItem);
        document.getElementById('symptomInput').value = ''; // Clear the input field
    } else {
        alert('Please enter a valid symptom from the list.');
    }
}

// Function to display selected symptoms
function displaySelectedSymptoms() {
    const selectedSymptomsList = document.getElementById('selectedSymptoms');
    selectedSymptomsList.innerHTML = ''; // Clear previous list

    selectedSymptoms.forEach(symptom => {
        const listItem = document.createElement('li');
        listItem.textContent = symptom;
        selectedSymptomsList.appendChild(listItem);
    });
}

// Function to handle prediction
function predictIllness() {
    // Here, you would send selectedSymptoms to your Flask endpoint for prediction
    // Use fetch or another method to send the data to your Flask backend
    // Display or handle the prediction result accordingly
    console.log('Selected symptoms:', selectedSymptoms);
    // Replace the above console.log with your logic to send the data to the Flask backend
}

// Event listener for Add Symptom button click
document.getElementById('addSymptomButton').addEventListener('click', addSymptom);

// Event listener for Predict Illness button click
document.getElementById('predictButton').addEventListener('click', predictIllness);
