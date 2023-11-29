// Array to store selected symptoms
let selectedSymptoms = [];

//Array that stores valid symptoms
const symptomsArray = ['itching', 'skin rash', 'nodal skin eruptions', 'continuous sneezing', 'shivering', 'chills', 'joint pain', 'stomach pain', 'acidity', 'ulcers on tongue', 'muscle wasting', 'vomiting', 'burning micturition', 'spotting urination', 'fatigue', 'weight gain', 'anxiety', 'cold hands and feets', 'mood swings', 'weight loss', 'restlessness', 'lethargy', 'patches in throat', 'irregular sugar level', 'cough', 'high fever', 'sunken eyes', 'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache', 'yellowish skin', 'dark urine', 'nausea', 'loss of appetite', 'pain behind the eyes', 'back pain', 'constipation', 'abdominal pain', 'diarrhoea', 'mild fever', 'yellow urine', 'yellowing of eyes', 'acute liver failure', 'swelling of stomach', 'swelled lymph nodes', 'malaise', 'blurred and distorted vision', 'phlegm', 'throat irritation', 'redness of eyes', 'sinus pressure', 'runny nose', 'congestion', 'chest pain', 'weakness in limbs', 'fast heart rate', 'pain during bowel movements', 'pain in anal region', 'bloody stool', 'irritation in anus', 'neck pain', 'dizziness', 'cramps', 'bruising', 'obesity', 'swollen legs', 'swollen blood vessels', 'puffy face and eyes', 'enlarged thyroid', 'brittle nails', 'swollen extremeties', 'excessive hunger', 'extra marital contacts', 'drying and tingling lips', 'slurred speech', 'knee pain', 'hip joint pain', 'muscle weakness', 'stiff neck', 'swelling joints', 'movement stiffness', 'spinning movements', 'loss of balance', 'unsteadiness', 'weakness of one body side', 'loss of smell', 'bladder discomfort', 'foul smell of urine', 'continuous feel of urine', 'passage of gases', 'internal itching', 'toxic look (typhos)', 'depression', 'irritability', 'muscle pain', 'altered sensorium', 'red spots over body', 'belly pain', 'abnormal menstruation', 'dischromic patches', 'watering from eyes', 'increased appetite', 'polyuria', 'family history', 'mucoid sputum', 'rusty sputum', 'lack of concentration', 'visual disturbances', 'receiving blood transfusion', 'receiving unsterile injections', 'coma', 'stomach bleeding', 'distention of abdomen', 'history of alcohol consumption', 'fluid overload', 'blood in sputum', 'prominent veins on calf', 'palpitations', 'painful walking', 'pus filled pimples', 'blackheads', 'scurring', 'skin peeling', 'silver like dusting', 'small dents in nails', 'inflammatory nails', 'blister', 'red sore around nose', 'yellow crust ooze'];

