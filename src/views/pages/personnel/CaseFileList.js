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
import { Link } from 'react-router-dom';

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
  };
  // Define initial data state
  const [data, setData] = useState([
    {pc: "", sNo: 1, rank: 'Pte', fName: 'Angelique', lName: 'MUKAMUSONI', unit: 'UDC', dob: 'Insubordination', gender: 'PDF File', action: 'Edit' },
    // { sNo: 2, rank: '', fName: '', lName: '', unit: '', dob: '', gender: '', action: 'Delete' }
  ]);

  // Function to handle editing of a row
  const handleEdit = (index) => {
    // Implement your edit logic here
    console.log(`Edit row ${index}`);
  };

  // Function to handle deleting of a row
  const handleDelete = (index) => {
    // Implement your delete logic here
    console.log(`Delete row ${index}`);
  };
  
  return (
    <>
      <CRow>
        <CCol xs>
        <CCard className="mb-4">
  <CCardHeader className="d-flex justify-content-between align-items-center">
    <h5 className="mb-0">List Of Cases</h5>
    <Link to="/addPersonnel" className="btn btn-primary btn-sm">
      <i className="fas fa-plus-circle"></i>
      Add New Case
    </Link>
  </CCardHeader>
  <CCardBody>
    <table className="table table-bordered table-hover">
    <thead className="bg-body-secondary">

        <tr>
          <th className="text-center"><CIcon icon={cilPeople} /></th>
          <th>S/No</th>
          <th>Rank</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Attachment</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.pic}</td>
            <td className="text-center">{row.sNo}</td>
            <td>{row.rank}</td>
            <td>{row.fName}</td>
            <td>{row.lName}</td>
            <td>{row.unit}</td>
            <td>{row.dob}</td>
            <td>{row.gender}</td>
            <td>
              <CButton onClick={() => handleEdit(index)} color="info" size="sm">Update</CButton>
              <CButton onClick={() => handleDelete(index)} color="danger" size="sm">Delete</CButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
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
