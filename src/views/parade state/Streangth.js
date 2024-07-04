import React from 'react';
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CWidgetStatsA,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilUser, cilUserFemale } from '@coreui/icons';
import { CChartPie } from '@coreui/react-chartjs';

const Strengthreturn = () => {
  const summaryData = {
    officers: 79,
    NCOs: 107,
    others: 205,
  };

  const progressExample = [
    { title: 'Other Ranks', value: '205', percent: 70, color: 'success' },
    { title: 'NCOs', value: '74', percent: 51, color: 'success' },
    { title: 'SNCOs', value: '31', percent: 50, color: 'success' },
    { title: 'Junior Officers', value: '62', percent: 80, color: 'success' },
    { title: 'Senior Officers', value: '14', percent: 70, color: 'success' },
  ];

  const progressGroupExample1 = [
    { title: 'Male (Officers)', icon: cilUser, value: 53 },
    { title: 'Female (Officers)', icon: cilUserFemale, value: 26 },
  ];

  const progressGroupExample2 = [
    { title: 'Male (NCOs)', icon: cilUser, value: 64 },
    { title: 'Female (NCOs)', icon: cilUserFemale, value: 43 },
  ];

  const cardHeaderStyle = {
    backgroundColor: '#2c3e50',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  };

  const cardBodyStyle = {
    backgroundColor: '#ecf0f1',
  };

  const cardFooterStyle = {
    backgroundColor: '#bdc3c7',
    color: '#2c3e50',
    fontWeight: 'bold',
  };

  const progressBarStyle = {
    height: '10px',
  };

  const summaryCardStyle = {
    border: '2px solid #34495e',
    borderRadius: '5px',
    marginBottom: '20px',
  };

  const tableHeaderStyle = {
    backgroundColor: '#34495e',
    color: 'white',
  };

  const tableRowStyle = {
    backgroundColor: '#ecf0f1',
  };

  return (
    <>
     <CRow>
        <CCol>
          <CCard style={{ borderColor: '#34495e' }}>
            <CCardHeader style={cardHeaderStyle}>
              <strong>Detailed Strength Information</strong>
            </CCardHeader>
            <CCardBody style={cardBodyStyle}>
              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell style={tableHeaderStyle}>Rank</CTableHeaderCell>
                    <CTableHeaderCell style={tableHeaderStyle}>Male</CTableHeaderCell>
                    <CTableHeaderCell style={tableHeaderStyle}>Female</CTableHeaderCell>
                    <CTableHeaderCell style={tableHeaderStyle}>Total</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {progressExample.map((item, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell style={tableRowStyle}>{item.title}</CTableDataCell>
                      <CTableDataCell style={tableRowStyle}>{Math.floor(item.percent / 2)}%</CTableDataCell>
                      <CTableDataCell style={tableRowStyle}>{Math.floor(item.percent / 2)}%</CTableDataCell>
                      <CTableDataCell style={tableRowStyle}>{item.percent}%</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <br></br>
      <CRow>
        <CCol xs="12" sm="6" lg="4">
          <CCard style={{ borderColor: '#34495e' }}>
            <CCardHeader style={cardHeaderStyle}>
              <strong>Officer Strength</strong>
            </CCardHeader>
            <CCardBody style={cardBodyStyle}>
              {progressGroupExample1.map((item, index) => (
                <div className="progress-group mb-4" key={index}>
                  <div className="progress-group-header">
                    <CIcon className="me-2" icon={item.icon} size="lg" />
                    <span>{item.title}</span>
                    <span className="ms-auto fw-semibold">{item.value}%</span>
                  </div>
                  <div className="progress-group-bars">
                    <CProgress thin color="warning" value={item.value} style={progressBarStyle} />
                  </div>
                </div>
              ))}
            </CCardBody>
            <CCardFooter style={cardFooterStyle}>
              <small>Overall Officer Distribution</small>
            </CCardFooter>
          </CCard>
        </CCol>

        <CCol xs="12" sm="6" lg="4">
          <CCard style={{ borderColor: '#34495e' }}>
            <CCardHeader style={cardHeaderStyle}>
              <strong>NCO Strength</strong>
            </CCardHeader>
            <CCardBody style={cardBodyStyle}>
              {progressGroupExample2.map((item, index) => (
                <div className="progress-group mb-4" key={index}>
                  <div className="progress-group-header">
                    <CIcon className="me-2" icon={item.icon} size="lg" />
                    <span>{item.title}</span>
                    <span className="ms-auto fw-semibold">{item.value}%</span>
                  </div>
                  <div className="progress-group-bars">
                    <CProgress thin color="warning" value={item.value} style={progressBarStyle} />
                  </div>
                </div>
              ))}
            </CCardBody>
            <CCardFooter style={cardFooterStyle}>
              <small>Overall NCO Distribution</small>
            </CCardFooter>
          </CCard>
        </CCol>
          <br></br>
        <CCol xs="12" sm="12" lg="4">
          <CCard style={{ borderColor: '#34495e' }}>
            <CCardHeader style={cardHeaderStyle}>
              <strong>Other Ranks</strong>
            </CCardHeader>
            <CCardBody style={cardBodyStyle}>
              {progressExample.map((item, index) => (
                <div className="progress-group mb-4" key={index}>
                  <div className="progress-group-header">
                    <span>{item.title}</span>
                    <span className="ms-auto fw-semibold">{item.value}</span>
                  </div>
                  <div className="progress-group-bars">
                    <CProgress thin color={item.color} value={item.percent} style={progressBarStyle} />
                  </div>
                </div>
              ))}
            </CCardBody>
            <CCardFooter style={cardFooterStyle}>
              <small>Distribution by Rank</small>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>

      
    </>
  );
};

export default Strengthreturn;
