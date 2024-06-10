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

const addCase = () => {
  const [selectedSection, setSelectedSection] = useState('DISCIPLINARY FORM');
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
      case 'DISCIPLINARY FORM':
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
                        name: 'description',
                        title: 'Short Note ',
                        isRequired: true,
                        defaultValue: formData['description'] || ''
                      },
                      {
                        "type": "dropdown",
                        "name": "category",
                        "title": "Category",
                        "isRequired": true,
                        "choices": [
                          "UDC",
                          "Statement",                         
                        ],
                        defaultValue: formData['category'] || ''
                      },         
                      {
                        type: 'file',
                        name: 'fileupload',
                        title: 'Upload File ',
                        isRequired: true,
                        defaultValue: formData['fileupload'] || ''
                      },                   
                    
                    ],
                  },
                ],
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
      {/* /*<CCol xs="3">
          <CCard className="mb-4">
            { <CCardHeader className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Case Category</h5>
            </CCardHeader>
            { <CCardBody>            
      
              <ul style={{ listStyleType: 'none', padding: 0, marginLeft: "" }}>
                <li
                  style={{ marginBottom: '10px', cursor: 'pointer' }}
                  onClick={() => handleSectionClick('DISCIPLINARY FORM')}
                >
                  <a>UDS File</a>
                </li>
                <li
                  style={{ marginBottom: '10px', cursor: 'pointer' }}
                  onClick={() => handleSectionClick('Academic Qualification')}
                >
                  <a>Statement File</a>
                </li>
              </ul>
              
            </CCardBody> } 
          </CCard>
        </CCol> */}
      
      
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

export default addCase;
