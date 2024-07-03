import React, { useState } from 'react';
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

  // State to keep track of the current page/index of units
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 1; // Number of units per page

  // Calculate the range of units to display on the current page
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const unitsOnPage = unitsToDisplay.slice(startIndex, endIndex);

  // Next and Previous page navigation handlers
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

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
                  <CTableHeaderCell>Brigades     and their  .Battalions</CTableHeaderCell> 
                  <CTableHeaderCell>Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {unitsOnPage.map((unit) => (
                  <CTableRow key={unit.id}>
                    <CTableDataCell>{unit.unitName}</CTableDataCell>
                    <CTableDataCell>{unit.address}</CTableDataCell>
                    <CTableDataCell>{unit.description}</CTableDataCell>
                    <CTableDataCell>
                      <CTable striped responsive>
                        <CTableBody>
                          {unit.brigades.map((brigade, brigadeIndex) => (
                            <CTableRow key={brigade.id}>
                              <CTableHeaderCell>{brigade.brigadeName}</CTableHeaderCell>
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
                    <CTableDataCell>
                      <CButton color="info" size="sm" onClick={() => handleUpdate(unit.id)}>
                        Update
                      </CButton>
                      <CButton color="danger" size="sm" className="ml-1" onClick={() => handleDelete(unit.id)}>
                        Delete
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
            <div className="d-flex justify-content-between mt-3">
              <CButton
                color="primary"
                size="sm"
                disabled={currentPage === 0}
                onClick={goToPreviousPage}
              >
                Previous
              </CButton>
              <CButton
                color="primary"
                size="sm"
                disabled={unitsToDisplay.length <= endIndex}
                onClick={goToNextPage}
              >
                Next
              </CButton>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default UnitInfoList;
