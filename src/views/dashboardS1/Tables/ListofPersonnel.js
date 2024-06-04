import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';
import { cilPeople } from '@coreui/icons';

const Dashboards1 = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false); // Added state for third modal
  const [showFourthModal, setshowFourthModal] = useState(false);
  const [formFilled, setFormFilled] = useState(false);
  const [ setSectorValue] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenSecondModal = () => {
    setShowSecondModal(true);
  };

  const handleCloseSecondModal = () => {
    setShowSecondModal(false);
  };

  const handleOpenThirdModal = () => {
    setShowThirdModal(true);
  };

  const handleCloseThirdModal = () => {
    setShowThirdModal(false);
  };

 

  const handleCloseFourthModal = () => {
    setshowFourthModal(false);
  };

  const handleFormChange = () => {
    setFormFilled(true); // Assuming all fields are filled for simplicity
  };

  const handleNextButtonClick = () => {
    handleCloseModal();
    handleOpenSecondModal();
  };

  const handleNextSecondButtonClick = () => { // Function to handle transition from second to third modal
    handleCloseSecondModal();
    handleOpenThirdModal();
  };
  const handleBlur = (event) => {
    const value = event.target.value.trim();
    setSectorValue(value);
    setShowWarning(value === '');
  };
  const handleOpenFourthModal = () => {
    handleCloseThirdModal(); // Close the third modal
    setshowFourthModal(true); // Open the fourth modal
  }
  
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">List Of Personnel</h5>
              <button className="btn btn-primary btn-sm" onClick={handleOpenModal}>
                <i className="fas fa-plus-circle"></i>
                Add New
              </button>
            </CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">S/No </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Rank</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">F Name</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">L Name</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary ">Unit</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">DOB</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Gender</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Action</CTableHeaderCell>
                  </CTableRow>
                  
                </CTableHead>
                
                <CTableBody>
                  {/* Table content goes here */}
                </CTableBody>
                
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      {/* First Modal for adding new item */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton className="bg-success text-light">
          <Modal.Title className="text-center w-100">Personal Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <form onChange={handleFormChange}>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="S/N0" required />
            </div>
            <div className="mb-3">
              <select className="form-control" defaultValue="" required>
                <option value="" disabled>-- Select Rank --</option>
                <option value="Private">Private</option>
                <option value="Corporal">Corporal</option>
                <option value="Sergeant">Sergeant</option>
                <option value="Lieutenant">Lieutenant</option>
                {/* Add more ranks as needed */}
              </select>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control" placeholder="First Name" required />
              </div>
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control" placeholder="Last Name" required />
              </div>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Unit" required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="DOB" required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Gender" required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Father Name" required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Mother Name" required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Religious" required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="POB" required />
            </div>
            <div className="mb-3">
              <select className="form-control" required>
                <option value="">-- Select Marital Status --</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="bg-light">
          <CButton color="secondary" onClick={handleCloseModal}>
            Close
          </CButton>
          {formFilled ? (
            <CButton color="primary" onClick={handleNextButtonClick}>
              Next
            </CButton>
          ) : (
            <CButton color="primary" onClick={handleCloseModal}>
              Save Changes
            </CButton>
          )}
        </Modal.Footer>
      </Modal>

     {/* Second Modal for Residence Area */}
     <Modal show={showSecondModal} onHide={handleCloseSecondModal}>
        <Modal.Header closeButton className="bg-primary text-light">
          <Modal.Title className="text-center w-100">Residence Address</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
        <form onChange={handleFormChange}>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="National ID" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Contact" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Province" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="District" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Sector" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Cell" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Village" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <CButton color="primary" onClick={handleOpenModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleNextSecondButtonClick}> {/* Button to transition to the third modal */}
            Next
          </CButton>
        </Modal.Footer>
      </Modal>

      {/* Third Modal for Next of Kin Address */}
      <Modal show={showThirdModal} onHide={handleCloseThirdModal}>
        <Modal.Header closeButton className="bg-info text-light">
          <Modal.Title className="text-center w-100">Next of Kin Address</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
        <form onChange={handleFormChange}>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="First Name" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Last Name" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Contact" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Province" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="District" />
            </div>
            <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Sector"
            onBlur={handleBlur}
          />
          {showWarning && <small style={{ color: 'red' }}>Please enter a sector</small>}
        </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Cell" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Village" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <CButton color="primary" onClick={handleOpenSecondModal}>
            Back
          </CButton>
          <CButton color="secondary" onClick={handleOpenFourthModal}>
            Next
          </CButton>
        </Modal.Footer>
      </Modal>

      {/* Medical Record */}
      {/* Fourth Modal for Medical Record */}
      <Modal show={showFourthModal} onHide={handleCloseFourthModal}>
        <Modal.Header closeButton className="bg-info text-light">
          <Modal.Title className="text-center w-100">Medical Record</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <form onChange={handleFormChange}>
            {/* Form fields for medical record */}
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="MMI Number" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Blood Group" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Height" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Weight" />
            </div>
            
            
          </form>
        </Modal.Body>
        <Modal.Header className="bg-info text-light">
          <Modal.Title className="text-center w-100">Military Record</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <form onChange={handleFormChange}>
            {/* Form fields for Military record */}
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="CSS Account No" />
            </div> 
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Date Of Entry" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Place Of Entry" />
            </div>
            
            </form>
        </Modal.Body>
        <Modal.Footer>
          <CButton color="primary" onClick={handleOpenThirdModal}>
            Back
          </CButton>
          <CButton color="secondary" onClick={handleCloseFourthModal}>
            Next
          </CButton>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Dashboards1;
