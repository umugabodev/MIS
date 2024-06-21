import React from 'react';

import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilUser, cilPeople, cilSettings, cilDataTransferDown, cilStorage, cilChartPie, cilList } from '@coreui/icons';

import avatar1 from 'src/assets/images/avatars/1.jpg';
import avatar2 from 'src/assets/images/avatars/2.jpg';
import avatar3 from 'src/assets/images/avatars/3.jpg';
import avatar4 from 'src/assets/images/avatars/4.jpg';
import avatar5 from 'src/assets/images/avatars/5.jpg';
import avatar6 from 'src/assets/images/avatars/6.jpg';

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

  return (
    <>
      

      {/* System Info Section */}
      <CRow>
  <CCol xs="12">
    <CCard className="mb-4" style={{ backgroundColor: '#2E3B4E', border: '1px solid #4E617A', borderRadius: '8px' }}>
      <CCardHeader style={{ backgroundColor: '#2E3B4E', borderBottom: 'none', color: '#FFFFFF', fontSize: '18px', fontWeight: 'bold', padding: '16px' }}>
        System Information
      </CCardHeader>
      <CCardBody style={{ padding: '16px' }}>
        <CRow className="mb-3">
          {systemInfoData.map((info, index) => (
            <CCol key={index} xs="6" md="3" className="mb-3">
              <div style={{ border: '1px solid #4E617A', backgroundColor: '#36465A', padding: '16px', borderRadius: '8px' }}>
                <div className="text-body-secondary" style={{ color: '#7E8EAB', marginBottom: '8px' }}>{info.activity}</div>
                {info.users !== undefined && <div className="fw-semibold" style={{ color: '#FFFFFF' }}>{info.users}</div>}
                {info.percentage !== undefined && <div className="fw-semibold" style={{ color: '#FFFFFF' }}>{info.percentage}%</div>}
                {info.count !== undefined && <div className="fw-semibold" style={{ color: '#FFFFFF' }}>{info.count}</div>}
              </div>
            </CCol>
          ))}
        </CRow>
      </CCardBody>
    </CCard>
  </CCol>
</CRow>




      {/* Deployments Section
      <CCard className="mb-4">
        <CCardHeader>Deployments</CCardHeader>
        <CCardBody>
          <CRow>
            {deploymentsData.map((deployment, index) => (
              <CCol xs={6} md={3} key={index}>
                <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                  <div className="text-body-secondary">{deployment.division}</div>
                  <div className="fs-5 fw-semibold">{deployment.strength}</div>
                </div>
              </CCol>
            ))}
          </CRow>
        </CCardBody>
      </CCard> */}

      {/* Rank Distribution Section */}
      <CCard className="mb-4">
        <CCardHeader>Rank Distribution </CCardHeader>
        <CCardBody>
          <CRow>
            {rankDistributionData.map((rank, index) => (
              <CCol xs={6} key={index}>
                <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                  <div className="progress-group mb-4">
                    <div className="progress-group-header">
                      <CIcon className="me-2" icon={cilUser} size="lg" />
                      <span>{rank.rank}</span>
                    </div>
                    <div className="progress-group-bars">
                      <div className="progress-group-bar" style={{ width: `${rank.male}%`, backgroundColor: '#ffc107', height: '8px', borderRadius: '4px', marginBottom: '4px' }}></div>
                      <div className="progress-group-bar" style={{ width: `${rank.female}%`, backgroundColor: '#17a2b8', height: '8px', borderRadius: '4px' }}></div>
                    </div>
                  </div>
                </div>
              </CCol>
            ))}
          </CRow>
        </CCardBody>
      </CCard>
      {/* User Info Section */}
      <CCard className="mb-4">
        <CCardHeader>User Info</CCardHeader>
        <CCardBody>
          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead className="text-nowrap">
              <CTableRow>
                <CTableHeaderCell className="bg-body-tertiary text-center">
                  <CIcon icon={cilPeople} />
                </CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">Name</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">Registered</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">Role</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">Location</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {userData.map((user, index) => (
                <CTableRow key={index}>
                  <CTableDataCell className="text-center">
                    <CAvatar size="md" src={user.avatar} />
                  </CTableDataCell>
                  <CTableDataCell>{user.name}</CTableDataCell>
                  <CTableDataCell>{user.registered}</CTableDataCell>
                  <CTableDataCell>{user.role}</CTableDataCell>
                  <CTableDataCell>{user.location}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      {/* Permission Info Section */}
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
