import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter
} from '@coreui/react';
import UnitList from './UnitList'; // Import UnitList component

const UnitRegistration = () => {
  const [units, setUnits] = useState([
    {
      id: 1,
      unitName: '',
      address: '',
      description: '',
      brigades: [
        { id: 1, brigadeName: '', battalions: [{ id: 1, battalionName: '' }] }
      ]
    }
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddUnit = () => {
    setUnits([
      ...units,
      {
        id: units.length + 1,
        unitName: '',
        address: '',
        description: '',
        brigades: [{ id: 1, brigadeName: '', battalions: [{ id: 1, battalionName: '' }] }]
      }
    ]);
  };

  const handleUnitNameChange = (e, unitIndex) => {
    const updatedUnits = [...units];
    updatedUnits[unitIndex].unitName = e.target.value;
    setUnits(updatedUnits);
  };

  const handleAddressChange = (e, unitIndex) => {
    const updatedUnits = [...units];
    updatedUnits[unitIndex].address = e.target.value;
    setUnits(updatedUnits);
  };

  const handleDescriptionChange = (e, unitIndex) => {
    const updatedUnits = [...units];
    updatedUnits[unitIndex].description = e.target.value;
    setUnits(updatedUnits);
  };

  const handleAddBrigade = (unitIndex) => {
    const updatedUnits = [...units];
    const brigades = updatedUnits[unitIndex].brigades;
    const newBrigadeId = brigades.length > 0 ? brigades[brigades.length - 1].id + 1 : 1;
    updatedUnits[unitIndex].brigades.push({
      id: newBrigadeId,
      brigadeName: '',
      battalions: [{ id: 1, battalionName: '' }]
    });
    setUnits(updatedUnits);
  };

  const handleBrigadeNameChange = (e, unitIndex, brigadeIndex) => {
    const updatedUnits = [...units];
    updatedUnits[unitIndex].brigades[brigadeIndex].brigadeName = e.target.value;
    setUnits(updatedUnits);
  };

  const handleAddBattalion = (unitIndex, brigadeIndex) => {
    const updatedUnits = [...units];
    const battalions =
      updatedUnits[unitIndex].brigades[brigadeIndex].battalions;
    const newBattalionId =
      battalions.length > 0 ? battalions[battalions.length - 1].id + 1 : 1;
    updatedUnits[unitIndex].brigades[brigadeIndex].battalions.push({
      id: newBattalionId,
      battalionName: ''
    });
    setUnits(updatedUnits);
  };

  const handleBattalionNameChange = (
    e,
    unitIndex,
    brigadeIndex,
    battalionIndex
  ) => {
    const updatedUnits = [...units];
    updatedUnits[unitIndex].brigades[brigadeIndex].battalions[
      battalionIndex
    ].battalionName = e.target.value;
    setUnits(updatedUnits);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can perform any submission logic (e.g., sending data to server)
    // For demonstration, we'll just log the units data to console
    console.log('Submitted Units:', units);

    // Show modal or any other feedback on successful submission
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <CCard className="shadow mb-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <CCardHeader className="bg-primary text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Unit Registration Form</h5>
        </CCardHeader>
        <CCardBody className="p-4">
          <form onSubmit={handleSubmit}>
            {units.map((unit, unitIndex) => (
              <div key={unit.id} className="mb-4 border p-3 rounded">
                <h2 className="mb-2">Unit Details</h2>
                <div className="form-group">
                  <label htmlFor={`unitName-${unit.id}`}>Unit Name:</label>
                  <input
                    type="text"
                    id={`unitName-${unit.id}`}
                    className="form-control"
                    value={unit.unitName}
                    onChange={(e) => handleUnitNameChange(e, unitIndex)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`address-${unit.id}`}>Address:</label>
                  <input
                    type="text"
                    id={`address-${unit.id}`}
                    className="form-control"
                    value={unit.address}
                    onChange={(e) => handleAddressChange(e, unitIndex)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor={`description-${unit.id}`}>Description:</label>
                  <textarea
                    id={`description-${unit.id}`}
                    className="form-control"
                    value={unit.description}
                    onChange={(e) => handleDescriptionChange(e, unitIndex)}
                    rows={4}
                  />
                </div>

                {unit.brigades.map((brigade, brigadeIndex) => (
                  <div key={brigade.id} className="mb-3 border p-3 rounded">
                    <h4>Brigades under: {unit.unitName} Div</h4>
                    <div className="form-group">
                      <label>Brigade Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={brigade.brigadeName}
                        onChange={(e) =>
                          handleBrigadeNameChange(e, unitIndex, brigadeIndex)
                        }
                      />
                    </div>
                    <ul className="list-unstyled">
                      {brigade.battalions.map(
                        (battalion, battalionIndex) => (
                          <li
                            key={battalion.id}
                            className="mb-1"
                          >
                            <h4>Battalion under: {brigade.brigadeName} Bde</h4>
                            <label>Battalion Name:</label>
                            <input
                              type="text"
                              className="form-control"
                              value={battalion.battalionName}
                              onChange={(e) =>
                                handleBattalionNameChange(
                                  e,
                                  unitIndex,
                                  brigadeIndex,
                                  battalionIndex
                                )
                              }
                            />
                          </li>
                        )
                      )}
                    </ul>
                    <CButton
                      color="primary"
                      onClick={() =>
                        handleAddBattalion(unitIndex, brigadeIndex)
                      }
                    >
                      Add Battalion
                    </CButton>
                  </div>
                ))}
                <CButton
                  color="primary"
                  onClick={() => handleAddBrigade(unitIndex)}
                >
                  Add Brigade
                </CButton>
              </div>
            ))}
            <CButton type="submit" color="primary">
              Submit
            </CButton>
          </form>
        </CCardBody>
      </CCard>

      {/* Modal for showing submission success */}
      <CModal show={modalVisible} onClose={closeModal}>
        <CModalHeader closeButton>Submission Successful</CModalHeader>
        <CModalBody>
          Your unit registration form has been successfully submitted.
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={closeModal}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default UnitRegistration;
