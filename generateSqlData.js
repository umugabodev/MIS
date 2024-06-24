const fs = require('fs');
// Import necessary libraries if needed
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
const ranks = ['General', 'Major General', 'Colonel', 'Major', 'Captain', 'Lieutenant', "Warrant Officer II", "Sergent","Staff Sergent", "Private"];
const placesOfBirth = ['Gasabo', 'Huye', 'Rubavu', 'Rusizi', 'Nyagatare', 'Musanze', 'Kayonza', 'Kirehe', 'Kicukiro'];
const units = ['1 Inf Div', '2 Inf Div', '77 Inf Bn', 'Engineering', 'Logistics', 'Medical', 'Comms'];
const genders = ['MALE', 'FEMALE'];
const maritalStatuses = ['MARRIED', 'SINGLE', 'DIVORCED'];
const religiousBeliefs = ['Christian', 'Muslim', 'Hindu', 'Buddhist', 'Other'];

// Function to generate a random personnel record
const generateRandomPersonnel = () => {
  const id = uuidv4(); // Generate a UUID for id
  const serviceNumber = randomInt(100, 200000); // Random service number
  const rank = ranks[Math.floor(Math.random() * ranks.length)]; // Random rank
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

// Generate 100 random personnel records
const generateRandomPersonnelData = () => {
  const personnelData = [];
  for (let i = 0; i < 150; i++) {
    personnelData.push(generateRandomPersonnel());
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
    return sqlStatements.join('\n');
  };
  
  // Write generated SQL statements to a file
  const writeSQLToFile = () => {
    const sqlStatements = generateSQLInsertStatements();
    fs.writeFileSync('generated_data.sql', sqlStatements);
    console.log('SQL insert statements have been written to generated_data.sql');
  };
  
  // Execute the function to write SQL statements to file
  writeSQLToFile();
