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
  const [showThirdModal, setShowThirdModal] = useState(false); 
  const [showFourthModal, setShowFourthModal] = useState(false);
  const [formFilled, setFormFilled] = useState(false);
  const [sectorValue, setSectorValue] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [filterText, setFilterText] = useState('');

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenSecondModal = () => setShowSecondModal(true);
  const handleCloseSecondModal = () => setShowSecondModal(false);
  const handleOpenThirdModal = () => setShowThirdModal(true);
  const handleCloseThirdModal = () => setShowThirdModal(false);
  const handleCloseFourthModal = () => setShowFourthModal(false);
  const handleFormChange = () => setFormFilled(true);
  const handleNextButtonClick = () => { handleCloseModal(); handleOpenSecondModal(); };
  const handleNextSecondButtonClick = () => { handleCloseSecondModal(); handleOpenThirdModal(); };
  const handleBlur = (event) => {
    const value = event.target.value.trim();
    setSectorValue(value);
    setShowWarning(value === '');
  };
  const handleOpenFourthModal = () => { handleCloseThirdModal(); setShowFourthModal(true); };
  const handleFilterChange = (event) => setFilterText(event.target.value);

  const [data, setData] = useState([
    { ServiceNo: 8080, rank: 'Pte', fName: 'Angelique', lName: 'MUKAMUSONI', unit: 'UDC', dob: 'Insubordination', gender: 'PDF File', action: 'Edit' },
    // More data here...
  ]);

  const handleEdit = (index) => console.log(`Edit row ${index}`);
  const handleDelete = (index) => console.log(`Delete row ${index}`);

  const filteredData = data.filter((row) =>
    row.fName.toLowerCase().includes(filterText.toLowerCase()) ||
    row.lName.toLowerCase().includes(filterText.toLowerCase()) ||
    row.unit.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">List Of Cases</h5>
              <Link to="/AddCase" className="btn btn-primary btn-sm">
                <i className="fas fa-plus-circle"></i>
                Add New Case
              </Link>
            </CCardHeader>
            <CCardBody>
              <div className="d-flex mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Filter by Name or Unit"
                  value={filterText}
                  onChange={handleFilterChange}
                />
              </div>
              <table className="table table-bordered table-hover">
                <thead className="bg-body-secondary">
                  <tr>
                    <th>ServiceNo</th>
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
                  {filteredData.map((row, index) => (
                    <tr key={index}>
                      <td className="text-center">{row.ServiceNo}</td>
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
      
      {/* Modals here... */}
      {/* First Modal for adding new item */}
      <Modal show={showModal} onHide={handleCloseModal}>
        {/* Modal Content */}
      </Modal>
      {/* Second Modal for Residence Area */}
      <Modal show={showSecondModal} onHide={handleCloseSecondModal}>
        {/* Modal Content */}
      </Modal>
      {/* Third Modal for Next of Kin Address */}
      <Modal show={showThirdModal} onHide={handleCloseThirdModal}>
        {/* Modal Content */}
      </Modal>
      {/* Fourth Modal for Medical Record */}
      <Modal show={showFourthModal} onHide={handleCloseFourthModal}>
        {/* Modal Content */}
      </Modal>
    </>
  );
};

export default Dashboards1;
