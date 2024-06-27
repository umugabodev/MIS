import React from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilUser, cilSettings } from '@coreui/icons';
import avatar1 from 'src/assets/images/avatars/1.jpg';
import avatar2 from 'src/assets/images/avatars/2.jpg';
import avatar3 from 'src/assets/images/avatars/3.jpg';
import avatar4 from 'src/assets/images/avatars/4.jpg';
import Userlist from '../User/UserList';
import SystemInfoCard from './SystemInfoCard';

const DashboardAdmin = () => {
  const userData = [
    { avatar: avatar2, name: 'O NTAKIRUTIMANA', registered: 'Jan 1, 2022', role: 'Admin', location: 'Rubavu Gen Area' },
    { avatar: avatar4, name: 'E GATESI', registered: 'Feb 1, 2023', role: 'User', location: 'Ngarama Mil Barracks' },
    { avatar: avatar3, name: 'A BITWAYIKI', registered: 'Mar 17, 2019', role: 'User', location: 'Mukamira Mil Barracks' },
  ];

  const permissionsData = [
    { name: 'Manage Users', assignedTo: 'O NTAKIRUTIMANA' },
    { name: 'Add Permissions', assignedTo: 'E GATESI' },
    { name: 'Link UserRight', assignedTo: 'A BITWAYIKI' },
  ];

  const systemInfoData = [
    { activity: 'Activities', users: 45 },
    { activity: 'Active Users', users: 67 },
    { activity: 'CPU Consumption', percentage: 45 },
    { activity: 'Memory Consumption', percentage: 32 },
    { activity: 'System Logs', count: 120 },
  ];

  const deploymentsData = [
    { division: '1 Inf Div', strength: 11 },
    { division: '2 Inf Div', strength: 23 },
    { division: '5 Inf Div', strength: 31 },
    { division: 'TF Div', strength: 9 },
    { division: 'Log Bde', strength: 16 },
    { division: 'MP Bde', strength: 9 },
    { division: 'Air Force', strength: 42 },
    { division: 'Reserve Force', strength: 22 },
  ];

  const rankDistributionData = [
    { rank: 'Officers', male: 53, female: 26 },
    { rank: 'NCOs', male: 64, female: 43 },
  ];

  const styles = {
    progressGroup: {
      border: '1px solid #ccc',
      padding: '10px',
      marginBottom: '10px',
    },
    progressGroupBar: {
      height: '8px',
      borderRadius: '4px',
      marginBottom: '4px',
    },
  };

  return (
    <>
      <SystemInfoCard systemInfoData={systemInfoData} />

      <CCard className="mb-4">
        <CCardHeader>Rank Distribution</CCardHeader>
        <CCardBody>
          <CRow>
            {rankDistributionData.map((rank, index) => (
              <CCol xs={6} key={index}>
                <div style={styles.progressGroup}>
                  <div className="progress-group mb-4">
                    <div className="progress-group-header">
                      <CIcon className="me-2" icon={cilUser} size="lg" />
                      <span>{rank.rank}</span>
                    </div>
                    <div className="progress-group-bars">
                      <div
                        className="progress-group-bar"
                        style={{ ...styles.progressGroupBar, width: `${rank.male}%`, backgroundColor: '#ffc107' }}
                      ></div>
                      <div
                        className="progress-group-bar"
                        style={{ ...styles.progressGroupBar, width: `${rank.female}%`, backgroundColor: '#17a2b8' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CCol>
            ))}
          </CRow>
        </CCardBody>
      </CCard>

      <Userlist />

      <CCard className="mb-4">
        <CCardHeader>Permission Info</CCardHeader>
        <CCardBody>
          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead className="text-nowrap">
              <CTableRow>
                <CTableHeaderCell className="bg-body-tertiary">
                  <CIcon icon={cilSettings} />
                </CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">Permission Name</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">Assigned To</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {permissionsData.map((permission, index) => (
                <CTableRow key={index}>
                  <CTableDataCell className="text-center">
                    <CIcon icon={cilSettings} />
                  </CTableDataCell>
                  <CTableDataCell>{permission.name}</CTableDataCell>
                  <CTableDataCell>{permission.assignedTo}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  );
};

export default DashboardAdmin;
