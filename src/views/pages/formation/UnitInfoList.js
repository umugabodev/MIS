import React from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from '@coreui/react';
import { Link } from 'react-router-dom';

const UnitInfoList = ({ units }) => {
  // Static data for units, brigades, and battalions
  const staticUnits = [
    {
      id: 1,
      unitName: 'Arty DIV',
      address: 'Kami Barracks',
      description: 'Heavy weapon',
      brigades: [
        {
          id: 1,
          brigadeName: '431 Heavy Arty Brigade',
          battalions: [
            { id: 1, battalionName: '43 Heavy Arty Regiment' },
            { id: 2, battalionName: '44 Heavy Arty Regiment' }
          ]
        },
        {
          id: 2,
          brigadeName: 'Alpha Brigade 2',
          battalions: [
            { id: 3, battalionName: 'Alpha Battalion 3' },
            { id: 4, battalionName: 'Alpha Battalion 4' }
          ]
        }
      ]
    },
    {
      id: 2,
      unitName: 'Beta Unit',
      address: '456 Beta Street',
      description: 'Second unit description',
      brigades: [
        {
          id: 3,
          brigadeName: 'Beta Brigade 1',
          battalions: [
            { id: 5, battalionName: 'Beta Battalion 1' },
            { id: 6, battalionName: 'Beta Battalion 2' }
          ]
        }
      ]
    }
    // Add more units as needed
  ];

  // Use staticUnits if units prop is not provided or is empty
  const unitsToDisplay = units && units.length > 0 ? units : staticUnits;

  // Example functions for handling update and delete actions
  const handleUpdate = (id) => {
    console.log(`Update unit with id ${id}`);
    // Implement update logic here
  };

  const handleDelete = (id) => {
    console.log(`Delete unit with id ${id}`);
    // Implement delete logic here
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Unit Information List</h5>
            <Link to="/UnitRegistration" className="btn btn-primary btn-sm">
              <i className="fas fa-plus-circle"></i> Add New Unit
            </Link>
          </CCardHeader>
          <CCardBody>
            <CTable striped responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Unit Name</CTableHeaderCell>
                  <CTableHeaderCell>Address</CTableHeaderCell>
                  <CTableHeaderCell>Description</CTableHeaderCell>
                  <CTableHeaderCell>
                    {/* <div style={{ textAlign: 'center' }}>Brigades</div> */}
                    <CTable striped responsive>
                      <CTableHead>
                        <CTableRow>
                          <CTableHeaderCell style={{ textAlign: 'center' }}>Brigade</CTableHeaderCell>
                          <CTableHeaderCell style={{ textAlign: 'center' }}>Battalions</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                    </CTable>
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {unitsToDisplay.map((unit) => (
                  <CTableRow key={unit.id}>
                    <CTableDataCell>{unit.unitName}</CTableDataCell>
                    <CTableDataCell>{unit.address}</CTableDataCell>
                    <CTableDataCell>{unit.description}</CTableDataCell>
                    <CTableDataCell>
                      <CTable striped responsive>
                        <CTableBody>
                          {unit.brigades.map((brigade, brigadeIndex) => (
                            <CTableRow key={brigade.id}>
                              <CTableHeaderCell style={{ textAlign: 'center' }}>{brigade.brigadeName}</CTableHeaderCell>
                              <CTableDataCell>
                                <ul>
                                  {brigade.battalions.map((battalion) => (
                                    <li key={battalion.id}>{battalion.battalionName}</li>
                                  ))}
                                </ul>
                              </CTableDataCell>
                            </CTableRow>
                          ))}
                        </CTableBody>
                      </CTable>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default UnitInfoList;
