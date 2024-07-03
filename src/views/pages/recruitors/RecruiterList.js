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
  CTableDataCell,
} from '@coreui/react';
import { Link } from 'react-router-dom';

const Dashboards1 = () => {
  const [recruiters, setRecruiters] = useState([
    {
      name: 'Liliane MUKAMUCYO',
      email: 'mukamucyo.lily@gmail.com',
      phone: '079 000 7921',
      companyName: 'ABC Inc.',
      educationLevel: "Bachelor's Degree",
      employmentStatus: 'Yes',
      yearsOfExperience: '2',
      currentStatus: 'Civilian',
      serviceNumber: '-',
      rank: '-',
      unit: '-',
      processStatus: 'pending',
    },
    {
      name: 'Theogene BONANE',
      email: 'bonane.theo@gmail.com',
      phone: '0781 898 898',
      companyName: 'XYZ Corp.',
      educationLevel: "Diploma Degree",
      employmentStatus: 'No',
      yearsOfExperience: '-',
      currentStatus: 'Inservice',
      serviceNumber: '90192-',
      rank: 'Pte',
      unit: 'Artillery',
      processStatus: 'oncourse',
    },
    // Add more recruiter objects as needed
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRecruiter, setSelectedRecruiter] = useState(null);
  const [filterStatus, setFilterStatus] = useState('');

  const handleViewMore = (recruiter) => {
    setSelectedRecruiter(recruiter);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedRecruiter(null);
  };

  const handleFilter = (status) => {
    setFilterStatus(status);
  };

  const filteredRecruiters = filterStatus
    ? recruiters.filter((recruiter) => recruiter.processStatus === filterStatus)
    : recruiters;

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">List Of Recruiters</h5>
              <div>
                <select
                  className="form-control"
                  onChange={(e) => handleFilter(e.target.value)}
                >
                  <option value="">Filter by Process Status</option>
                  <option value="pending">Pending</option>
                  <option value="oncourse">On Course</option>
                  {/* Add more options as needed */}
                </select></div><div>
                <Link to="/RecruiterForm" className="btn btn-primary btn-sm ml-2">
                  <i className="fas fa-plus-circle"></i> Add New Recruiter
                </Link>
              </div>
            </CCardHeader>
            <CCardBody>
              <CTable hover>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell>Email</CTableHeaderCell>
                    <CTableHeaderCell>Phone</CTableHeaderCell>
                    <CTableHeaderCell>Education Level</CTableHeaderCell>
                    <CTableHeaderCell>Actions</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {filteredRecruiters.map((recruiter, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{recruiter.name}</CTableDataCell>
                      <CTableDataCell>{recruiter.email}</CTableDataCell>
                      <CTableDataCell>{recruiter.phone}</CTableDataCell>
                      <CTableDataCell>{recruiter.educationLevel}</CTableDataCell>
                      <CTableDataCell>
                        <CButton
                          color="info"
                          size="sm"
                          onClick={() => handleViewMore(recruiter)}
                        >
                          View More
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      {selectedRecruiter && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Recruiter Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Name:</strong> {selectedRecruiter.name}</p>
            <p><strong>Email:</strong> {selectedRecruiter.email}</p>
            <p><strong>Phone:</strong> {selectedRecruiter.phone}</p>
            <p><strong>Company Name:</strong> {selectedRecruiter.companyName}</p>
            <p><strong>Education Level:</strong> {selectedRecruiter.educationLevel}</p>
            <p><strong>Employment Status:</strong> {selectedRecruiter.employmentStatus}</p>
            <p><strong>Years of Experience:</strong> {selectedRecruiter.yearsOfExperience}</p>
            <p><strong>Current Status:</strong> {selectedRecruiter.currentStatus}</p>
            <p><strong>Service Number:</strong> {selectedRecruiter.serviceNumber}</p>
            <p><strong>Rank:</strong> {selectedRecruiter.rank}</p>
            <p><strong>Unit:</strong> {selectedRecruiter.unit}</p>
            <p><strong>Process Status:</strong> {selectedRecruiter.processStatus}</p>
          </Modal.Body>
          <Modal.Footer>
            <CButton color="secondary" onClick={handleClose}>
              Close
            </CButton>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Dashboards1;
