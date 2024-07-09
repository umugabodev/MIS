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

const Unitappointment = () => {
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
          brigadeCommander: { name: 'Brigadier General John Doe', rank: 'Brigadier General' },
          battalions: [
            {
              id: 1,
              battalionName: '1st Infantry Battalion',
              battalionCommander: { name: 'Colonel Jane Smith', rank: 'Colonel' },
              companies: [
                {
                  id: 1,
                  companyName: 'Alpha Company',
                  companyCommander: { name: 'Major Tom Brown', rank: 'Major' },
                  platoons: [
                    { id: 1, platoonName: 'Platoon 1A', platoonCommander: { name: 'Lieutenant Alice Green', rank: 'Lieutenant' } },
                    { id: 2, platoonName: 'Platoon 2A', platoonCommander: { name: 'Lieutenant Bob White', rank: 'Lieutenant' } },
                    { id: 3, platoonName: 'Platoon 3A', platoonCommander: { name: 'Lieutenant Carol Black', rank: 'Lieutenant' } }
                  ]
                },
                {
                  id: 2,
                  companyName: 'Bravo Company',
                  companyCommander: { name: 'Major Olivia Davis', rank: 'Major' },
                  platoons: [
                    { id: 4, platoonName: 'Platoon 1B', platoonCommander: { name: 'Lieutenant David Gray', rank: 'Lieutenant' } },
                    { id: 5, platoonName: 'Platoon 2B', platoonCommander: { name: 'Lieutenant Emily White', rank: 'Lieutenant' } },
                    { id: 6, platoonName: 'Platoon 3B', platoonCommander: { name: 'Lieutenant Fred Green', rank: 'Lieutenant' } }
                  ]
                },
                {
                  id: 3,
                  companyName: 'Charlie Company',
                  companyCommander: { name: 'Major Sam Lee', rank: 'Major' },
                  platoons: [
                    { id: 7, platoonName: 'Platoon 1C', platoonCommander: { name: 'Lieutenant Grace Black', rank: 'Lieutenant' } },
                    { id: 8, platoonName: 'Platoon 2C', platoonCommander: { name: 'Lieutenant Hannah Brown', rank: 'Lieutenant' } },
                    { id: 9, platoonName: 'Platoon 3C', platoonCommander: { name: 'Lieutenant Isaac White', rank: 'Lieutenant' } }
                  ]
                },
                // Additional companies can be added here if needed
              ]
            },
            
            // Other battalions omitted for brevity
          ]
        },
        // Other brigades omitted for brevity
      ]
    },
    // Other units omitted for brevity
  ];

  // State to keep track of the selected unit and hierarchy details
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedBrigade, setSelectedBrigade] = useState(null);
  const [selectedBattalion, setSelectedBattalion] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);

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

  // Handle unit selection from dropdown
  const handleUnitSelect = (unit) => {
    setSelectedUnit(unit);
    setSelectedBrigade(unit.brigades[0]); // Selecting the first brigade as an example
    setSelectedBattalion(unit.brigades[0]?.battalions[0]); // Selecting the first battalion as an example
    setSelectedCompany(unit.brigades[0]?.battalions[0]?.companies[0]); // Selecting the first company as an example
  };

  // Dropdown menu options based on unitsToDisplay
  const unitOptions = unitsToDisplay.map((unit) => ({
    label: unit.unitName,
    value: unit.id,
  }));

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
                onChange={(e) => handleUnitSelect(staticUnits.find(unit => unit.id === parseInt(e.target.value)))}
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

                {selectedBrigade && (
                  <CTable striped responsive className="mt-4">
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell>Brigade Name</CTableHeaderCell>
                        <CTableHeaderCell>Brigade Commander</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      <CTableRow>
                        <CTableHeaderCell>{selectedBrigade.brigadeName}</CTableHeaderCell>
                        <CTableDataCell>{selectedBrigade.brigadeCommander.rank} {selectedBrigade.brigadeCommander.name}</CTableDataCell>
                      </CTableRow>
                    </CTableBody>
                  </CTable>
                )}

                {selectedBattalion && (
                  <CTable striped responsive className="mt-4">
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell>Battalion Name</CTableHeaderCell>
                        <CTableHeaderCell>Battalion Commander</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      <CTableRow>
                        <CTableHeaderCell>{selectedBattalion.battalionName}</CTableHeaderCell>
                        <CTableDataCell>{selectedBattalion.battalionCommander.rank} {selectedBattalion.battalionCommander.name}</CTableDataCell>
                      </CTableRow>
                    </CTableBody>
                  </CTable>
                )}

                <h6 className="mt-4">Companies:</h6>
                <CTable striped responsive className="mt-3">
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell>Company Name</CTableHeaderCell>
                      <CTableHeaderCell>Company Commander</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {selectedBattalion.companies.map((company) => (
                      <CTableRow key={company.id}>
                        <CTableHeaderCell>{company.companyName}</CTableHeaderCell>
                        <CTableDataCell>{company.companyCommander.rank} {company.companyCommander.name}</CTableDataCell>
                        {selectedCompany && (
                  <>
                    <h6 className="mt-4">Platoons in {selectedCompany.companyName}:</h6>
                    <CTable striped responsive className="mt-3">
                      <CTableHead>
                        <CTableRow>
                          <CTableHeaderCell>Platoon Name</CTableHeaderCell>
                          <CTableHeaderCell>Platoon Commander</CTableHeaderCell>
                          <CTableHeaderCell>Rank</CTableHeaderCell>

                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        {selectedCompany.platoons.map((platoon) => (
                          <CTableRow key={platoon.id}>
                            <CTableHeaderCell>{platoon.platoonName}</CTableHeaderCell>
                            <CTableDataCell>{platoon.platoonCommander.name}</CTableDataCell>
                            <CTableDataCell>({platoon.platoonCommander.rank})</CTableDataCell>                            
                          </CTableRow>
                        ))}
                      </CTableBody>
                    </CTable>
                  </>
                )}
                      </CTableRow>
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

export default Unitappointment;
