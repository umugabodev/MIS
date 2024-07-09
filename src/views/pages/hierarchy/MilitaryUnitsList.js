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
  // Static data for units, brigades, battalions, companies, and platoons
  const staticUnits = [
    {
      id: 1,
      unitName: '1st Infantry Division',
      address: 'Kami Military Barracks',
      brigades: [
        {
          id: 1,
          brigadeName: '402 Brigade',
          s1: '402 Bde S1',
          s2: '402 Bde S2',
          s3: '402 Bde S3',
          s4: '402 Bde S4',
          s6: '402 Bde S6',
          s9: '402 Bde S9',
          battalions: [
            {
              id: 1,
              battalionName: '1st Infantry Battalion',
              s1: '1st Inf Bn S1',
              s2: '1st Inf Bn S2',
              s3: '1st Inf BnS3',
              s4: '21st Inf Bn S4',
              s6: '1st Inf Bn S6',
              s9: '21st Inf Bn S9',
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
                    { id: 1, platoonName: 'Asault Pioneer' },
                    { id: 2, platoonName: 'Anti Tank' },
                    { id: 3, platoonName: 'Anti Aircraft' },
                    { id: 4, platoonName: 'Motar' }
                  ]
                },
                // Other companies omitted for brevity
              ]
            },
            // Other battalions omitted for brevity
          ]
        },
        // Other brigades omitted for brevity
      ]
    },
    {
      id: 2,
      unitName: 'Artillery Division',
      address: 'Gabiro Military Barracks',
      brigades: [
        {
          id: 1,
          brigadeName: '231 Heavy gun Brigade',
          s1: '231 Bde S1',
          s2: '231 Bde S2',
          s3: '231 Bde S3',
          s4: '231 Bde S4',
          s6: '231 Bde S6',
          s9: '231 Bde S9',
          battalions: [
            {
              id: 1,
              battalionName: '23 Heavy  Battalion',
              s1: '23 Heavy Bn S1',
              s2: '23 Heavy Bn S2',
              s3: '23 Heavy BnS3',
              s4: '23 Heavy Bn S4',
              s6: '23 Heavy Bn S6',
              s9: '23 Heavy Bn S9',
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
                    { id: 1, platoonName: 'Asault Pioneer' },
                    { id: 2, platoonName: 'Anti Tank' },
                    { id: 3, platoonName: 'Anti Aircraft' },
                    { id: 4, platoonName: 'Motar' }
                  ]
                },
              ]
            },
            // Other battalions omitted for brevity
          ]
        },
        // Other brigades omitted for brevity
      ]
    }
  ];
  

  // State to keep track of the current page/index of units
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 1; // Number of units per page

  // State for selected unit
  const [selectedUnit, setSelectedUnit] = useState(null);

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

  // Handle unit selection from dropdown
  const handleUnitSelect = (unit) => {
    setSelectedUnit(unit);
  };

  // Dropdown menu options based on unitsToDisplay
  const unitOptions = unitsToDisplay.map((unit) => ({
    label: unit.unitName,
    value: unit.id,
  }));

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
            <div className="mb-3">
              <label htmlFor="unitSelect" className="form-label">Select Unit:</label>
              <select
                id="unitSelect"
                className="form-control"
                value={selectedUnit ? selectedUnit.id : ''}
                onChange={(e) => handleUnitSelect(unitsToDisplay.find(unit => unit.id === parseInt(e.target.value)))}
              >
                <option value="">Select a unit...</option>
                {unitOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {selectedUnit && (
              <>
                <h5>{selectedUnit.unitName}</h5>
                <p>Address: {selectedUnit.address}</p>
                <CTable striped responsive>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell>Brigade Name</CTableHeaderCell>
                      <CTableHeaderCell>Battalions</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {selectedUnit.brigades.map((brigade) => (
                      <React.Fragment key={brigade.id}>
                        <CTableRow>
                          <CTableHeaderCell>
                            {brigade.brigadeName}
                            <ul>
                                <li>{brigade.s1}</li>
                                <li>{brigade.s2}</li>
                                <li>{brigade.s3}</li>
                                <li>{brigade.s4}</li>
                                <li>{brigade.s6}</li>
                                <li>{brigade.s9}</li>

                            </ul>
                          </CTableHeaderCell>
                          <CTableDataCell>
                            <CTable striped responsive>
                              <CTableBody>
                                {brigade.battalions.map((battalion) => (
                                  <React.Fragment key={battalion.id}>
                                    <CTableRow>
                                      <CTableHeaderCell>
                                        {battalion.battalionName}
                                      <ul>
                                        <li>{battalion.s1}</li>
                                        <li>{battalion.s2}</li>
                                        <li>{battalion.s3}</li>
                                        <li>{battalion.s4}</li>
                                        <li>{battalion.s6}</li>
                                        <li>{battalion.s9}</li>
                                        </ul>
                                      </CTableHeaderCell>
                                      <CTableDataCell>
                                     <CTableHeaderCell>Companies</CTableHeaderCell>

                                        <CTable striped responsive>
                                          <CTableBody>
                                            {battalion.companies.map((company) => (
                                              <React.Fragment key={company.id}>
                                                <CTableRow>
                                                  <CTableHeaderCell>{company.companyName}</CTableHeaderCell>
                                                  <CTableDataCell>
                                                    <CTableHeaderCell>Platoons</CTableHeaderCell>

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
              </>
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
