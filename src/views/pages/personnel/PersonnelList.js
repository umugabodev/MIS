import React, { useState } from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import { cilPeople } from '@coreui/icons';

const Dashboards1 = () => {
  const [selectedSection, setSelectedSection] = useState('');

  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId);
  };

  const renderFormFields = () => {
    switch (selectedSection) {
      case 'patient-info':
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
                        name: 'firstName',
                        title: 'First Name *',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'lastName',
                        title: 'Last Name *',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'ssn',
                        title: 'Social Security Number *',
                        isRequired: true,
                      },
                      {
                        type: 'text',
                        name: 'birthdate',
                        title: 'Date of Birth *',
                        inputType: 'date',
                        isRequired: true,
                      },
                      {
                        type: 'comment',
                        name: 'concerns',
                        title: 'List any concerns you want to talk about during your visit',
                      },
                    ],
                  },
                ],
              }}
              showNavigationButtons={false}
              onComplete={(survey) => {
                // Handle form submission here
                console.log('Form data:', survey.data);
              }}
            />
          </>
        );
      case 'health-history':
        return (
          <>
            <Survey.Survey
              json={{
                pages: [
                  {
                    name: 'page1',
                    elements: [
                      {
                        type: 'radiogroup',
                        name: 'diabetes',
                        title: 'Do you have diabetes?',
                        isRequired: true,
                        choices: ['No', 'Yes'],
                      },
                      {
                        type: 'radiogroup',
                        name: 'highBloodPressure',
                        title: 'High blood pressure?',
                        isRequired: true,
                        choices: ['No', 'Yes'],
                      },
                      {
                        type: 'radiogroup',
                        name: 'highCholesterol',
                        title: 'High cholesterol?',
                        isRequired: true,
                        choices: ['No', 'Yes'],
                      },
                      {
                        type: 'comment',
                        name: 'otherHealthConditions',
                        title: 'Do you have other health conditions?',
                      },
                    ],
                  },
                ],
              }}
              showNavigationButtons={false}
              onComplete={(survey) => {
                // Handle form submission here
                console.log('Form data:', survey.data);
              }}
            />
          </>
        );
      case 'social-history':
        return (
          <>
            <Survey.Survey
              json={{
                pages: [
                  {
                    name: 'page1',
                    elements: [
                      {
                        type: 'radiogroup',
                        name: 'smokeCigarettes',
                        title: 'Do you smoke cigarettes?',
                        isRequired: true,
                        choices: ['Never', 'Yes', 'Quit'],
                      },
                      {
                        type: 'radiogroup',
                        name: 'vape',
                        title: 'Do you vape (e-cigarettes)?',
                        isRequired: true,
                        choices: ['No', 'Yes'],
                      },
                      {
                        type: 'radiogroup',
                        name: 'drinkAlcohol',
                        title: 'Do you drink alcohol?',
                        isRequired: true,
                        choices: ['No', 'Yes'],
                      },
                      {
                        type: 'checkbox',
                        name: 'recreationalDrugs',
                        title: 'Do you use recreational drugs?',
                        isRequired: true,
                        choices: ['Rarely', 'Opioids', 'Marijuana', 'Never', 'Cocaine', 'Other'],
                      },
                      {
                        type: 'text',
                        name: 'educationLevel',
                        title: 'What is your highest level of education completed?',
                        isRequired: true,
                      },
                    ],
                  },
                ],
              }}
              showNavigationButtons={false}
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
              <h5 className="mb-0">Sections</h5>
            </CCardHeader>
            <CCardBody>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li
                  style={{ marginBottom: '10px', cursor: 'pointer' }}
                  onClick={() => handleSectionClick('patient-info')}
                >
                  <a>Patient Information</a>
                </li>
                <li
                  style={{ marginBottom: '10px', cursor: 'pointer' }}
                  onClick={() => handleSectionClick('health-history')}
                >
                  <a>Health History</a>
                </li>
                <li
                  style={{ marginBottom: '10px', cursor: 'pointer' }}
                  onClick={() => handleSectionClick('social-history')}
                >
                  <a>Social History</a>
                </li>
                {/* Add more sections here */}
              </ul>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="9">
          <CCard className="mb-4">
            <CCardHeader className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">List Of Personnel</h5>
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

export default Dashboards1;
