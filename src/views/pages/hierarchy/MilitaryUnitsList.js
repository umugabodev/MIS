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

const MilitaryUnitsList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 1; // Number of units per page

  const [selectedUnit, setSelectedUnit] = useState(null);

  // Static data (for demonstration)
  const staticUnits = [
    {
      id: 1,
      unitName: '1st Infantry Division',
      address: 'Kami Military Barracks',
      brigades: [
        {
          id: 1,
          brigadeName: '402 Brigade',
          s1: 'Brigade S1',
          s2: 'Brigade S2',
          s3: 'Brigade S3',
          s4: 'Brigade S4',
          s6: 'Brigade S6',
          s9: 'Brigade S9',
          battalions: [
            {
              id: 1,
              battalionName: '1st Infantry Battalion',
              s1: 'Battalion S1',
              s2: 'Battalion S2',
              s3: 'Battalion S3',
              s4: 'Battalion S4',
              s6: 'Battalion S6',
              s9: 'Battalion S9',
              companies: [
                {
                  id: 1,
                  companyName: 'Alpha Company',
                  platoons: [
                    { id: 1, platoonName: 'Platoon 1' },
                    { id: 2, platoonName: 'Platoon 2' },
                    { id: 3, platoonName: 'Platoon 3' }
                  ]
                },
                {
                  id: 2,
                  companyName: 'Bravo Company',
                  platoons: [
                    { id: 1, platoonName: 'Platoon 1' },
                    { id: 2, platoonName: 'Platoon 2' },
                    { id: 3, platoonName: 'Platoon 3' }
                  ]
                },
                {
                  id: 3,
                  companyName: 'Charlie Company',
                  platoons: [
                    { id: 1, platoonName: 'Platoon 1' },
                    { id: 2, platoonName: 'Platoon 2' },
                    { id: 3, platoonName: 'Platoon 3' }
                  ]
                },
                {
                  id: 4,
                  companyName: 'Support Company',
                  platoons: [
                    { id: 4, platoonName: 'Assault Pioneer' },
                    { id: 5, platoonName: 'Anti Tank' },
                    { id: 6, platoonName: 'Anti Aircraft' },
                    { id: 7, platoonName: 'Mortar' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      unitName: '2nd Armored Division',
      address: 'Fort Knox',
      brigades: [
        {
          id: 2,
          brigadeName: '201 Armored Brigade',
          s1: 'Brigade S1',
          s2: 'Brigade S2',
          s3: 'Brigade S3',
          s4: 'Brigade S4',
          s6: 'Brigade S6',
          s9: 'Brigade S9',
          battalions: [
            {
              id: 2,
              battalionName: '2nd Armored Battalion',
              s1: 'Battalion S1',
              s2: 'Battalion S2',
              s3: 'Battalion S3',
              s4: 'Battalion S4',
              s6: 'Battalion S6',
              s9: 'Battalion S9',
              companies: [
                {
                  id: 5,
                  companyName: 'Echo Company',
                  platoons: [
                    { id: 8, platoonName: 'Platoon 1' },
                    { id: 9, platoonName: 'Platoon 2' },
                    { id: 10, platoonName: 'Platoon 3' }
                  ]
                },
                {
                  id: 6,
                  companyName: 'Foxtrot Company',
                  platoons: [
                    { id: 11, platoonName: 'Platoon 1' },
                    { id: 12, platoonName: 'Platoon 2' },
                    { id: 13, platoonName: 'Platoon 3' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  

  const unitsToDisplay = staticUnits;

  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const unitsOnPage = unitsToDisplay.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleUnitSelect = unit => {
    setSelectedUnit(unit);
  };

  const unitOptions = unitsToDisplay.map(unit => ({
    label: unit.unitName,
    value: unit.id
  }));
  

  const handleUpdate = id => {
    console.log(`Update unit with id ${id}`);
  };

  const handleDelete = id => {
    console.log(`Delete unit with id ${id}`);
  };

  return (
    <CRow>
      <CCol>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Unit Information List</h5>
            <Link to="/UnitRegistration" className="btn btn-primary btn-sm">
              <i className="fas fa-plus-circle"></i> Add New Unit
            </Link>
          </CCardHeader>
          <CCardBody>
            <div className="mb-3">
              <label htmlFor="unitSelect" className="form-label">Select Unit:</label>
              <select
                id="unitSelect"
                className="form-control"
                value={selectedUnit ? selectedUnit.id : ''}
                onChange={(e) => handleUnitSelect(unitsToDisplay.find(unit => unit.id === parseInt(e.target.value)))}
              >
                <option value="">Select a unit...</option>
                {unitOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {selectedUnit && (
              <div>
                <h5>{selectedUnit.unitName}</h5>
                <p><strong>Address:</strong> {selectedUnit.address}</p>

                <CTable striped responsive>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell>Brigade Name</CTableHeaderCell>
                      <CTableHeaderCell>S1</CTableHeaderCell>
                      <CTableHeaderCell>S2</CTableHeaderCell>
                      <CTableHeaderCell>S3</CTableHeaderCell>
                      <CTableHeaderCell>S4</CTableHeaderCell>
                      <CTableHeaderCell>S6</CTableHeaderCell>
                      <CTableHeaderCell>S9</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {selectedUnit.brigades.map(brigade => (
                      <CTableRow key={brigade.id}>
                        <CTableHeaderCell>{brigade.brigadeName}</CTableHeaderCell>
                        <CTableDataCell>{brigade.s1}</CTableDataCell>
                        <CTableDataCell>{brigade.s2}</CTableDataCell>
                        <CTableDataCell>{brigade.s3}</CTableDataCell>
                        <CTableDataCell>{brigade.s4}</CTableDataCell>
                        <CTableDataCell>{brigade.s6}</CTableDataCell>
                        <CTableDataCell>{brigade.s9}</CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>

                <CTable striped responsive>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell>Battalion Name</CTableHeaderCell>
                      <CTableHeaderCell>S1</CTableHeaderCell>
                      <CTableHeaderCell>S2</CTableHeaderCell>
                      <CTableHeaderCell>S3</CTableHeaderCell>
                      <CTableHeaderCell>S4</CTableHeaderCell>
                      <CTableHeaderCell>S6</CTableHeaderCell>
                      <CTableHeaderCell>S9</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {selectedUnit.brigades.flatMap(brigade => brigade.battalions).map(battalion => (
                      <CTableRow key={battalion.id}>
                        <CTableHeaderCell>{battalion.battalionName}</CTableHeaderCell>
                        <CTableDataCell>{battalion.s1}</CTableDataCell>
                        <CTableDataCell>{battalion.s2}</CTableDataCell>
                        <CTableDataCell>{battalion.s3}</CTableDataCell>
                        <CTableDataCell>{battalion.s4}</CTableDataCell>
                        <CTableDataCell>{battalion.s6}</CTableDataCell>
                        <CTableDataCell>{battalion.s9}</CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>

                <CTable striped responsive>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell>Company Name</CTableHeaderCell>
                      <CTableHeaderCell>Platoons</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {selectedUnit.brigades.flatMap(brigade => brigade.battalions).flatMap(battalion => battalion.companies).map(company => (
                      <CTableRow key={company.id}>
                        <CTableHeaderCell>{company.companyName}</CTableHeaderCell>
                        <CTableDataCell>
                          <CTable striped responsive>
                            <CTableBody>
                              {company.platoons.map(platoon => (
                                <CTableRow key={platoon.id}>
                                  <CTableHeaderCell>{platoon.platoonName}</CTableHeaderCell>
                                </CTableRow>
                              ))}
                            </CTableBody>
                          </CTable>
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </div>
            )}

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

export default MilitaryUnitsList;
