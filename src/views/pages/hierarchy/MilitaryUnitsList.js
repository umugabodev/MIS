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

const UnitInfoList = () => {
  // Static data for units, brigades, battalions, companies, and platoons
  const staticUnits = [
    {
      id: 1,
      unitName: '1st Infantry Division',
      address: 'Kami Military Barracks',
    //   description: 'Primary infantry division',
      brigades: [
        {
          id: 1,
          brigadeName: '402 Brigade',
          battalions: [
            {
              id: 1,
              battalionName: '1st Infantry Battalion',
              companies: [
                {
                  id: 1,
                  companyName: 'Alpha Company',
                  platoons: [
                    { id: 1, platoonName: 'Platton 1' },
                    { id: 2, platoonName: 'Platton 2' },
                    { id: 3, platoonName: 'Platton 3' }
                  ]
                },
                {
                  id: 2,
                  companyName: 'Bravo Company',
                  platoons: [
                    { id: 4, platoonName: 'Platton 1' },
                    { id: 5, platoonName: 'Platton 2' },
                    { id: 6, platoonName: 'Platton 3' }
                  ]
                },
                {
                  id: 3,
                  companyName: 'Charlie Company',
                  platoons: [
                    { id: 7, platoonName: 'Platton 1' },
                    { id: 8, platoonName: 'Platton 2' },
                    { id: 9, platoonName: 'Platton 3' }
                  ]
                },
                {
                    id: 16,
                    companyName: 'Support Company',
                    platoons: [
                      { id: 93, platoonName: 'Assault Pioneer' },
                      { id: 92, platoonName: 'Motar' },
                      { id: 91, platoonName: 'Anti Air craft' },
                      { id: 90, platoonName: 'Anti Tank' }

                    ]
                  }
              ]
            },
            {
              id: 2,
              battalionName: '2nd Infantry Battalion',
              companies: [
                {
                  id: 4,
                  companyName: 'Alpha Company',
                  platoons: [
                    { id: 10, platoonName: 'Platton 1' },
                    { id: 11, platoonName: 'Platton 2' },
                    { id: 12, platoonName: 'Platton 3' }
                  ]
                },
                {
                  id: 5,
                  companyName: 'Bravo Company',
                  platoons: [
                    { id: 13, platoonName: 'Platton 1' },
                    { id: 14, platoonName: 'Platton 2' },
                    { id: 15, platoonName: 'Platton 3' }
                  ]
                },
                {
                  id: 6,
                  companyName: 'Charlie Company',
                  platoons: [
                    { id: 16, platoonName: 'Platton 1' },
                    { id: 17, platoonName: 'Platton 2' },
                    { id: 18, platoonName: 'Platton 3' }
                  ]
                },
                {
                    id: 16,
                    companyName: 'Support Company',
                    platoons: [
                        { id: 93, platoonName: 'Assault Pioneer' },
                        { id: 92, platoonName: 'Motar' },
                        { id: 91, platoonName: 'Anti Air craft' },
                        { id: 90, platoonName: 'Anti Tank' }
                    ]
                  }
              ]
            },
        
          ]
        },
        {
          id: 2,
          brigadeName: '411  Brigade',
          battalions: [
            {
              id: 4,
              battalionName: '67 Battalion',
              companies: [
                {
                  id: 10,
                  companyName: 'Alpha Company',
                  platoons: [
                    { id: 28, platoonName: 'Platton 1' },
                    { id: 29, platoonName: 'Platton 2' },
                    { id: 30, platoonName: 'Platton 3' }
                  ]
                },
                {
                  id: 11,
                  companyName: 'Bravo Company',
                  platoons: [
                    { id: 31, platoonName: 'Platton 1' },
                    { id: 32, platoonName: 'Platton 2' },
                    { id: 33, platoonName: 'Platton 3' }
                  ]
                },
                {
                  id: 12,
                  companyName: 'Charlie Company',
                  platoons: [
                    { id: 34, platoonName: 'Platton 1' },
                    { id: 35, platoonName: 'Platton 2' },
                    { id: 36, platoonName: 'Platton 3' }
                  ]
                },
                {
                    id: 16,
                    companyName: 'Support Company',
                    platoons: [
                        { id: 93, platoonName: 'Assault Pioneer' },
                        { id: 92, platoonName: 'Motar' },
                        { id: 91, platoonName: 'Anti Air craft' },
                        { id: 90, platoonName: 'Anti Tank' }
                    ]
                  }
              ]
            },
            {
              id: 5,
              battalionName: '47 Battalion',
              companies: [
                {
                  id: 13,
                  companyName: 'Alpha Company',
                  platoons: [
                    { id: 37, platoonName: 'Platton 1' },
                    { id: 38, platoonName: 'Platton 2' },
                    { id: 39, platoonName: 'Platton 3' }
                  ]
                },
                {
                  id: 14,
                  companyName: 'Bravo Company',
                  platoons: [
                    { id: 40, platoonName: 'Platton 1' },
                    { id: 41, platoonName: 'Platton 2' },
                    { id: 42, platoonName: 'Platton 3' }
                  ]
                },
                {
                    id: 15,
                    companyName: 'Charlie Company',
                    platoons: [
                      { id: 40, platoonName: 'Platton 1' },
                      { id: 41, platoonName: 'Platton 2' },
                      { id: 42, platoonName: 'Platton 3' }
                    ]
                  },
                {
                  id: 16,
                  companyName: 'Support Company',
                  platoons: [
                    { id: 93, platoonName: 'Assault Pioneer' },
                    { id: 92, platoonName: 'Motar' },
                    { id: 91, platoonName: 'Anti Air craft' },
                    { id: 90, platoonName: 'Anti Tank' }
                  ]
                }
              ]
            },
   
          ]
        }
      ]
    }
  ];

  // State to keep track of the current page/index of units
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 1; // Number of units per page

  // Use staticUnits for demonstration (you can replace with API call or props)
  const unitsToDisplay = staticUnits;

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
                  {/* <CTableHeaderCell>Description</CTableHeaderCell> */}
                  <CTableHeaderCell>Brigades and Subunits</CTableHeaderCell>
                  <CTableHeaderCell>Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {unitsOnPage.map((unit) => (
                  <React.Fragment key={unit.id}>
                    <CTableRow>
                      <CTableDataCell>{unit.unitName}</CTableDataCell>
                      <CTableDataCell>{unit.address}</CTableDataCell>
                      {/* <CTableDataCell>{unit.description}</CTableDataCell> */}
                      <CTableDataCell>
                        <CTable striped responsive>
                          <CTableBody>
                            {unit.brigades.map((brigade) => (
                              <React.Fragment key={brigade.id}>
                                <CTableRow>
                                  <CTableHeaderCell>{brigade.brigadeName}</CTableHeaderCell>
                                  <CTableDataCell>
                                    <CTable striped responsive>
                                      <CTableBody>
                                        {brigade.battalions.map((battalion) => (
                                          <React.Fragment key={battalion.id}>
                                            <CTableRow>
                                              <CTableHeaderCell>{battalion.battalionName}</CTableHeaderCell>
                                              <CTableDataCell>
                                                <CTable striped responsive>
                                                  <CTableBody>
                                                    {battalion.companies.map((company) => (
                                                      <React.Fragment key={company.id}>
                                                        <CTableRow>
                                                          <CTableHeaderCell>{company.companyName}</CTableHeaderCell>
                                                          <CTableDataCell>
                                                            <CTable striped responsive>
                                                              <CTableBody>
                                                                {company.platoons.map((platoon) => (
                                                                  <CTableRow key={platoon.id}>
                                                                    <CTableHeaderCell>{platoon.platoonName}</CTableHeaderCell>
                                                                  </CTableRow>
                                                                ))}
                                                              </CTableBody>
                                                            </CTable>
                                                          </CTableDataCell>
                                                        </CTableRow>
                                                      </React.Fragment>
                                                    ))}
                                                  </CTableBody>
                                                </CTable>
                                              </CTableDataCell>
                                            </CTableRow>
                                          </React.Fragment>
                                        ))}
                                      </CTableBody>
                                    </CTable>
                                  </CTableDataCell>
                                </CTableRow>
                              </React.Fragment>
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
                  </React.Fragment>
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
