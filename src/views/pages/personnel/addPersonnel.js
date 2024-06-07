import React, { useState, useEffect } from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react';
import { Button } from '@coreui/coreui';

const addPersonnel = () => {
  const [selectedSection, setSelectedSection] = useState('Personnel Information');
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('surveyFormData');
    return storedData ? JSON.parse(storedData) : {};
  });

  useEffect(() => {
    localStorage.setItem('surveyFormData', JSON.stringify(formData));
  }, [formData]);

  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId);
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
                      {
                        type: 'text',
                        name: 'serviceNumber',
                        title: 'Service No',
                        inputType: 'number',
                        isRequired: true,                   
                        defaultValue: formData['serviceNumber'] || ''
                      },
                      
                      
                      {
                        type: 'dropdown',
                        name: 'Rank',
                        title: 'Rank',
                        isRequired: true,
                        choices: [
                          'Pte',
                          'Cpl',
                          'Sgt',
                          'SSgt',
                          'SM',
                          'W0I',
                          
                        ],
                        defaultValue: formData['martialStutus'] || ''
                      },
                      {
                        type: 'text',
                        name: 'firstname',
                        title: 'First Name ',
                        isRequired: true,
                        defaultValue: formData['firstname'] || ''
                      },
                      
                      {
                        type: 'text',
                        name: 'lastname',
                        title: 'Last Name ',
                        isRequired: true,
                        defaultValue: formData['lastname'] || ''
                      },
                      {
                        type: 'text',
                        name: 'currentunit',
                        title: 'Unit ',
                        isRequired: true,
                        defaultValue: formData['currentunit'] || ''
                      },
                      {
                        type: 'text',
                        name: 'dob',
                        title: 'Date of Birth *',
                        inputType: 'date',
                        isRequired: true,
                        defaultValue: formData['dob'] || ''
                      },
                      {
                        type: 'radiogroup',
                        name: 'gender',
                        title: 'Gender',
                        isRequired: true,
                        choices: ['Male', 'Female'],
                        defaultValue: formData['gender'] || ''
                      },
                      {
                        type: 'text',
                        name: 'fathername',
                        title: 'Father Name ',
                        isRequired: false,
                        defaultValue: formData['fathername'] || ''
                      },
                      {
                        type: 'text',
                        name: 'mothername',
                        title: 'Mother Name ',
                        isRequired: false,
                        defaultValue: formData['mothername'] || ''
                      },
                      {
                        type: 'text',
                        name: 'religious',
                        title: 'Religious ',
                        isRequired: false,
                        defaultValue: formData['religious'] || ''
                      },
                      {
                        type: 'text',
                        name: 'placeOfBirth',
                        title: 'Place Of Birth',
                        isRequired: true,
                        defaultValue: formData['placeOfBirth'] || ''
                      },
                      {
                        "type": "dropdown",
                        "name": "martialStutus",
                        "title": "Martial Stutus",
                        "isRequired": true,
                        "choices": [
                          "Single",
                          "Married",
                          "Widower",
                          "Divorced",
                        ],
                        defaultValue: formData['martialStutus'] || ''
                      },
                      
                      
                      // Add other form fields as needed, with defaultValue set from formData
                    ],
                  },
                ],
              }}
              showNavigationButtons={true}
              completeText="Next"
              onComplete={(survey) => {

                // Handle form submission here
                console.log('Form data:', survey.data);
                setFormData({ ...formData, ...survey.data });
                setSelectedSection("Academic Qualification")
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
                      {
                        type: 'text',
                        name: 'serviceNumber',
                        title: 'Service No',
                        inputType: 'number',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'school',
                        title: 'School/University',
                        isRequired: true,
                      },
                      {
                        "type": "dropdown",
                        "name": "Rank",
                        "title": "Rank",
                        "isRequired": true,
                        "choices": [
                          "Pte",
                          "Cpl",
                          "Sgt",
                          "SSgt",
                          "SM",
                          "W0I",
                        ]
                      },
                      {
                        type: 'text',
                        name: 'Degree',
                        title: 'Degree ',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'Started',
                        title: 'Started',
                        inputType: 'date',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'End',
                        title: 'End',
                        inputType: 'date',
                        isRequired: false,
                      },
                      
                      {
                        "type": "dropdown",
                        "name": "country",
                        "title": "Country",
                        "isRequired": true,
                        "choices": [
                          "United States",
                          "Canada",
                          "United Kingdom",
                          "Germany",
                          "France",
                          "Japan",
                          "China",
                          "Australia",
                          "Brazil",
                          "India",
                          "Italy",
                          "Mexico",
                          "Spain",
                          "South Korea",
                          "Russia",
                          "Argentina",
                          "South Africa",
                          "Turkey",
                          "Nigeria",
                          "Indonesia",
                          "Saudi Arabia",
                          "Switzerland",
                          "Sweden",
                          "Norway",
                          "Denmark",
                          "Finland",
                          "Netherlands",
                          "Belgium",
                          "Austria",
                          "Ireland",
                          "Portugal",
                          "Greece",
                          "Poland",
                          "Czech Republic",
                          "Hungary",
                          "Romania",
                          "Ukraine",
                          "Thailand",
                          "Vietnam",
                          "Philippines",
                          "Malaysia",
                          "Singapore",
                          "New Zealand",
                          "Chile",
                          "Colombia",
                          "Peru",
                          "Egypt",
                          "Morocco",
                          "Iran",
                          "Iraq",
                          "Israel",
                          "United Arab Emirates",
                          "Qatar",
                          "Kuwait",
                          "Oman",
                          "Bahrain",
                          "Jordan",
                          "Lebanon",
                          "Syria",
                          "Yemen",
                          "Libya",
                          "Tunisia",
                          "Algeria",
                          "Sudan",
                          "Ethiopia",
                          "Kenya",
                          "Tanzania",
                          "Uganda",
                          "Rwanda",
                          "Niger",
                          "Senegal",
                          "Somalia",
                          "Angola",
                          "Zimbabwe",
                          "Mozambique",
                          "Zambia",
                          "Botswana",
                          "Namibia",
                          "Lesotho",
                          "Swaziland",
                          "Madagascar",
                          "Mauritius",
                          "Seychelles",
                          "Malawi",
                          "Gabon",
                          "Cote d'Ivoire",
                          "Cameroon",
                          "Burkina Faso",
                          "Mali",
                          "Niger",
                          "Benin",
                          "Togo",
                          "Ghana",
                          "Liberia",
                          "Sierra Leone",
                          "Gambia",
                          "Guinea",
                          "Guinea-Bissau",
                          "Equatorial Guinea",
                          "Djibouti",
                          "Eritrea",
                          "Burundi",
                          "Central African Republic",
                          "Congo",
                          "Democratic Republic of the Congo",
                          "Chad",
                          "Comoros",
                          "Mauritania",
                          "Cape Verde",
                          "Sao Tome and Principe",
                          "East Timor",
                          "Papua New Guinea",
                          "Solomon Islands",
                          "Vanuatu",
                          "Fiji",
                          "Kiribati",
                          "Tuvalu",
                          "Samoa",
                          "Tonga",
                          "Marshall Islands",
                          "Palau",
                          "Micronesia",
                          "Nauru",
                          "Saint Kitts and Nevis",
                          "Saint Lucia",
                          "Saint Vincent and the Grenadines",
                          "Antigua and Barbuda",
                          "Barbados",
                          "Grenada",
                          "Belize",
                          "Guyana",
                          "Suriname",
                          "Trinidad and Tobago",
                          "Bahamas",
                          "Jamaica",
                          "Haiti",
                          "Dominican Republic",
                          "Cuba",
                          "Sri Lanka",
                          "Bangladesh",
                          "Maldives",
                          "Bhutan",
                          "Nepal",
                          "Afghanistan",
                          "Pakistan",
                          "Sri Lanka",
                          "Laos",
                          "Cambodia",
                          "Myanmar",
                          "Mongolia",
                          "North Korea",
                          "Bhutan",
                          "Belize",
                          "Costa Rica",
                          "El Salvador",
                          "Guatemala",
                          "Honduras",
                          "Nicaragua",
                          "Panama",
                          "Paraguay",
                          "Uruguay",
                          "Ecuador",
                          "Venezuela",
                          "Nicaragua"
                          
                          
                        ]
                      },
                      
                    
                      {
                        "type": "dropdown",
                        "name": "stutus",
                        "title": "Stutus",
                        "isRequired": true,
                        "choices": [
                          "At School",
                          "Completed",
                          "Pending",
                          
                          
                        ]
                      },
                      
                    
                    ],
                  },
                ],
              }}
              showNavigationButtons={true}
              onComplete={(survey) => {
                // Handle form submission here
                console.log('Form data:', survey.data);
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
                        {
                          type: 'text',
                          name: 'serviceNumber',
                          title: 'Service No',
                          inputType: 'number',
                          isRequired: true,
                        },
                        {
                          type: 'text',
                          name: 'course',
                          title: 'Course Name',
                          isRequired: true,
                        },
                        {
                          type: 'text',
                          name: 'place',
                          title: 'Place',
                          isRequired: true,
                        },
                        {
                          type: 'text',
                          name: 'Started',
                          title: 'Started',
                          inputType: 'date',
                          isRequired: true,
                        },
                        {
                          type: 'text',
                          name: 'End',
                          title: 'End',
                          inputType: 'date',
                          isRequired: false,
                        },
                        {
                          "type": "dropdown",
                          "name": "status",
                          "title": "Status",
                          "isRequired": true,
                          "choices": [
                            "On course",
                            "Completed"
                          ]
                        },
                      ],
                    },
                  ],
                }}
                showNavigationButtons={true}
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
                      {
                        type: 'text',
                        name: 'serviceNumber',
                        title: 'Service No',
                        inputType: 'number',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'division',
                        title: 'Division',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'brigade',
                        title: 'Brigade',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'regment/battalion',
                        title: 'Regment/Battalion',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'appointment',
                        title: 'Appointment',
                        isRequired: true,
                      },
                    ],
                  },
                ],
              }}
              showNavigationButtons={true}
              onComplete={(survey) => {
                // Handle form submission here
                console.log('Form data:', survey.data);
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
                      {
                        type: 'text',
                        name: 'serviceNumber',
                        title: 'Service No',
                        inputType: 'number',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'name',
                        title: 'Name',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'contact',
                        title: 'Contact',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'relationship',
                        title: 'Relationship',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'location',
                        title: 'Location',
                        isRequired: true,
                      },
                    ],
                  },
                ],
              }}
              showNavigationButtons={true}
              onComplete={(survey) => {
                // Handle form submission here
                console.log('Form data:', survey.data);
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
                      {
                        type: 'text',
                        name: 'serviceNumber',
                        title: 'Service No',
                        inputType: 'number',
                        isRequired: true,
                      },
                      {
                        "type": "dropdown",
                        "name": "bgroup",
                        "title": "Blood Group",
                        "isRequired": true,
                        "choices": [
                          "A",
                          "B",
                          "AB",
                          "O-",
                          "A-",
                          "B-",
                          "AB-",
                          "O-",
                        ]
                      },
                      {
                        type: 'text',
                        name: 'mmi',
                        title: 'MMI No',
                        inputType: 'number',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'height',
                        title: 'Height',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'weight',
                        title: 'Weight',
                        isRequired: true,
                      },
                    ],
                  },
                ],
              }}
              showNavigationButtons={true}
              onComplete={(survey) => {
                // Handle form submission here
                console.log('Form data:', survey.data);
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
                      {
                        type: 'text',
                        name: 'serviceNumber',
                        title: 'Service No',
                        inputType: 'number',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'doe',
                        title: 'Date Of Entry',
                        inputType: 'date',
                        isRequired: true,
                      },
                      {
                        "type": "dropdown",
                        "name": "poe",
                        "title": "Place Of Entry",
                        "isRequired": true,
                        "choices": [
                          "BMTC Nasho",
                          "RMA Gako",
                          "Other",
                          
                        ]
                      },
                      {
                        type: 'text',
                        name: 'css',
                        title: 'CSS ACC No',
                        inputType: 'number',
                        isRequired: true,
                      },
                     
                    ],
                    
                  },
                  
                ],
                
              }}
              showNavigationButtons={true}
              onComplete={(survey) => {
                // Handle form submission here
                console.log('Form data:', survey.data);
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
                      {
                        type: 'text',
                        name: 'serviceNumber',
                        title: 'Service No',
                        inputType: 'number',
                        isRequired: true,
                      },
                      
                     
                      {
                        type: 'text',
                        name: 'Name',
                        title: 'Name',
                        inputType: 'number',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'type',
                        title: 'Type',
                        inputType: 'number',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'location',
                        title: 'Location',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'Name',
                        title: 'Name',
                        inputType: 'number',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'from',
                        title: 'From',
                        inputType: 'date',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'to',
                        title: 'To',
                        inputType: 'date',
                        isRequired: false,
                      },
                      {
                        type: 'text',
                        name: 'unity',
                        title: 'Unity',
                        inputType: 'text',
                        isRequired: true,
                      },
                      {
                        "type": "dropdown",
                        "name": "status",
                        "title": "Status",
                        "isRequired": true,
                        "choices": [
                          "On Going",
                          "Completed"
                        ]
                      },
                    ],
                  },
                ],
              }}
              showNavigationButtons={true}
              onComplete={(survey) => {
                // Handle form submission here
                console.log('Form data:', survey.data);
              }}
            />
          </>
        );
        case 'Promotion Record':
          return (
            <>
              <Survey.Survey
                json={{
                  pages: [
                    {
                      name: 'page1',
                      elements: [
                        {
                          type: 'text',
                          name: 'serviceNumber',
                          title: 'Service No',
                          inputType: 'number',
                          isRequired: true,
                        },
                        
                       
                        {
                          type: 'text',
                          name: 'former rank',
                          title: 'Former Rank',
                          isRequired: true,
                        },
                        {
                          type: 'text',
                          name: 'from',
                          title: 'From',
                          inputType: 'date',
                          isRequired: true,
                        },
                        {
                          type: 'text',
                          name: 'to',
                          title: 'To',
                          inputType: 'date',
                          isRequired: false,
                        },
                        {
                          type: 'text',
                          name: 'newley rank',
                          title: 'Newley Rank',
                          
                          isRequired: true,
                        },
                        
                        
                        {
                          type: 'text',
                          name: 'date of promotion',
                          title: 'Date of Promotion',
                          inputType: 'date',
                          isRequired: false,
                        },
                        
                      ],
                    },
                  ],
                }}
                showNavigationButtons={true}
                onComplete={(survey) => {
                  // Handle form submission here
                  console.log('Form data:', survey.data);
                }}
              />
            </>
          );
          case 'Residence Address':
            return (
              <>
                <Survey.Survey
                  json={{
                    pages: [
                      {
                        name: 'page1',
                        elements: [
                          {
                            type: 'text',
                            name: 'serviceNumber',
                            title: 'Service No',
                            inputType: 'number',
                            isRequired: true,
                          },
                          
                         
                          {
                            type: 'text',
                            name: 'nationId',
                            title: 'NationId',
                            inputType: 'number',
                            isRequired: true,
                          },
                          {
                            type: 'text',
                            name: 'contact',
                            title: 'Contact',
                            inputType: 'number',
                            isRequired: true,
                          },
                          
                          {
                            type: 'text',
                            name: 'provice',
                            title: 'Provice',
                            isRequired: true,
                          },
                          {
                            type: 'text',
                            name: 'district',
                            title: 'District',
                           
                            isRequired: true,
                          },
                          {
                            type: 'text',
                            name: 'sector',
                            title: 'Sector',
                           
                            isRequired: true,
                          },
                          {
                            type: 'text',
                            name: 'cell',
                            title: 'Cell',
                           
                            isRequired: true,
                          },
                          {
                            type: 'text',
                            name: 'village',
                            title: 'Village',
                           
                            isRequired: false,
                          },
                         
                        ],
                      },
                    ],
                  }}
                  showNavigationButtons={true}
                  onComplete={(survey) => {
                    // Handle form submission here
                    console.log('Form data:', survey.data);
                  }}
                />
              </>
            );
            case 'Next of Kin Address':
            return (
              <>
                <Survey.Survey
                  json={{
                    pages: [
                      {
                        name: 'page1',
                        elements: [
                          {
                            type: 'text',
                            name: 'serviceNumber',
                            title: 'Service No',
                            inputType: 'number',
                            isRequired: true,
                          },
                          
                         
                          {
                            type: 'text',
                            name: 'nationId',
                            title: 'NationId',
                            inputType: 'number',
                            isRequired: true,
                          },
                          {
                            type: 'text',
                            name: 'contact',
                            title: 'Contact',
                            inputType: 'number',
                            isRequired: true,
                          },
                          {
                            type: 'text',
                            name: 'provice',
                            title: 'Provice',
                            isRequired: true,
                          },
                          {
                            type: 'text',
                            name: 'district',
                            title: 'District',
                           
                            isRequired: true,
                          },
                          {
                            type: 'text',
                            name: 'sector',
                            title: 'Sector',
                           
                            isRequired: true,
                          },
                          {
                            type: 'text',
                            name: 'cell',
                            title: 'Cell',
                           
                            isRequired: true,
                          },
                          {
                            type: 'text',
                            name: 'village',
                            title: 'Village',
                           
                            isRequired: false,
                          },
                          
                          
                        ],
                      },
                    ],
                  }}
                  showNavigationButtons={true}
                  onComplete={(survey) => {
                    // Handle form submission here
                    console.log('Form data:', survey.data);
                  }}
                />
              </>
            );
            case 'Soldier Kit':
            return (
              <>
                <Survey.Survey
                  json={{
                    pages: [
                      {
                        name: 'page1',
                        elements: [
                          
                          {
                            type: 'text',
                            name: 'serviceNumber',
                            title: 'Service No',
                            inputType: 'number',
                            isRequired: true,
                          },
                          {
                            type: 'text',
                            name: 'Size',
                            title: 'Size',
                            
                            isRequired: true,
                          },
                          {
                            type: 'text',
                            name: 'type',
                            title: 'Type',
                           
                            isRequired: true,
                          },
                          
                         
                        ],
                      },
                    ],
                  }}
                  showNavigationButtons={true}
                  onComplete={(survey) => {
                    // Handle form submission here
                    console.log('Form data:', survey.data);
                  }}
                />
              </>
            );
      // Add cases for other sections if needed
      default:
        return null;
    }
  };

  return (
    
    <>
    
      <CRow>
        <CCol xs="3">
          <CCard className="mb-4">
            <CCardHeader className="d-flex justify-content-between align-items-center">
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
            <CCardHeader className="d-flex justify-content-between align-items-center">
              
              <h5 className="mb-0">{selectedSection}</h5>
              {/* <button className="btn btn-primary btn-sm">
                <i className="fas fa-plus-circle"></i>
                Add New
              </button> */}
            </CCardHeader>
            <CCardBody>{renderFormFields()}</CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default addPersonnel;
