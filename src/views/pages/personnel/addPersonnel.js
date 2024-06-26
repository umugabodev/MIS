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
                        name: 'rank',
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
                        defaultValue: formData['rank'] || ''
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
                        name: 'school',
                        title: 'School/University',
                        isRequired: true,
                        defaultValue: formData['school'] || ''
                      },
                      {
                        "type": "dropdown",
                        "name": "rank",
                        "title": "Rank",
                        "isRequired": true,
                        "choices": [
                          "Pte",
                          "Cpl",
                          "Sgt",
                          "SSgt",
                          "SM",
                          "W0I",
                        ],
                        defaultValue: formData['rank'] || ''
                      },
                      
                      {
                        type: 'text',
                        name: 'degree',
                        title: 'Degree ',
                        isRequired: true,
                        defaultValue: formData['degree'] || ''
                      },
                      {
                        type: 'text',
                        name: 'starteddegree',
                        title: 'Started',
                        inputType: 'date',
                        isRequired: true,
                        defaultValue: formData['starteddegree'] || ''
                      },
                      {
                        type: 'text',
                        name: 'enddegree',
                        title: 'End',
                        inputType: 'date',
                        isRequired: false,
                        defaultValue: formData['enddegree'] || ''
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
                          
                          
                        ],
                        defaultValue: formData['country'] || ''
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
                          
                          
                        ],
                        defaultValue: formData['stutus'] || ''
                      },
                      
                    
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
                setSelectedSection("Course and Training")
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
                          name: 'course',
                          title: 'Course Name',
                          isRequired: true,
                          defaultValue: formData['course'] || ''
                        },
                        {
                          type: 'text',
                          name: 'place',
                          title: 'Place',
                          isRequired: true,
                          defaultValue: formData['place'] || ''
                        },
                        
                        {
                          type: 'text',
                          name: 'startedcourse',
                          title: 'Started',
                          inputType: 'date',
                          isRequired: true,
                          defaultValue: formData['startedcourse'] || ''
                        },
                        {
                          type: 'text',
                          name: 'endcourse',
                          title: 'End',
                          inputType: 'date',
                          isRequired: false,
                          defaultValue: formData['endcourse'] || ''
                        },
                        {
                          "type": "dropdown",
                          "name": "status",
                          "title": "Status",
                          "isRequired": true,
                          "choices": [
                            "On course",
                            "Completed"
                          ],
                          defaultValue: formData['status'] || ''
                        },
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
                  setSelectedSection("Deployment Data")
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
                      
                      {
                        type: 'text',
                        name: 'division',
                        title: 'Division',
                        isRequired: true,
                        defaultValue: formData['division'] || ''
                      },
                      {
                        type: 'text',
                        name: 'brigade',
                        title: 'Brigade',
                        isRequired: true,
                        defaultValue: formData['brigade'] || ''
                      },
                      {
                        type: 'text',
                        name: 'regment',
                        title: 'Regment/Battalion',
                        isRequired: true,
                        defaultValue: formData['regment'] || ''
                      },
                      {
                        type: 'text',
                        name: 'appointment',
                        title: 'Appointment',
                        isRequired: true,
                        defaultValue: formData['appointment'] || ''
                      },
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
                setSelectedSection("Emergency Contact")
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
                        name: 'name',
                        title: 'Name',
                        isRequired: true,
                        defaultValue: formData['name'] || ''
                      },
                      {
                        type: 'text',
                        name: 'contact',
                        title: 'Contact',
                        isRequired: true,
                        defaultValue: formData['contact'] || ''
                      },
                      {
                        type: 'text',
                        name: 'relationship',
                        title: 'Relationship',
                        isRequired: true,
                        defaultValue: formData['relationship'] || ''
                      },
                      {
                        type: 'text',
                        name: 'location',
                        title: 'Location',
                        isRequired: true,
                        defaultValue: formData['location'] || ''
                      },
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
                setSelectedSection("Medical Data")
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
                        "type": "dropdown",
                        "name": "bgroup",
                        "title": "Blood Group",
                        "isRequired": true,
                        "choices": [
                          "A+",                          
                          "A-",
                          "B+",
                          "B-",
                          "O+",
                          "O-", 
                          "AB+",                         
                          "AB-",
                          
                        ],
                        defaultValue: formData['bgroup'] || ''
                      },
                      {
                        type: 'text',
                        name: 'mmi',
                        title: 'MMI No',
                        inputType: 'number',
                        isRequired: true,
                        defaultValue: formData['mmi'] || ''
                      },
                      {
                        type: 'text',
                        name: 'height',
                        title: 'Height',
                        isRequired: true,
                        defaultValue: formData['height'] || ''
                      },
                      {
                        type: 'text',
                        name: 'weight',
                        title: 'Weight',
                        isRequired: true,
                        defaultValue: formData['weight'] || ''
                      },
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
                setSelectedSection("Military Information")
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
                        name: 'doe',
                        title: 'Date Of Entry',
                        inputType: 'date',
                        isRequired: true,
                        defaultValue: formData['doe'] || ''
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
                          
                        ],
                        defaultValue: formData['poe'] || ''
                      },
                      {
                        type: 'text',
                        name: 'css',
                        title: 'CSS ACC No',
                        inputType: 'number',
                        isRequired: true,
                        defaultValue: formData['css'] || ''
                      },
                     
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
                setSelectedSection("Mission and Operation")
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
                        name: 'type',
                        title: 'Type',
                        defaultValue: formData['type'] || '',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'location',
                        title: 'Location',
                        isRequired: true,
                        defaultValue: formData['location'] || ''
                      },
                      {
                        type: 'text',
                        name: 'name',
                        title: 'Name',
                    
                        isRequired: true,
                        defaultValue: formData['name'] || ''
                      },
                      {
                        type: 'text',
                        name: 'from',
                        title: 'From',
                        inputType: 'date',
                        isRequired: true,
                        defaultValue: formData['from'] || ''
                      },
                      {
                        type: 'text',
                        name: 'to',
                        title: 'To',
                        inputType: 'date',
                        isRequired: false,
                        defaultValue: formData['to'] || ''
                      },
                      {
                        type: 'text',
                        name: 'unity',
                        title: 'Unity',
                        inputType: 'text',
                        isRequired: true,
                        defaultValue: formData['unity'] || ''
                      },
                      {
                        "type": "dropdown",
                        "name": "status",
                        "title": "Status",
                        "isRequired": true,
                        "choices": [
                          "On Going",
                          "Completed"
                        ],
                        defaultValue: formData['status'] || ''
                      },
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
                setSelectedSection("Promotion Record")
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
                          name: 'formerrank',
                          title: 'Former Rank',
                          isRequired: true,
                          defaultValue: formData['formerrank'] || ''
                        },
                        {
                          type: 'text',
                          name: 'from',
                          title: 'From',
                          inputType: 'date',
                          isRequired: true,
                          defaultValue: formData['from'] || ''
                        },
                        {
                          type: 'text',
                          name: 'to',
                          title: 'To',
                          inputType: 'date',
                          isRequired: false,
                          defaultValue: formData['to'] || ''
                        },
                        {
                          type: 'text',
                          name: 'newleyrank',
                          title: 'Newley Rank',
                          defaultValue: formData['newleyrank'] || '',
                          isRequired: true,
                        },
                        
                        
                        {
                          type: 'text',
                          name: 'dop',
                          title: 'Date of Promotion',
                          inputType: 'date',
                          isRequired: false,
                          defaultValue: formData['dop'] || ''
                        },
                        
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
                setSelectedSection("Residence Address")
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
                            name: 'nationId',
                            title: 'NationId',
                            inputType: 'number',
                            isRequired: true,
                            defaultValue: formData['nationId'] || ''
                          },
                          {
                            type: 'text',
                            name: 'contact',
                            title: 'Contact',
                            inputType: 'number',
                            isRequired: true,
                            defaultValue: formData['contact'] || ''
                          },
                          
                          {
                            type: 'text',
                            name: 'provice',
                            title: 'Provice',
                            isRequired: true,
                            defaultValue: formData['province'] || ''
                          },
                          {
                            type: 'text',
                            name: 'district',
                            title: 'District',
                           defaultValue: formData['district'] || '',
                            isRequired: true,
                          },
                          {
                            type: 'text',
                            name: 'sector',
                            title: 'Sector',
                           defaultValue: formData['sector'] || '',
                            isRequired: true,
                          },
                          {
                            type: 'text',
                            name: 'cell',
                            title: 'Cell',
                           defaultValue: formData['cell'] || '',
                            isRequired: true,
                          },
                          {
                            type: 'text',
                            name: 'village',
                            title: 'Village',
                           defaultValue: formData['village'] || '',
                            isRequired: false,
                          },
                         
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
                setSelectedSection("Next of Kin Address")
              }}
                />
              </>
            );
            case 'Spouse Address':
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
                              name: 'nationId',
                              title: 'NationId',
                              inputType: 'number',
                              isRequired: true,
                              defaultValue: formData['nationId'] || ''
                            },
                            {
                              type: 'text',
                              name: 'contact',
                              title: 'Contact',
                              inputType: 'number',
                              isRequired: true,
                              defaultValue: formData['contact'] || ''
                            },
                            {
                              type: 'text',
                              name: 'provice',
                              title: 'Provice',
                              isRequired: true,
                              defaultValue: formData['province'] || ''
                            },
                            {
                              type: 'text',
                              name: 'district',
                              title: 'District',
                             defaultValue: formData['district'] || '',
                              isRequired: true,
                            },
                            {
                              type: 'text',
                              name: 'sector',
                              title: 'Sector',
                             defaultValue: formData['sector'] || '',
                              isRequired: true,
                            },
                            {
                              type: 'text',
                              name: 'cell',
                              title: 'Cell',
                             defaultValue: formData['cell'] || '',
                              isRequired: true,
                            },
                            {
                              type: 'text',
                              name: 'village',
                              title: 'Village',
                             defaultValue: formData['village'] || '',
                              isRequired: false,
                            },
                            
                            
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
                      setSelectedSection("Soldier Kit")
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
                            name: 'nationId',
                            title: 'NationId',
                            inputType: 'number',
                            isRequired: true,
                            defaultValue: formData['nationId'] || ''
                          },
                          {
                            type: 'text',
                            name: 'contact',
                            title: 'Contact',
                            inputType: 'number',
                            isRequired: true,
                            defaultValue: formData['contact'] || ''
                          },
                          {
                            type: 'text',
                            name: 'relationship',
                            title: 'Relationship',
                         
                            isRequired: true,
                            defaultValue: formData['relationship'] || ''
                          },
                          {
                            type: 'text',
                            name: 'provice',
                            title: 'Provice',
                            isRequired: true,
                            defaultValue: formData['province'] || ''
                          },
                          {
                            type: 'text',
                            name: 'district',
                            title: 'District',
                           defaultValue: formData['district'] || '',
                            isRequired: true,
                          },
                          {
                            type: 'text',
                            name: 'sector',
                            title: 'Sector',
                           defaultValue: formData['sector'] || '',
                            isRequired: true,
                          },
                          {
                            type: 'text',
                            name: 'cell',
                            title: 'Cell',
                           defaultValue: formData['cell'] || '',
                            isRequired: true,
                          },
                          {
                            type: 'text',
                            name: 'village',
                            title: 'Village',
                           defaultValue: formData['village'] || '',
                            isRequired: false,
                          },
                          
                          
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
                    setSelectedSection("Soldier Kit")
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
                            name: 'size',
                            title: 'Size',
                            defaultValue: formData['size'] || '',
                            isRequired: true,
                          },
                          {
                            type: 'text',
                            name: 'type',
                            title: 'Type',
                           defaultValue: formData['type'] || '',
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