//dictionary used for mapping user input for model
const sympDic = {'itching': 0, 'skin rash': 0, 'nodal skin eruptions': 0, 'continuous sneezing': 0, 'shivering': 0, 'chills': 0, 'joint pain': 0, 'stomach pain': 0, 'acidity': 0, 'ulcers on tongue': 0, 'muscle wasting': 0, 'vomiting': 0, 'burning micturition': 0, 'spotting urination': 0, 'fatigue': 0, 'weight gain': 0, 'anxiety': 0, 'cold hands and feets': 0, 'mood swings': 0, 'weight loss': 0, 'restlessness': 0, 'lethargy': 0, 'patches in throat': 0, 'irregular sugar level': 0, 'cough': 0, 'high fever': 0, 'sunken eyes': 0, 'breathlessness': 0, 'sweating': 0, 'dehydration': 0, 'indigestion': 0, 'headache': 0, 'yellowish skin': 0, 'dark urine': 0, 'nausea': 0, 'loss of appetite': 0, 'pain behind the eyes': 0, 'back pain': 0, 'constipation': 0, 'abdominal pain': 0, 'diarrhoea': 0, 'mild fever': 0, 'yellow urine': 0, 'yellowing of eyes': 0, 'acute liver failure': 0, 'swelling of stomach': 0, 'swelled lymph nodes': 0, 'malaise': 0, 'blurred and distorted vision': 0, 'phlegm': 0, 'throat irritation': 0, 'redness of eyes': 0, 'sinus pressure': 0, 'runny nose': 0, 'congestion': 0, 'chest pain': 0, 'weakness in limbs': 0, 'fast heart rate': 0, 'pain during bowel movements': 0, 'pain in anal region': 0, 'bloody stool': 0, 'irritation in anus': 0, 'neck pain': 0, 'dizziness': 0, 'cramps': 0, 'bruising': 0, 'obesity': 0, 'swollen legs': 0, 'swollen blood vessels': 0, 'puffy face and eyes': 0, 'enlarged thyroid': 0, 'brittle nails': 0, 'swollen extremeties': 0, 'excessive hunger': 0, 'extra marital contacts': 0, 'drying and tingling lips': 0, 'slurred speech': 0, 'knee pain': 0, 'hip joint pain': 0, 'muscle weakness': 0, 'stiff neck': 0, 'swelling joints': 0, 'movement stiffness': 0, 'spinning movements': 0, 'loss of balance': 0, 'unsteadiness': 0, 'weakness of one body side': 0, 'loss of smell': 0, 'bladder discomfort': 0, 'foul smell of urine': 0, 'continuous feel of urine': 0, 'passage of gases': 0, 'internal itching': 0, 'toxic look (typhos)': 0, 'depression': 0, 'irritability': 0, 'muscle pain': 0, 'altered sensorium': 0, 'red spots over body': 0, 'belly pain': 0, 'abnormal menstruation': 0, 'dischromic patches': 0, 'watering from eyes': 0, 'increased appetite': 0, 'polyuria': 0, 'family history': 0, 'mucoid sputum': 0, 'rusty sputum': 0, 'lack of concentration': 0, 'visual disturbances': 0, 'receiving blood transfusion': 0, 'receiving unsterile injections': 0, 'coma': 0, 'stomach bleeding': 0, 'distention of abdomen': 0, 'history of alcohol consumption': 0, 'fluid overload': 0, 'blood in sputum': 0, 'prominent veins on calf': 0, 'palpitations': 0, 'painful walking': 0, 'pus filled pimples': 0, 'blackheads': 0, 'scurring': 0, 'skin peeling': 0, 'silver like dusting': 0, 'small dents in nails': 0, 'inflammatory nails': 0, 'blister': 0, 'red sore around nose': 0, 'yellow crust ooze': 0};

//dictionary that holds illness cures
const cureDic = {'Drug Reaction': 'stop irritation, consult nearest hospital, stop taking drug, follow up', 'Malaria': 'Consult nearest hospital, avoid oily food, avoid non veg food, keep mosquitos out', 'Allergy': 'apply calamine, cover area with bandage, , use ice to compress itching', 'Hypothyroidism': 'reduce stress, exercise, eat healthy, get proper sleep', 'Psoriasis': 'wash hands with warm soapy water, stop bleeding using pressure, consult doctor, salt baths', 'GERD': 'avoid fatty spicy food, avoid lying down after eating, maintain healthy weight, exercise', 'Chronic cholestasis': 'cold baths, anti itch medicine, consult doctor, eat healthy', 'hepatitis A': 'Consult nearest hospital, wash hands through, avoid fatty spicy food, medication', 'Osteoarthristis': 'acetaminophen, consult nearest hospital, follow up, salt baths', '(vertigo) Paroymsal  Positional Vertigo': 'lie down, avoid sudden change in body, avoid abrupt head movment, relax', 'Hypoglycemia': 'lie down on side, check in pulse, drink sugary drinks, consult doctor', 'Acne': 'bath twice, avoid fatty spicy food, drink plenty of water, avoid too many products', 'Diabetes ': 'have balanced diet, exercise, consult doctor, follow up', 'Impetigo': 'soak affected area in warm water, use antibiotics, remove scabs with wet compressed cloth, consult doctor', 'Hypertension ': 'meditation, salt baths, reduce stress, get proper sleep', 'Peptic ulcer diseae': 'avoid fatty spicy food, consume probiotic food, eliminate milk, limit alcohol', 'Dimorphic hemmorhoids(piles)': 'avoid fatty spicy food, consume witch hazel, warm bath with epsom salt, consume alovera juice', 'Common Cold': 'drink vitamin c rich drinks, take vapour, avoid cold food, keep fever in check', 'Chicken pox': 'use neem in bathing , consume neem leaves, take vaccine, avoid public places', 'Cervical spondylosis': 'use heating pad or cold pack, exercise, take otc pain reliver, consult doctor', 'Hyperthyroidism': 'eat healthy, massage, use lemon balm, take radioactive iodine treatment', 'Urinary tract infection': 'drink plenty of water, increase vitamin c intake, drink cranberry juice, take probiotics', 'Varicose veins': 'lie down flat and raise the leg high, use oinments, use vein compression, dont stand still for long', 'AIDS': 'avoid open cuts, wear ppe if possible, consult doctor, follow up', 'Paralysis (brain hemorrhage)': 'massage, eat healthy, exercise, consult doctor', 'Typhoid': 'eat high calorie vegitables, antiboitic therapy, consult doctor, medication', 'Hepatitis B': 'consult nearest hospital, vaccination, eat healthy, medication', 'Fungal infection': 'bath twice, use detol or neem in bathing water, keep infected area dry, use clean cloths', 'Hepatitis C': 'Consult nearest hospital, vaccination, eat healthy, medication', 'Migraine': 'meditation, reduce stress, use poloroid glasses in sun, consult doctor', 'Bronchial Asthma': 'switch to loose cloothing, take deep breaths, get away from trigger, seek help', 'Alcoholic hepatitis': 'stop alcohol consumption, consult doctor, medication, follow up', 'Jaundice': 'drink plenty of water, consume milk thistle, eat fruits and high fiberous food, medication', 'Hepatitis E': 'stop alcohol consumption, rest, consult doctor, medication', 'Dengue': 'drink papaya leaf juice, avoid fatty spicy food, keep mosquitos away, keep hydrated', 'Hepatitis D': 'consult doctor, medication, eat healthy, follow up', 'Heart attack': 'call ambulance, chew or swallow asprin, keep calm, ', 'Pneumonia': 'consult doctor, medication, rest, follow up', 'Arthritis': 'exercise, use hot and cold therapy, try acupuncture, massage', 'Gastroenteritis': 'stop eating solid food for while, try taking small sips of water, rest, ease back into eating', 'Tuberculosis': 'cover mouth, consult doctor, medication, rest'}

