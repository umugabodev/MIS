import React, { useState, useEffect } from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';

import { v4 as uuidv4 } from 'uuid';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react';


const addPersonnel = () => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
      console.error('No access token found in local storage.');
  }
  
  const [selectedSection, setSelectedSection] = useState('Personnel Information');
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('surveyFormData');
    return storedData ? JSON.parse(storedData) : {};

  });

  useEffect(() => {
    let personnelId = localStorage.getItem('personnelId');
    if (!personnelId) {
      personnelId = uuidv4();
      localStorage.setItem('personnelId', personnelId);
    }
    setFormData(prevData => ({ ...prevData, personnelId }));
  }, []);

  useEffect(() => {
    localStorage.setItem('surveyFormData', JSON.stringify(formData));
  }, [formData]);

  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId);
  };

  const handleFormSubmit = async (formDataToSend, endpoint, token, contentType) => {
  try {
    const headers = {
      'Authorization': `Bearer ${token}`,
    };

    if (contentType) {
      headers['Content-Type'] = contentType;
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: headers,
      body: formDataToSend,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Form submitted successfully:', data);
  } catch (error) {
    console.error('Error submitting form:', error.message);
  }
};

const rankMapping = {
  'Pte': 'Private',
  'Cpl': 'Corporal',
  'Sgt': 'Sergeant',
  'SSgt': 'Staff Sergeant',
  'SM': 'Sergeant Major',
  'W0I': 'Warrant Officer I',
  'W0II': 'Warrant Officer II',
  '2Lt': 'Second Lieutenant',
  'Lt': 'Lieutenant',
  'Capt': 'Captain',
  'Maj': 'Major',
  'Lt Col': 'Lieutenant Colonel',
  'Col': 'Colonel',
  'Brig Gen': 'Brigadier General',
  'Maj Gen': 'Major General',
  'Lt Gen': 'Lieutenant General',
  'Gen': 'General'
};
  

  const renderFormFields = () => {
    switch (selectedSection) {
      case 'Personnel Information':
        return (
          <>
            <Survey.Survey
              json={{
                pages: [
                  {
                    name: 'page1',
                    elements: [
                      { type: 'text', name: 'servicenumber', title: 'Service No', inputType: 'number', isRequired: true },
                      { type: 'dropdown', name: 'rank', title: 'Rank', isRequired: true, choices: Object.keys(rankMapping) },
                      { type: 'text', name: 'firstname', title: 'First Name', isRequired: true },
                      { type: 'text', name: 'lastname', title: 'Last Name', isRequired: true },
                      { type: 'text', name: 'currentunit', title: 'Unit', isRequired: true },
                      { type: 'text', name: 'dob', title: 'Date of Birth', inputType: 'date', isRequired: true },
                      { type: 'radiogroup', name: 'gender', title: 'Gender', isRequired: true, choices: ['Male', 'Female'] },
                      { type: 'text', name: 'fathername', isRequired: true, title: 'Father Name' },
                      { type: 'text', name: 'mothername', isRequired: true, title: 'Mother Name' },
                      { type: 'text', name: 'religious', isRequired: true, title: 'Religious' },
                      { type: 'text', name: 'placeofbirth', title: 'Place Of Birth', isRequired: true },
                      { type: 'dropdown', name: 'maritalStatus', title: 'Marital Status', isRequired: true, choices: ['Single', 'Married', 'Widower', 'Divorced'] },
                    ],
                  },
                ],
              }}
              showNavigationButtons={true}
              completeText="Next"
              onComplete={(survey) => {
                console.log('Form data:', survey.data);
                const formSectionData = { ...survey.data, id: formData.personnelId };

                const formDataToSend = new FormData();
                for (const key in formSectionData) {
                  if (key ===  formSectionData[key] && formSectionData[key][0]) {
                    formDataToSend.append(key, formSectionData[key][0]);
                  } else {
                    formDataToSend.append(key, formSectionData[key]);
                  }
                }

                setFormData({ ...formData, ...formSectionData });
                handleFormSubmit(formDataToSend, 'http://localhost:3007/api/v1/personnel', token);
                setSelectedSection("Academic Qualification");
              }}
            />
          </>
        );        
        case 'Academic Qualification':
        return (
          <>
            <Survey.Survey
              json={{
                pages: [
                  {
                    name: 'page1',
                    elements: [
                      
                      { type: 'text', name: 'school', title: 'School/University', isRequired: true },
                      { type: 'text', name: 'degree', title: 'Degree', isRequired: true },
                      { type: 'text', name: 'option', title: 'Option', isRequired: true },
                      { type: 'text', name: 'fromDate', title: 'Started', inputType: 'date', isRequired: true },
                      { type: 'text', name: 'toDate', title: 'End', inputType: 'date' },
                      
                      {
                        "type": "dropdown",
                        "name": "place",
                        "title": "Country",
                        "isRequired": true,
                        "choices": [
                          "United States", "Canada", "United Kingdom", "Germany", "France", "Japan", "China", "Australia", "Brazil", "India", "Italy", "Mexico",
                           "Spain", "South Korea", "Russia", "Argentina", "South Africa", "Turkey", "Nigeria", "Indonesia", "Saudi Arabia", "Switzerland", "Sweden",
                            "Norway", "Denmark", "Finland", "Netherlands", "Belgium", "Austria", "Ireland", "Portugal", "Greece", "Poland", "Czech Republic", "Hungary",
                             "Romania", "Ukraine", "Thailand", "Vietnam", "Philippines", "Malaysia", "Singapore", "New Zealand", "Chile", "Colombia", "Peru", "Egypt",
                              "Morocco", "Iran", "Iraq", "Israel", "United Arab Emirates", "Qatar", "Kuwait", "Oman", "Bahrain", "Jordan", "Lebanon", "Syria", "Yemen",
                               "Libya", "Tunisia", "Algeria", "Sudan", "Ethiopia", "Kenya", "Tanzania", "Uganda", "Rwanda", "Niger", "Senegal", "Somalia", "Angola", "Zimbabwe",
                                "Mozambique", "Zambia", "Botswana", "Namibia", "Lesotho", "Swaziland", "Madagascar", "Mauritius", "Seychelles", "Malawi", "Cote d'Ivoire",
                                 "Cameroon", "Burkina Faso", "Mali", "Benin", "Togo", "Ghana", "Liberia", "Sierra Leone", "Gambia", "Guinea", "Guinea-Bissau", "Equatorial Guinea",
                                  "Djibouti", "Eritrea", "Burundi", "Central African Republic", "Congo", "Democratic Republic of the Congo", "Chad", "Comoros", "Mauritania", "Cape Verde",
                                   "Sao Tome and Principe", "East Timor", "Papua New Guinea", "Solomon Islands", "Vanuatu", "Fiji", "Kiribati", "Tuvalu", "Samoa", "Tonga", "Marshall Islands",
                                    "Palau", "Micronesia", "Nauru", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Antigua and Barbuda", "Barbados", "Grenada", "Belize",
                                     "Guyana", "Suriname", "Trinidad and Tobago", "Bahamas", "Jamaica", "Haiti", "Dominican Republic", "Cuba", "Sri Lanka", "Bangladesh", "Maldives", "Bhutan", "Nepal",
                                      "Afghanistan", "Pakistan", "Laos", "Cambodia", "Myanmar", "Mongolia", "North Korea"
                          
                          
                        ],
                        defaultValue: formData['country'] || ''
                      },
                        { type: 'dropdown', name: 'status', title: 'Status', isRequired: true, choices: ['At School', 'Completed', 'Pending'] },
                    ],
                  },
                ],
              }}
              showNavigationButtons={true}
              completeText="Next"
              onComplete={(survey) => {
                console.log("Id: ", localStorage.getItem('personnelId'));
                console.log('Form data:', survey.data);
                const formSectionData = { personnelId: localStorage.getItem('personnelId') , ...survey.data};

                const formDataToSend = new FormData();
                for (const key in formSectionData) {
                  formDataToSend.append(key, formSectionData[key]);
                }

                setFormData({ ...formData, ...formSectionData });
                handleFormSubmit(JSON.stringify(formSectionData), 'http://localhost:3007/api/v1/academicqualifications', token, 'application/json');
                setSelectedSection("Course and Training");
              }}
            />
          </>
        );
      
        case 'Course and Training':
          return (
            <>
              <Survey.Survey
                json={{
                  pages: [
                    {
                      name: 'page1',
                      elements: [
                        
                        { type: 'text', name: 'courseName', title: 'Course Name', isRequired: true },
                        { type: 'text', name: 'place', title: 'Place', isRequired: true },
                        { type: 'text', name: 'fromDate', title: 'Started', inputType: 'date', isRequired: true },
                        { type: 'text', name: 'toDate', title: 'End', inputType: 'date' },
                        { type: 'dropdown', name: 'status', title: 'Status', isRequired: true, choices: ['On Course', 'Completed'] },
                      ],
                    },
                  ],
                }}
                showNavigationButtons={true}
              completeText="Next"
              onComplete={(survey) => {
                console.log("Id: ", localStorage.getItem('personnelId'));
                console.log('Form data:', survey.data);
                const formSectionData = { personnelId: localStorage.getItem('personnelId') , ...survey.data};

                const formDataToSend = new FormData();
                for (const key in formSectionData) {
                  formDataToSend.append(key, formSectionData[key]);
                }

                setFormData({ ...formData, ...formSectionData });
                handleFormSubmit(JSON.stringify(formSectionData), 'http://localhost:3007/api/v1/courses', token, 'application/json');
                setSelectedSection("Deployment Data");
                }}
              />
            </>
          );
          case 'Deployment Data':
        return (
          <>
            <Survey.Survey
              json={{
                pages: [
                  {
                    name: 'page1',
                    elements: [
                      
                      { type: 'text', name: 'div', title: 'Division', isRequired: true },
                      { type: 'text', name: 'bde', title: 'Brigade', isRequired: true },
                      { type: 'text', name: 'btn', title: 'Battalion', isRequired: false },
                      { type: 'text', name: 'regiment', title: 'Battalion', isRequired: false },
                      { type: 'text', name: 'appointment', title: 'Appointment', isRequired: true },
  ],
                  },
                ],
              }}
              showNavigationButtons={true}
              completeText="Next"
              onComplete={(survey) => {
                console.log("Id: ", localStorage.getItem('personnelId'));
                console.log('Form data:', survey.data);
                const formSectionData = { personnelId: localStorage.getItem('personnelId') , ...survey.data};

                const formDataToSend = new FormData();
                for (const key in formSectionData) {
                  formDataToSend.append(key, formSectionData[key]);
                }

                setFormData({ ...formData, ...formSectionData });
                handleFormSubmit(JSON.stringify(formSectionData), 'http://localhost:3007/api/v1/deployment', token, 'application/json');
                setSelectedSection("Emergency Contact");
              }}
            />
          </>
        );
        case 'Emergency Contact':
        return (
          <>
            <Survey.Survey
              json={{
                pages: [
                 
                  {
                    name: 'page1',
                    elements: [
                      
                      { type: 'text', name: 'firstname', title: 'First Name', isRequired: true },
                      { type: 'text', name: 'lastname', title: 'Last Name', isRequired: true },
                      { type: 'text', name: 'contact', title: 'Contact', isRequired: true },
                      { type: 'text', name: 'relationship', title: 'Relationship', isRequired: true },
                      { type: 'text', name: 'address', title: 'Location', isRequired: true },
  ],
                  },
                ],
              }}
              showNavigationButtons={true}
              completeText="Next"
              onComplete={(survey) => {
                console.log("Id: ", localStorage.getItem('personnelId'));
                console.log('Form data:', survey.data);
                const formSectionData = { personnelId: localStorage.getItem('personnelId') , ...survey.data};

                const formDataToSend = new FormData();
                for (const key in formSectionData) {
                  formDataToSend.append(key, formSectionData[key]);
                }

                setFormData({ ...formData, ...formSectionData });
                handleFormSubmit(JSON.stringify(formSectionData), 'http://localhost:3007/api/v1/emergency', token, 'application/json');
                setSelectedSection("Medical Data");
              }}
            />
          </>
        );
        case 'Medical Data':
        return (
          <>
            <Survey.Survey
              json={{
                pages: [
                  {
                    name: 'page1',
                    elements: [
                     
                      { type: 'dropdown', name: 'bloodGroup', title: 'Blood Group', isRequired: true, choices: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'] },
                      { type: 'text', name: 'mmiNumber', title: 'MMI No', inputType: 'number', isRequired: true },
                      { type: 'text', name: 'height', title: 'Height', isRequired: true },
                      { type: 'text', name: 'weight', title: 'Weight', isRequired: true },
                    ],
                  },
                ],
              }}
              showNavigationButtons={true}
              completeText="Next"
              onComplete={(survey) => {
                console.log("Id: ", localStorage.getItem('personnelId'));
                console.log('Form data:', survey.data);
                const formSectionData = { personnelId: localStorage.getItem('personnelId') , ...survey.data};

                const formDataToSend = new FormData();
                for (const key in formSectionData) {
                  formDataToSend.append(key, formSectionData[key]);
                }

                setFormData({ ...formData, ...formSectionData });
                handleFormSubmit(JSON.stringify(formSectionData), 'http://localhost:3007/api/v1/medicaldata', token, 'application/json');
                setSelectedSection("Military Information");
              }}
            />
          </>
        );
        case 'Military Information':
        return (
          <>
            <Survey.Survey
              json={{
                pages: [
                  {
                    name: 'page1',
                    elements: [
                     
                      { type: 'text', name: 'doe', title: 'Date Of Entry', inputType: 'date', isRequired: true },
                      { type: 'dropdown', name: 'poe', title: 'Place Of Entry', isRequired: true, choices: ['BMTC Nasho', 'RMA Gako', 'Other'] },
                      { type: 'text', name: 'css_acc_no', title: 'CSS ACC No', inputType: 'number', isRequired: true },
                    ],
                    
                  },
                  
                ],
                
              }}
              showNavigationButtons={true}
              completeText="Next"
              onComplete={(survey) => {
                console.log("Id: ", localStorage.getItem('personnelId'));
                console.log('Form data:', survey.data);
                const formSectionData = { personnelId: localStorage.getItem('personnelId') , ...survey.data};

                const formDataToSend = new FormData();
                for (const key in formSectionData) {
                  formDataToSend.append(key, formSectionData[key]);
                }

                setFormData({ ...formData, ...formSectionData });
                handleFormSubmit(JSON.stringify(formSectionData), 'http://localhost:3007/api/v1/militaryinfo', token, 'application/json');
                setSelectedSection("Mission and Operation");
              }}
            />
          </>
        );
        case 'Mission and Operation':
        return (
          <>
            <Survey.Survey
              json={{
                pages: [
                  {
                    name: 'page1',
                    elements: [

                   { type: 'text', name: 'name', title: 'Name', isRequired: true },
                      { type: 'text', name: 'type', title: 'Type', isRequired: true },
                      { type: 'text', name: 'location', title: 'Location', isRequired: true },
                      { type: 'text', name: 'unity', title: 'Unity', isRequired: true },
                      { type: 'text', name: 'fromDate', title: 'From', inputType: 'date', isRequired: true },
                      { type: 'text', name: 'toDate', title: 'To', inputType: 'date' },
                      { type: 'dropdown', name: 'status', title: 'Status', isRequired: true, choices: ['On Mission', 'Completed'] },

                    ],
                  },
                ],
              }}
              showNavigationButtons={true}
              completeText="Next"
              onComplete={(survey) => {
                console.log("Id: ", localStorage.getItem('personnelId'));
                console.log('Form data:', survey.data);
                const formSectionData = { personnelId: localStorage.getItem('personnelId') , ...survey.data};

                const formDataToSend = new FormData();
                for (const key in formSectionData) {
                  formDataToSend.append(key, formSectionData[key]);
                }

                setFormData({ ...formData, ...formSectionData });
                handleFormSubmit(JSON.stringify(formSectionData), 'http://localhost:3007/api/v1/missions', token, 'application/json');
                setSelectedSection("Promotion Record");
              }}
            />
          </>
        );
        
          case 'Promotion Record':
            return (
              <Survey.Survey
                json={{
                  pages: [
                    {
                      name: 'page1',
                      elements: [
                        { type: 'text', name: 'formerRank', title: 'Former Rank', isRequired: true, defaultValue: formData['formerrank'] || '' },
                        { type: 'text', name: 'fromDate', title: 'From', inputType: 'date', isRequired: true, defaultValue: formData['from'] || '' },
                        { type: 'text', name: 'toDate', title: 'To', inputType: 'date', isRequired: false, defaultValue: formData['to'] || '' },
                        { type: 'text', name: 'newRank', title: 'Newley Rank', defaultValue: formData['newleyrank'] || '', isRequired: true },
                        { type: 'text', name: 'dateOfPromotion', title: 'Date of Promotion', inputType: 'date', isRequired: false, defaultValue: formData['dop'] || '' },
                      ],
                    },
                  ],
                }}
                showNavigationButtons={true}
                completeText="Next"
                onComplete={(survey) => {
                  console.log("Id: ", localStorage.getItem('personnelId'));
                  console.log('Form data:', survey.data);
                  const formSectionData = { personnelId: localStorage.getItem('personnelId') , ...survey.data};
  
                  const formDataToSend = new FormData();
                  for (const key in formSectionData) {
                    formDataToSend.append(key, formSectionData[key]);
                  }
  
                  setFormData({ ...formData, ...formSectionData });
                  handleFormSubmit(JSON.stringify(formSectionData), 'http://localhost:3007/api/v1/promotion', token, 'application/json');
                  setSelectedSection("Residence Address");
                }}
              />
            );
        
          case 'Residence Address':
            return (
              <Survey.Survey
                json={{
                  pages: [
                    {
                      name: 'page1',
                      elements: [
                        { type: 'text', name: 'nationalid', title: 'NationId', inputType: 'number', isRequired: true, defaultValue: formData['nationId'] || '' },
                        { type: 'text', name: 'contact', title: 'Contact', inputType: 'number', isRequired: true, defaultValue: formData['contact'] || '' },
                        { type: 'text', name: 'province', title: 'Province', isRequired: true, defaultValue: formData['province'] || '' },
                        { type: 'text', name: 'district', title: 'District', defaultValue: formData['district'] || '', isRequired: true },
                        { type: 'text', name: 'sector', title: 'Sector', defaultValue: formData['sector'] || '', isRequired: true },
                        { type: 'text', name: 'cell', title: 'Cell', defaultValue: formData['cell'] || '', isRequired: true },
                        { type: 'text', name: 'village', title: 'Village', defaultValue: formData['village'] || '', isRequired: false },
                      ],
                    },
                  ],
                }}
                showNavigationButtons={true}
                completeText="Next"
                onComplete={(survey) => {
                  console.log("Id: ", localStorage.getItem('personnelId'));
                  console.log('Form data:', survey.data);
                  const formSectionData = { personnelId: localStorage.getItem('personnelId') , ...survey.data};
  
                  const formDataToSend = new FormData();
                  for (const key in formSectionData) {
                    formDataToSend.append(key, formSectionData[key]);
                  }
  
                  setFormData({ ...formData, ...formSectionData });
                  handleFormSubmit(JSON.stringify(formSectionData), 'http://localhost:3007/api/v1/residence', token, 'application/json');
                  setSelectedSection("Spouse Address");
                }}
              />
            );
        
          case 'Spouse Address':
            return (
              <Survey.Survey
                json={{
                  pages: [
                    {
                      name: 'page1',
                      elements: [
                        { type: 'text', name: 'firstname', title: 'Spouse First Name', inputType: 'text', isRequired: true, defaultValue: formData['firstname'] || '' },
                        { type: 'text', name: 'lastname', title: 'Spouse Last Name', inputType: 'text', isRequired: true, defaultValue: formData['lastname'] || '' },
                        { type: 'text', name: 'nationalid', title: 'Nation Id', inputType: 'number', isRequired: true, defaultValue: formData['nationId'] || '' },
                        { type: 'text', name: 'contact', title: 'Contact', inputType: 'number', isRequired: true, defaultValue: formData['contact'] || '' },
                        { type: 'text', name: 'province', title: 'Province', isRequired: true, defaultValue: formData['province'] || '' },
                        { type: 'text', name: 'district', title: 'District', defaultValue: formData['district'] || '', isRequired: true },
                        { type: 'text', name: 'sector', title: 'Sector', defaultValue: formData['sector'] || '', isRequired: true },
                        { type: 'text', name: 'cell', title: 'Cell', defaultValue: formData['cell'] || '', isRequired: true },
                        { type: 'text', name: 'village', title: 'Village', defaultValue: formData['village'] || '', isRequired: false },
                      ],
                    },
                  ],
                }}
                showNavigationButtons={true}
                completeText="Next"
                onComplete={(survey) => {
                  console.log("Id: ", localStorage.getItem('personnelId'));
                  console.log('Form data:', survey.data);
                  const formSectionData = { personnelId: localStorage.getItem('personnelId') , ...survey.data};
  
                  const formDataToSend = new FormData();
                  for (const key in formSectionData) {
                    formDataToSend.append(key, formSectionData[key]);
                  }
  
                  setFormData({ ...formData, ...formSectionData });
                  handleFormSubmit(JSON.stringify(formSectionData), 'http://localhost:3007/api/v1/spouse', token, 'application/json');
                  setSelectedSection("Next of Kin Address");
                }}
              />
            );
        
          case 'Next of Kin Address':
            return (
              <Survey.Survey
                json={{
                  pages: [
                    {
                      name: 'page1',
                      elements: [
                        { type: 'text', name: 'firstname', title: 'Firstname', inputType: 'text', isRequired: true, defaultValue: formData['firstname'] || '' },
                        { type: 'text', name: 'lastname', title: 'Lastname', inputType: 'text', isRequired: true, defaultValue: formData['lastname'] || '' },
                        { type: 'text', name: 'nationalid', title: 'National Id', inputType: 'number', isRequired: true, defaultValue: formData['nationId'] || '' },
                        { type: 'text', name: 'contact', title: 'Contact', inputType: 'number', isRequired: true, defaultValue: formData['contact'] || '' },
                        { type: 'text', name: 'relationship', title: 'Relationship', isRequired: true, defaultValue: formData['relationship'] || '' },
                        { type: 'text', name: 'province', title: 'Province', isRequired: true, defaultValue: formData['province'] || '' },
                        { type: 'text', name: 'district', title: 'District', defaultValue: formData['district'] || '', isRequired: true },
                        { type: 'text', name: 'sector', title: 'Sector', defaultValue: formData['sector'] || '', isRequired: true },
                        { type: 'text', name: 'cell', title: 'Cell', defaultValue: formData['cell'] || '', isRequired: true },
                        { type: 'text', name: 'village', title: 'Village', defaultValue: formData['village'] || '', isRequired: false },
                      ],
                    },
                  ],
                }}
                showNavigationButtons={true}
                completeText="Next"
                onComplete={(survey) => {
                  console.log("Id: ", localStorage.getItem('personnelId'));
                  console.log('Form data:', survey.data);
                  const formSectionData = { personnelId: localStorage.getItem('personnelId') , ...survey.data};
  
                  const formDataToSend = new FormData();
                  for (const key in formSectionData) {
                    formDataToSend.append(key, formSectionData[key]);
                  }
  
                  setFormData({ ...formData, ...formSectionData });
                  handleFormSubmit(JSON.stringify(formSectionData), 'http://localhost:3007/api/v1/nextofkin', token, 'application/json');
                  setSelectedSection("Soldier Kit");
                }}
              />
            );
        
          case 'Soldier Kit':
            return (
              <Survey.Survey
                json={{
                  pages: [
                    {
                      name: 'page1',
                      elements: [
                        { type: 'text', name: 'bdu', title: 'BDU', defaultValue: 'Battle Dress Uniform' || formData['bdu'], isRequired: true },
                        { type: 'text', name: 'officedress', title: 'Officer Dress', defaultValue: 'Office Dress' || formData['officedress'], isRequired: true },
                        { type: 'text', name: 'jungleboots', title: 'Jungle Boots', defaultValue: formData['jungleboots'] || 'Jungle Boots', isRequired: true },
                        { type: 'text', name: 'plasticboots', title: 'Plastic Boots', defaultValue: formData['plasticboots'] || 'Plastic Boots/Bottes', isRequired: true },
                        { type: 'text', name: 'officeshoes', title: 'Officers Shoes', defaultValue: formData['officeshoes'] || 'Office Shoes', isRequired: true },
                        { type: 'text', name: 'bdusize', title: 'BDU Size', defaultValue: formData['bdusize'] || '', isRequired: true },
                        { type: 'text', name: 'officedresssize', inputType: 'number',title: 'Officer Dress Size', defaultValue: formData['officedresssize'] || '', isRequired: true },
                        { type: 'text', name: 'junglebootssize',inputType: 'number', title: 'Jungle Boots Size', defaultValue: formData['junglebootssize'] || '', isRequired: true },
                        { type: 'text', name: 'plasticbootssize',inputType: 'number', title: 'Plastic Boots Size', defaultValue: formData['plasticbootssize'] || '', isRequired: true },
                        { type: 'text', name: 'officeshoessize', inputType: 'number',title: 'Officers Shoes Size', defaultValue: formData['officeshoessize'] || '', isRequired: true }
                      ],
                    },
                  ],
                }}
                showNavigationButtons={true}
                completeText="Next"
                onComplete={(survey) => {
                  console.log("Id: ", localStorage.getItem('personnelId'));
                  console.log('Form data:', survey.data);
                  const formSectionData = { personnelId: localStorage.getItem('personnelId') , ...survey.data};
  
                  const formDataToSend = new FormData();
                  for (const key in formSectionData) {
                    formDataToSend.append(key, formSectionData[key]);
                  }
  
                  setFormData({ ...formData, ...formSectionData });
                  handleFormSubmit(JSON.stringify(formSectionData), 'http://localhost:3007/api/v1/kits', token, 'application/json');
                  setSelectedSection("Complete Personnel Registration");
                }}
              />
            );
        
      case 'Complete Personnel Registration':
        // handle form completion, clear local storage, etc.
        localStorage.removeItem('personnelId');
        localStorage.removeItem('surveyFormData');
        alert('Form  completed successfully!');
        return <div>Form completed successfully!</div>;
      default:
        return null;
    }
  };

  return (
    
    <>
    
      <CRow>
        <CCol xs="3">
          <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center" style={{ backgroundColor: '#18453b', color: '#FFFFFF' }}>
      <h5 className="mb-0">Fill Info</h5>
    </CCardHeader>
            <CCardBody>            
      
              <ul style={{ listStyleType: 'none', padding: 0, marginLeft: "" }}>
                <li
                  style={{ marginBottom: '10px', cursor: 'pointer' }}
                  onClick={() => handleSectionClick('Personnel Information')}
                >
                  <a>Personnel Information</a>
                </li>
                <li
                  style={{ marginBottom: '10px', cursor: 'pointer' }}
                  onClick={() => handleSectionClick('Academic Qualification')}
                >
                  <a>Academic Qualification</a>
                </li>
                <li
                  style={{ marginBottom: '10px', cursor: 'pointer' }}
                  onClick={() => handleSectionClick('Course and Training')}
                >
                  <a>Course and Training</a>
                </li>
                <li
                  style={{ marginBottom: '10px', cursor: 'pointer' }}
                  onClick={() => handleSectionClick('Deployment Data')}
                >
                  <a>Deployment Data</a>
                </li>
                <li
                  style={{ marginBottom: '10px', cursor: 'pointer' }}
                  onClick={() => handleSectionClick('Emergency Contact')}
                >
                  <a>Emergency Contact</a>
                </li>
                <li
                  style={{ marginBottom: '10px', cursor: 'pointer' }}
                  onClick={() => handleSectionClick('Medical Data')}
                >
                  <a>Medical Data</a>
                </li>
                <li
                  style={{ marginBottom: '10px', cursor: 'pointer' }}
                  onClick={() => handleSectionClick('Military Information')}
                >
                  <a>Military Information</a>
                </li>
                <li
                  style={{ marginBottom: '10px', cursor: 'pointer' }}
                  onClick={() => handleSectionClick('Mission and Operation')}
                >
                  <a>Mission and Operation</a>
                </li>
                <li
                  style={{ marginBottom: '10px', cursor: 'pointer' }}
                  onClick={() => handleSectionClick('Promotion Record')}
                >
                  <a>Promotion Record</a>
                </li>
                <li
                  style={{ marginBottom: '10px', cursor: 'pointer' }}
                  onClick={() => handleSectionClick('Residence Address')}
                >
                  <a>Residence Address</a>
                </li>
                <li
                  style={{ marginBottom: '10px', cursor: 'pointer' }}
                  onClick={() => handleSectionClick('Spouse Address')}
                >
                  <a>Spouse Address</a>
                </li>
                <li
                  style={{ marginBottom: '10px', cursor: 'pointer' }}
                  onClick={() => handleSectionClick('Next of Kin Address')}
                >
                  <a>Next of Kin Address</a>
                </li>
                 <li
                  style={{ marginBottom: '10px', cursor: 'pointer' }}
                  onClick={() => handleSectionClick('Soldier Kit')}
                >
                  <a>Soldier Kit</a>
                </li>
                {/* Add more sections here */}
              </ul>
              
            </CCardBody>
          </CCard>
        </CCol>
      
      
        <CCol xs="8" className=" ">
          <CCard className="mb-4 justify-center justify-content-start">
          <CCardHeader className="d-flex justify-content-between align-items-center" style={{ backgroundColor: '#18453b', color: '#FFFFFF' }}>
      <h5 className="mb-0">{selectedSection}</h5>
    </CCardHeader>
            <CCardBody>{renderFormFields()}</CCardBody>?
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default addPersonnel;
