// Define the file path
var filePath = "C:\Users\krishna.gangisetty\OneDrive - ascendion\Documents\MongoDB Practice\persons.js";

// Load the JSON file as JavaScript code
load(filePath);

// Insert the data into MongoDB
db.persons.insertMany(persons);

print("✅ Successfully inserted " + persons.length + " records into 'persons' collection.");