//dictionary that holds illness description
const descDic = {'Drug Reaction': 'An adverse drug reaction (ADR) is an injury caused by taking medication. ADRs may occur following a single dose or prolonged administration of a drug or result from the combination of two or more drugs.', 'Malaria': 'An infectious disease caused by protozoan parasites from the Plasmodium family that can be transmitted by the bite of the Anopheles mosquito or by a contaminated needle or transfusion. Falciparum malaria is the most deadly type.', 'Allergy': "An allergy is an immune system response to a foreign substance that's not typically harmful to your body.They can include certain foods, pollen, or pet dander. Your immune system's job is to keep you healthy by fighting harmful pathogens.", 'Hypothyroidism': 'Hypothyroidism, also called underactive thyroid or low thyroid, is a disorder of the endocrine system in which the thyroid gland does not produce enough thyroid hormone.', 'Psoriasis': "Psoriasis is a common skin disorder that forms thick, red, bumpy patches covered with silvery scales. They can pop up anywhere, but most appear on the scalp, elbows, knees, and lower back. Psoriasis can't be passed from person to person. It does sometimes happen in members of the same family.", 'GERD': 'Gastroesophageal reflux disease, or GERD, is a digestive disorder that affects the lower esophageal sphincter (LES), the ring of muscle between the esophagus and stomach. Many people, including pregnant women, suffer from heartburn or acid indigestion caused by GERD.', 'Chronic cholestasis': 'Chronic cholestatic diseases, whether occurring in infancy, childhood or adulthood, are characterized by defective bile acid transport from the liver to the intestine, which is caused by primary damage to the biliary epithelium in most cases', 'hepatitis A': "Hepatitis A is a highly contagious liver infection caused by the hepatitis A virus. The virus is one of several types of hepatitis viruses that cause inflammation and affect your liver's ability to function.", 'Osteoarthristis': 'Osteoarthritis is the most common form of arthritis, affecting millions of people worldwide. It occurs when the protective cartilage that cushions the ends of your bones wears down over time.', '(vertigo) Paroymsal  Positional Vertigo': "Benign paroxysmal positional vertigo (BPPV) is one of the most common causes of vertigo ‚Äî the sudden sensation that you're spinning or that the inside of your head is spinning. Benign paroxysmal positional vertigo causes brief episodes of mild to intense dizziness.", 'Hypoglycemia': " Hypoglycemia is a condition in which your blood sugar (glucose) level is lower than normal. Glucose is your body's main energy source. Hypoglycemia is often related to diabetes treatment. But other drugs and a variety of conditions ‚Äî many rare ‚Äî can cause low blood sugar in people who don't have diabetes.", 'Acne': 'Acne vulgaris is the formation of comedones, papules, pustules, nodules, and/or cysts as a result of obstruction and inflammation of pilosebaceous units (hair follicles and their accompanying sebaceous gland). Acne develops on the face and upper trunk. It most often affects adolescents.', 'Diabetes': 'Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat. Insulin, a hormone made by the pancreas, helps glucose from food get into your cells to be used for energy.', 'Impetigo': "Impetigo (im-puh-TIE-go) is a common and highly contagious skin infection that mainly affects infants and children. Impetigo usually appears as red sores on the face, especially around a child's nose and mouth, and on hands and feet. The sores burst and develop honey-colored crusts.", 'Hypertension': 'Hypertension (HTN or HT), also known as high blood pressure (HBP), is a long-term medical condition in which the blood pressure in the arteries is persistently elevated. High blood pressure typically does not cause symptoms.', 'Peptic ulcer diseae': 'Peptic ulcer disease (PUD) is a break in the inner lining of the stomach, the first part of the small intestine, or sometimes the lower esophagus. An ulcer in the stomach is called a gastric ulcer, while one in the first part of the intestines is a duodenal ulcer.', 'Dimorphic hemorrhoids(piles)': 'Hemorrhoids, also spelled haemorrhoids, are vascular structures in the anal canal. In their ... Other names, Haemorrhoids, piles, hemorrhoidal disease .', 'Common Cold': "The common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold.", 'Chicken pox': 'Chickenpox is a highly contagious disease caused by the varicella-zoster virus (VZV). It can cause an itchy, blister-like rash. The rash first appears on the chest, back, and face, and then spreads over the entire body, causing between 250 and 500 itchy blisters.', 'Cervical spondylosis': 'Cervical spondylosis is a general term for age-related wear and tear affecting the spinal disks in your neck. As the disks dehydrate and shrink, signs of osteoarthritis develop, including bony projections along the edges of bones (bone spurs).', 'Hyperthyroidism': "Hyperthyroidism (overactive thyroid) occurs when your thyroid gland produces too much of the hormone thyroxine. Hyperthyroidism can accelerate your body's metabolism, causing unintentional weight loss and a rapid or irregular heartbeat.", 'Urinary tract infection': 'Urinary tract infection', 'Varicose veins': 'A vein that has enlarged and twisted, often appearing as a bulging, blue blood vessel that is clearly visible through the skin. Varicose veins are most common in older adults, particularly women, and occur especially on the legs.', 'AIDS': "Acquired immunodeficiency syndrome (AIDS) is a chronic, potentially life-threatening condition caused by the human immunodeficiency virus (HIV). By damaging your immune system, HIV interferes with your body's ability to fight infection and disease.", 'Paralysis (brain hemorrhage)': 'Intracerebral hemorrhage (ICH) is when blood suddenly bursts into brain tissue, causing damage to your brain. Symptoms usually appear suddenly during ICH. They include headache, weakness, confusion, and paralysis, particularly on one side of your body.', 'Typhoid': 'An acute illness characterized by fever caused by infection with the bacterium Salmonella typhi. Typhoid fever has an insidious onset, with fever, headache, constipation, malaise, chills, and muscle pain. Diarrhea is uncommon, and vomiting is not usually severe.', 'Hepatitis B': "Hepatitis B is an infection of your liver. It can cause scarring of the organ, liver failure, and cancer. It can be fatal if it isn't treated. It's spread when people come in contact with the blood, open sores, or body fluids of someone who has the hepatitis B virus.", 'Fungal infection': 'In humans, fungal infections occur when an invading fungus takes over an area of the body and is too much for the immune system to handle. Fungi can live in the air, soil, water, and plants. There are also some fungi that live naturally in the human body. Like many microbes, there are helpful fungi and harmful fungi.', 'Hepatitis C': 'Inflammation of the liver due to the hepatitis C virus (HCV), which is usually spread via blood transfusion (rare), hemodialysis, and needle sticks. The damage hepatitis C does to the liver can lead to cirrhosis and its complications as well as cancer.', 'Migraine': "A migraine can cause severe throbbing pain or a pulsing sensation, usually on one side of the head. It's often accompanied by nausea, vomiting, and extreme sensitivity to light and sound. Migraine attacks can last for hours to days, and the pain can be so severe that it interferes with your daily activities.", 'Bronchial Asthma': 'Bronchial asthma is a medical condition which causes the airway path of the lungs to swell and narrow. Due to this swelling, the air path produces excess mucus making it hard to breathe, which results in coughing, short breath, and wheezing. The disease is chronic and interferes with daily working.', 'Alcoholic hepatitis': "Alcoholic hepatitis is a diseased, inflammatory condition of the liver caused by heavy alcohol consumption over an extended period of time. It's also aggravated by binge drinking and ongoing alcohol use. If you develop this condition, you must stop drinking alcohol", 'Jaundice': 'Yellow staining of the skin and sclerae (the whites of the eyes) by abnormally high blood levels of the bile pigment bilirubin. The yellowing extends to other tissues and body fluids. Jaundice was once called the "morbus regius" (the regal disease) in the belief that only the touch of a king could cure it', 'Hepatitis E': 'A rare form of liver inflammation caused by infection with the hepatitis E virus (HEV). It is transmitted via food or drink handled by an infected person or through infected water supplies in areas where fecal matter may get into the water. Hepatitis E does not cause chronic liver disease.', 'Dengue': 'an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. ‚Äî called also breakbone fever, dengue fever.', 'Hepatitis D': 'Hepatitis D, also known as the hepatitis delta virus, is an infection that causes the liver to become inflamed. This swelling can impair liver function and cause long-term liver problems, including liver scarring and cancer. The condition is caused by the hepatitis D virus (HDV).', 'Heart attack': 'The death of heart muscle due to the loss of blood supply. The loss of blood supply is usually caused by a complete blockage of a coronary artery, one of the arteries that supplies blood to the heart muscle.', 'Pneumonia': 'Pneumonia is an infection in one or both lungs. Bacteria, viruses, and fungi cause it. The infection causes inflammation in the air sacs in your lungs, which are called alveoli. The alveoli fill with fluid or pus, making it difficult to breathe.', 'Arthritis': 'Arthritis is the swelling and tenderness of one or more of your joints. The main symptoms of arthritis are joint pain and stiffness, which typically worsen with age. The most common types of arthritis are osteoarthritis and rheumatoid arthritis.', 'Gastroenteritis': 'Gastroenteritis is an inflammation of the digestive tract, particularly the stomach, and large and small intestines. Viral and bacterial gastroenteritis are intestinal infections associated with symptoms of diarrhea , abdominal cramps, nausea , and vomiting .', 'Tuberculosis': 'Tuberculosis (TB) is an infectious disease usually caused by Mycobacterium tuberculosis (MTB) bacteria. Tuberculosis generally affects the lungs, but can also affect other parts of the body. Most infections show no symptoms, in which case it is known as latent tuberculosis.'}

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
    const symptomInput = document.getElementById('symptomInput').value.trim().toLowerCase();
    const symptomExists = symptomsArray.some(symptom => symptom.toLowerCase() === symptomInput);
    const selectedSymptoms = document.getElementById('selectedSymptoms');

    const isSymptomAlreadyAdded = (symptom) => {
        const symptoms = Array.from(selectedSymptoms.children);
        return symptoms.some(item => item.textContent.toLowerCase() === symptom.toLowerCase());
    };

    if (symptomInput && symptomExists && !isSymptomAlreadyAdded(symptomInput)) {
        const listItem = document.createElement('li');
        listItem.textContent = symptomInput;
        selectedSymptoms.appendChild(listItem);
        document.getElementById('symptomInput').value = '';
    } else if (isSymptomAlreadyAdded(symptomInput)) {
        alert('This symptom is already added.');
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
        console.log('description:', descDic[data.prediction]);
        console.log('cures:', cureDic[data.prediction]);
        const diseasePredictionDiv = document.getElementById('diseasePrediction');
        diseasePredictionDiv.textContent = `Disease prediction: ${data.prediction}`;
        const diseaseDescriptionDiv = document.getElementById('diseaseDescription');
        diseaseDescriptionDiv.textContent = `Description: ${descDic[data.prediction]}`;
        const diseaseCuresDiv = document.getElementById('diseaseCures');
        diseaseCuresDiv.textContent = `Cure Suggestions: ${cureDic[data.prediction]}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Event listener for Add Symptom button click
document.getElementById('addSymptomButton').addEventListener('click', addSymptom);

// Event listener for Predict Illness button click
document.getElementById('predictButton').addEventListener('click', predictIllness);

//Event lister for clearing search and refreshing page click
document.addEventListener('DOMContentLoaded', function() {
    const refreshButton = document.getElementById('refreshButton');

    refreshButton.addEventListener('click', function() {
        location.reload(); // Reloads the page when the button is clicked
    });
});
