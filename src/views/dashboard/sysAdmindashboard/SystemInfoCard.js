import React from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';

const SystemInfoCard = ({ systemInfoData }) => {
  return (
    <CRow>
      <CCol xs="12">
        <CCard className="mb-4" style={styles.card}>
          <CCardHeader style={styles.cardHeader}>System Information</CCardHeader>
          <CCardBody style={styles.cardBody}>
            <CRow className="mb-3">
              {systemInfoData.map((info, index) => (
                <CCol key={index} xs="6" md="3" className="mb-3">
                  <div style={styles.infoBox}>
                    <div className="text-body-secondary" style={styles.infoActivity}>{info.activity}</div>
                    {info.users !== undefined && <div style={styles.infoText}>{info.users}</div>}
                    {info.percentage !== undefined && <div style={styles.infoText}>{info.percentage}%</div>}
                    {info.count !== undefined && <div style={styles.infoText}>{info.count}</div>}
                  </div>
                </CCol>
              ))}
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

const styles = {
  card: {
    backgroundColor: '#F0F2F5', // Light background for the card to contrast against the light project background
    border: '1px solid #4E617A',
    borderRadius: '8px',
  },
  cardHeader: {
    backgroundColor: '#2E3B4E', // Darker color retained for the card header
    borderBottom: 'none',
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '16px',
    textTransform: 'uppercase', // Adding uppercase for a more military look
  },
  cardBody: {
    padding: '16px',
  },
  infoBox: {
    border: '1px solid #4E617A',
    backgroundColor: '#E2E5E9', // Slightly lighter for contrast
    padding: '16px',
    borderRadius: '8px',
  },
  infoActivity: {
    color: '#2E3B4E', // Darker color for activity text
    marginBottom: '8px',
    textTransform: 'uppercase', // Adding uppercase for a more military look
  },
  infoText: {
    color: '#2E3B4E',
    fontWeight: 'bold',
    fontSize: '16px', // Slightly larger for emphasis
  },
};

export default SystemInfoCard;
