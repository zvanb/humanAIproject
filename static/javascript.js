// Array to store selected symptoms
let selectedSymptoms = [];

//Array that stores valid symptoms
const symptomsArray = ['itching', 'skin rash', 'nodal skin eruptions', 'continuous sneezing', 'shivering', 'chills', 'joint pain', 'stomach pain', 'acidity', 'ulcers on tongue', 'muscle wasting', 'vomiting', 'burning micturition', 'spotting urination', 'fatigue', 'weight gain', 'anxiety', 'cold hands and feets', 'mood swings', 'weight loss', 'restlessness', 'lethargy', 'patches in throat', 'irregular sugar level', 'cough', 'high fever', 'sunken eyes', 'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache', 'yellowish skin', 'dark urine', 'nausea', 'loss of appetite', 'pain behind the eyes', 'back pain', 'constipation', 'abdominal pain', 'diarrhoea', 'mild fever', 'yellow urine', 'yellowing of eyes', 'acute liver failure', 'swelling of stomach', 'swelled lymph nodes', 'malaise', 'blurred and distorted vision', 'phlegm', 'throat irritation', 'redness of eyes', 'sinus pressure', 'runny nose', 'congestion', 'chest pain', 'weakness in limbs', 'fast heart rate', 'pain during bowel movements', 'pain in anal region', 'bloody stool', 'irritation in anus', 'neck pain', 'dizziness', 'cramps', 'bruising', 'obesity', 'swollen legs', 'swollen blood vessels', 'puffy face and eyes', 'enlarged thyroid', 'brittle nails', 'swollen extremeties', 'excessive hunger', 'extra marital contacts', 'drying and tingling lips', 'slurred speech', 'knee pain', 'hip joint pain', 'muscle weakness', 'stiff neck', 'swelling joints', 'movement stiffness', 'spinning movements', 'loss of balance', 'unsteadiness', 'weakness of one body side', 'loss of smell', 'bladder discomfort', 'foul smell of urine', 'continuous feel of urine', 'passage of gases', 'internal itching', 'toxic look (typhos)', 'depression', 'irritability', 'muscle pain', 'altered sensorium', 'red spots over body', 'belly pain', 'abnormal menstruation', 'dischromic patches', 'watering from eyes', 'increased appetite', 'polyuria', 'family history', 'mucoid sputum', 'rusty sputum', 'lack of concentration', 'visual disturbances', 'receiving blood transfusion', 'receiving unsterile injections', 'coma', 'stomach bleeding', 'distention of abdomen', 'history of alcohol consumption', 'fluid overload', 'blood in sputum', 'prominent veins on calf', 'palpitations', 'painful walking', 'pus filled pimples', 'blackheads', 'scurring', 'skin peeling', 'silver like dusting', 'small dents in nails', 'inflammatory nails', 'blister', 'red sore around nose', 'yellow crust ooze'];

