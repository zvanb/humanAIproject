import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import joblib


#load in data to df
data = pd.read_csv('data/diseaseData.csv')

# Split the data into symptoms and illness
X = data.iloc[:, :-1]  #symptoms
y = data.iloc[:, -1]   #illness

# training and testing sets 
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

#train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

#test model
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy: {accuracy:.2f}")

#save trained model to models/trainedModel.pk1
joblib.dump(model, 'models/trainedModel.pkl')
    





