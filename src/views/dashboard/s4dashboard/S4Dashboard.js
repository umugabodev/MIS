import React from 'react';
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FaUserShield, FaMapMarkedAlt, FaCogs, FaFlag } from 'react-icons/fa';

const S4dashboard = () => {
  const disciplinaryInfo = [
    {
      caseNumber: 'CASE001',
      description: 'Description of the disciplinary case',
      status: 'Active',
      officer: 'Officer Name',
    },
    {
      caseNumber: 'CASE002',
      description: 'Description of another disciplinary case',
      status: 'Closed',
      officer: 'Another Officer',
    },
  ];

  const securityInfo = {
    ownForce: {
      officers: 120,
      soldiers: 500,
      specialUnits: 500,
    },
    operationArea: {
      
      soldiers: 300,
      specialUnits: 15,
      vehicles: 50,
      location: 'Butare, Rwanda',
    },
  };

  const equipmentInfo = {
    trace: [
      {
        id: 'EQ001',
        type: 'Type of equipment',
        status: 'Active',
      },
      {
        id: 'EQ002',
        type: 'Another type of equipment',
        status: 'Inactive',
      },
    ],
    active: [
      {
        id: 'EQ003',
        type: 'Active equipment type',
        status: 'Active',
      },
    ],
    inactive: [
      {
        id: 'EQ004',
        type: 'Inactive equipment type',
        status: 'Inactive',
      },
    ],
    archived: [
      {
        id: 'EQ005',
        type: 'Archived equipment type',
        status: 'Archived',
      },
    ],
  };

  const defaultMapData = {
    DD: { lat: -1.94371, lng: 29.88058 },
    DMS: { lat: "1º56'37.34\" S", lng: "29º52'50.08\" E" },
    geohash: "kxthzynm5f",
    UTM: "35M 820488.63518125 9784887.86403978",
  };

  const { lat, lng } = defaultMapData.DD;
  const mapCenter = [lat, lng];
  const zoomLevel = 9;

  return (
    <>
      <CRow>
        <CCol xs="12" lg="6">
          <CCard className="mb-4">
            <CCardBody>
              <h5 className="card-title mb-4">
                <FaUserShield className="me-2" />Disciplinary Info
              </h5>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell>Case Number</CTableHeaderCell>
                    <CTableHeaderCell>Description</CTableHeaderCell>
                    <CTableHeaderCell>Status</CTableHeaderCell>
                    <CTableHeaderCell>Officer</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {disciplinaryInfo.map((caseItem, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{caseItem.caseNumber}</CTableDataCell>
                      <CTableDataCell>{caseItem.description}</CTableDataCell>
                      <CTableDataCell>{caseItem.status}</CTableDataCell>
                      <CTableDataCell>{caseItem.officer}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" lg="6">
          <CCard className="mb-4">
            <CCardBody>
              <h5 className="card-title mb-4">
                <FaFlag className="me-2" />Security Info
              </h5>
              <CRow>
                <CCol xs="6">
                  <div className="text-body-secondary mb-3">Own Force</div>
                  <div>Officers: {securityInfo.ownForce.officers}</div>
                  <div>Soldiers: {securityInfo.ownForce.soldiers}</div>
                  <div>Special Units: {securityInfo.ownForce.specialUnits}</div>
                </CCol>
                <CCol xs="6">
                  <div className="text-body-secondary mb-3">Operation Area</div>
                  <div>Soldiers: {securityInfo.operationArea.soldiers}</div>
                  <div>Special Units: {securityInfo.operationArea.specialUnits}</div>
                  <div>Vehicles: {securityInfo.operationArea.vehicles}</div>
                  <div>Location: {securityInfo.operationArea.location}</div>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CCard className="mb-4">
        <CCardBody>
          <h5 className="card-title mb-4">
            <FaMapMarkedAlt className="me-2" />Map
          </h5>
          <MapContainer center={mapCenter} zoom={zoomLevel} style={{ height: '400px' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={mapCenter}>
              <Popup>Rwanda</Popup>
            </Marker>
          </MapContainer>
        </CCardBody>
      </CCard>

      <CRow>
  <CCol>
    <CCard className="mb-4" style={{ background: '#2c3e50', borderColor: '#34495e' }}>
      <CCardBody>
        <h5 className="card-title mb-4" style={{ color: '#ecf0f1' }}>
          <FaCogs className="me-2" style={{ color: '#f39c12' }} />Equipment Info
        </h5>
        <CTable align="middle" className="mb-0 border" hover responsive style={{ border: '1px solid #34495e' }}>
          <CTableHead>
            <CTableRow style={{ background: '#34495e' }}>
              <CTableHeaderCell>Type</CTableHeaderCell>
              <CTableHeaderCell>Status</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {Object.keys(equipmentInfo).map((category, catIndex) => (
              <React.Fragment key={category}>
                <CTableRow className="fw-bold" style={{ background: '#2c3e50', color: '#ecf0f1' }}>
                  <CTableDataCell colSpan="2">{category.toUpperCase()}</CTableDataCell>
                </CTableRow>
                {equipmentInfo[category].map((item, index) => (
                  <CTableRow key={index} style={{ background: '#34495e' }}>
                    <CTableDataCell>{item.type}</CTableDataCell>
                    <CTableDataCell>{item.status}</CTableDataCell>
                  </CTableRow>
                ))}
                {catIndex < Object.keys(equipmentInfo).length - 1 && (
                  <hr style={{ borderColor: '#34495e' }} />
                )}
              </React.Fragment>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  </CCol>
</CRow>

    </>
  );
};

export default S4dashboard;
