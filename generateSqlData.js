const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Function to generate a random date within a range
const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// Function to generate random integer within a range
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Sample data for generating random names, ranks, places, and other details
const ranks = [
  "Private", "Corporal",
  "Sergeant", "Staff Sergeant", "Sergeant Major",
  "Warrant Officer II", "Warrant Officer I",
  "Second Lieutenant", "Lieutenant", "Captain",
  "Major", "Lieutenant Colonel", "Colonel", "Brigadier General", "Major General", "Lieutenant General", "General"
];
const placesOfBirth = ['Gasabo', 'Huye', 'Rubavu', 'Rusizi', 'Nyagatare', 'Musanze', 'Kayonza', 'Kirehe', 'Kicukiro', 'Nyamagabe'];
const units = ['1 Inf Div', '2 Inf Div', '4 Inf Bn', '5 Inf Bn', 'Log Bde', 'Air Force', 'Reserve Force', 'ZCSS & AFOS'];
const genders = ['MALE', 'FEMALE'];
const maritalStatuses = ['MARRIED', 'SINGLE', 'DIVORCED'];
const religiousBeliefs = ['Christian', 'Muslim', 'Adventist', 'Atheist', 'Other'];

// Predefined service number ranges
const serviceNumberRanges = {
  "Private": [140000, 160000],
  "Corporal": [100000, 140000],
  "Sergeant": [85000, 100000],
  "Staff Sergeant": [75000, 85000],
  "Sergeant Major": [65000, 75000],
  "Warrant Officer II": [45000, 65000],
  "Warrant Officer I": [25000, 45000],
  "Second Lieutenant": [7500, 9500],
  "Lieutenant": [6000, 7500],
  "Captain": [4500, 6000],
  "Major": [3000, 4500],
  "Lieutenant Colonel": [2500, 3000],
  "Colonel": [2000, 2500],
  "Brigadier General": [1800, 2000],
  "Major General": [1000, 1800],
  "Lieutenant General": [201, 1000],
  "General": [20, 201]
};

// Function to generate a service number within the rank-specific range
const generateServiceNumber = (rank, usedServiceNumbers) => {
  const [min, max] = serviceNumberRanges[rank];
  let serviceNumber;
  do {
    serviceNumber = randomInt(min, max);
  } while (usedServiceNumbers.has(serviceNumber));
  usedServiceNumbers.add(serviceNumber);
  return serviceNumber;
};

// Function to generate a random personnel record
const generateRandomPersonnel = (rank, usedServiceNumbers) => {
  const id = uuidv4(); // Generate a UUID for id
  const serviceNumber = generateServiceNumber(rank, usedServiceNumbers); // Generate service number based on rank
  const firstname = getRandomRwandanFirstName(); // Function to get random Rwandan first name
  const lastname = getRandomRwandanLastName(); // Function to get random Rwandan last name
  const currentunit = units[Math.floor(Math.random() * units.length)]; // Random unit
  const dob = randomDate(new Date(1950, 0, 1), new Date(2004, 11, 31)).toISOString().split('T')[0]; // Random date of birth
  const placeOfBirth = placesOfBirth[Math.floor(Math.random() * placesOfBirth.length)]; // Random place of birth
  const gender = genders[Math.floor(Math.random() * genders.length)]; // Random gender
  const maritalStatus = maritalStatuses[Math.floor(Math.random() * maritalStatuses.length)]; // Random marital status
  const fathername = getRandomRwandanFirstName(); // Function to get random Rwandan first name for father
  const mothername = getRandomRwandanFirstName(); // Function to get random Rwandan first name for mother
  const religious = religiousBeliefs[Math.floor(Math.random() * religiousBeliefs.length)]; // Random religious belief

  return {
    id,
    serviceNumber,
    rank,
    firstname,
    lastname,
    currentunit,
    dob,
    placeOfBirth,
    gender,
    maritalStatus,
    fathername,
    mothername,
    religious
  };
};

// Function to get a random Rwandan first name
const getRandomRwandanFirstName = () => {
  const firstNames = ['Jean', 'Alice', 'Emmanuel', 'Claudine', 'Patrick', 'Diane', 'Thierry', 'Grace', 'John', 'Carine'];
  return firstNames[Math.floor(Math.random() * firstNames.length)];
};

// Function to get a random Rwandan last name
const getRandomRwandanLastName = () => {
  const lastNames = ['Muhire', 'Uwamahoro', 'Kagame', 'Mukamana', 'Nkurunziza', 'Uwase', 'Niyonsaba', 'Habimana', 'Uwimana', 'Bizimana'];
  return lastNames[Math.floor(Math.random() * lastNames.length)];
};

// Generate random personnel records based on ranks
const generateRandomPersonnelData = () => {
  const personnelData = [];
  const usedServiceNumbers = new Set();

  for (let rank of ranks) {
    for (let i = 0; i < 10; i++) { // Generate 10 records per rank
      personnelData.push(generateRandomPersonnel(rank, usedServiceNumbers));
    }
  }

  return personnelData;
};

// Function to generate SQL INSERT statements
const generateSQLInsertStatements = () => {
  const personnelData = generateRandomPersonnelData();
  const sqlStatements = personnelData.map(person => {
    return `INSERT INTO personnel (id, service_number, rank, firstname, lastname, currentunit, dob, place_of_birth, gender, marital_status, fathername, mothername, religious)
            VALUES ('${person.id}', ${person.serviceNumber}, '${person.rank}', '${person.firstname}', '${person.lastname}', '${person.currentunit}', '${person.dob}', '${person.placeOfBirth}', '${person.gender}', '${person.maritalStatus}', '${person.fathername}', '${person.mothername}', '${person.religious}');`;
  });
  writeIdsToFile(personnelData.map(person => person.id)); // Write IDs to file
  return sqlStatements.join('\n');
};

// Write generated SQL statements to a file
const writeSQLToFile = () => {
  const sqlStatements = generateSQLInsertStatements();
  fs.writeFileSync('generated_data.sql', sqlStatements);
  console.log('SQL insert statements have been written to generated_data.sql');
};

// Function to write IDs to a file
const writeIdsToFile = (ids) => {
  fs.writeFileSync('generated_ids.txt', ids.join('\n'));
  console.log('Generated IDs have been written to generated_ids.txt');
};

// Execute the function to write SQL statements to file
writeSQLToFile();