//dictionary used for mapping user input for model
const sympDic = {'itching': 0, 'skin rash': 0, 'nodal skin eruptions': 0, 'continuous sneezing': 0, 'shivering': 0, 'chills': 0, 'joint pain': 0, 'stomach pain': 0, 'acidity': 0, 'ulcers on tongue': 0, 'muscle wasting': 0, 'vomiting': 0, 'burning micturition': 0, 'spotting urination': 0, 'fatigue': 0, 'weight gain': 0, 'anxiety': 0, 'cold hands and feets': 0, 'mood swings': 0, 'weight loss': 0, 'restlessness': 0, 'lethargy': 0, 'patches in throat': 0, 'irregular sugar level': 0, 'cough': 0, 'high fever': 0, 'sunken eyes': 0, 'breathlessness': 0, 'sweating': 0, 'dehydration': 0, 'indigestion': 0, 'headache': 0, 'yellowish skin': 0, 'dark urine': 0, 'nausea': 0, 'loss of appetite': 0, 'pain behind the eyes': 0, 'back pain': 0, 'constipation': 0, 'abdominal pain': 0, 'diarrhoea': 0, 'mild fever': 0, 'yellow urine': 0, 'yellowing of eyes': 0, 'acute liver failure': 0, 'swelling of stomach': 0, 'swelled lymph nodes': 0, 'malaise': 0, 'blurred and distorted vision': 0, 'phlegm': 0, 'throat irritation': 0, 'redness of eyes': 0, 'sinus pressure': 0, 'runny nose': 0, 'congestion': 0, 'chest pain': 0, 'weakness in limbs': 0, 'fast heart rate': 0, 'pain during bowel movements': 0, 'pain in anal region': 0, 'bloody stool': 0, 'irritation in anus': 0, 'neck pain': 0, 'dizziness': 0, 'cramps': 0, 'bruising': 0, 'obesity': 0, 'swollen legs': 0, 'swollen blood vessels': 0, 'puffy face and eyes': 0, 'enlarged thyroid': 0, 'brittle nails': 0, 'swollen extremeties': 0, 'excessive hunger': 0, 'extra marital contacts': 0, 'drying and tingling lips': 0, 'slurred speech': 0, 'knee pain': 0, 'hip joint pain': 0, 'muscle weakness': 0, 'stiff neck': 0, 'swelling joints': 0, 'movement stiffness': 0, 'spinning movements': 0, 'loss of balance': 0, 'unsteadiness': 0, 'weakness of one body side': 0, 'loss of smell': 0, 'bladder discomfort': 0, 'foul smell of urine': 0, 'continuous feel of urine': 0, 'passage of gases': 0, 'internal itching': 0, 'toxic look (typhos)': 0, 'depression': 0, 'irritability': 0, 'muscle pain': 0, 'altered sensorium': 0, 'red spots over body': 0, 'belly pain': 0, 'abnormal menstruation': 0, 'dischromic patches': 0, 'watering from eyes': 0, 'increased appetite': 0, 'polyuria': 0, 'family history': 0, 'mucoid sputum': 0, 'rusty sputum': 0, 'lack of concentration': 0, 'visual disturbances': 0, 'receiving blood transfusion': 0, 'receiving unsterile injections': 0, 'coma': 0, 'stomach bleeding': 0, 'distention of abdomen': 0, 'history of alcohol consumption': 0, 'fluid overload': 0, 'blood in sputum': 0, 'prominent veins on calf': 0, 'palpitations': 0, 'painful walking': 0, 'pus filled pimples': 0, 'blackheads': 0, 'scurring': 0, 'skin peeling': 0, 'silver like dusting': 0, 'small dents in nails': 0, 'inflammatory nails': 0, 'blister': 0, 'red sore around nose': 0, 'yellow crust ooze': 0};

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

function mapSymptoms(symptomsArr) {
    mapDic = sympDic;
    mapArr = [];

    for (symptom of symptomsArr) {
        mapDic[symptom] = 1;
    }

    for (let symptom in mapDic) {
        mapArr.push(mapDic[symptom]);
    }

    return mapArr
}


// Function to handle prediction
function predictIllness() {
    const selectedSymptoms = Array.from(document.querySelectorAll('#selectedSymptoms li'));
    const symptomsList = selectedSymptoms.map(symptom => symptom.textContent.trim());
    const mappedSymptoms = mapSymptoms(symptomsList);

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ symptoms: mappedSymptoms})
    })
    .then(response => response.json())
    .then(data => {
        console.log('prediction:', data.prediction);
        const diseasePredictionDiv = document.getElementById('diseasePrediction');
        diseasePredictionDiv.textContent = `Disease prediction: ${data.prediction}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Event listener for Add Symptom button click
document.getElementById('addSymptomButton').addEventListener('click', addSymptom);

// Event listener for Predict Illness button click
document.getElementById('predictButton').addEventListener('click', predictIllness);
