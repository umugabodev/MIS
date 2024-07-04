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
                        defaultValue: formData['serviceNumber'] || '',
                        maxLength: 10, // Example: set a maximum length for input
                        size: 40, // Example: set a size for the input field
                        width: '100%', // Ensure the field takes full width
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
                        defaultValue: formData['rank'] || '',
                        width: '100%', // Ensure the dropdown takes full width
                      },
                      {
                        type: 'text',
                        name: 'firstname',
                        title: 'First Name',
                        isRequired: true,
                        defaultValue: formData['firstname'] || '',
                        width: '100%', // Ensure the text field takes full width
                      },
                      {
                        type: 'text',
                        name: 'lastname',
                        title: 'Last Name',
                        isRequired: true,
                        defaultValue: formData['lastname'] || '',
                        width: '100%', // Ensure the text field takes full width
                      },
                      {
                        type: 'text',
                        name: 'description',
                        title: 'Short Note',
                        isRequired: true,
                        defaultValue: formData['description'] || '',
                        width: '100%', // Ensure the text field takes full width
                      },
                      {
                        type: 'dropdown',
                        name: 'category',
                        title: 'Category',
                        isRequired: true,
                        choices: [
                          'UDC',
                          'Statement',
                        ],
                        defaultValue: formData['category'] || '',
                        width: '100%', // Ensure the dropdown takes full width
                      },
                      {
                        type: 'file',
                        name: 'fileupload',
                        title: 'Upload File',
                        isRequired: true,
                        defaultValue: formData['fileupload'] || '',
                        width: '100%', // Ensure the file upload takes full width
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
        <CCol xs="8" className=" ">
          <CCard className="mb-4 justify-center justify-content-start">
            <CCardHeader className="d-flex justify-content-between align-items-center">
              
              <h5 className="mb-0">{selectedSection}</h5>
              </CCardHeader>
            <CCardBody>{renderFormFields()}</CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default addCase;
