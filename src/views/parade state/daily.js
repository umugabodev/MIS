import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CButton,
} from '@coreui/react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'jspdf-autotable';

const Daily = () => {
  const initialData = [
    { date: "2024-06-01", unit: "System Security Regt", onParade: "", absent: "", course: "", passLeave: "" },
    { date: "2024-06-01", unit: "Information System Regt", onParade: "", absent: "", course: "", passLeave: "" },
    { date: "2024-06-01", unit: "Test", onParade: "", absent: "", course: "", passLeave: "" },
    { date: "2024-06-02", unit: "System Security Regt", onParade: "", absent: "", course: "", passLeave: "" },
    { date: "2024-06-02", unit: "Information System Regt", onParade: "", absent: "", course: "", passLeave: "" },
    { date: "2024-06-02", unit: "Test", onParade: "", absent: "", course: "", passLeave: "" },
    // Add more sample data for multiple days
  ];

  const [data, setData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [editItem, setEditItem] = useState(null);

  const handleCloseModal = () => {
    setShowModal(false);
    setEditItem(null);
  };

  const handleShowModal = (index) => {
    setSelectedRowIndex(index);
    setEditItem(data[index]);
    setShowModal(true);
  };

  const handleSaveModal = () => {
    const newData = [...data];
    newData[selectedRowIndex] = editItem;
    setData(newData);
    handleCloseModal();
  };

  const handleNumericInputChange = (field, value) => {
    setEditItem({
      ...editItem,
      [field]: value
    });
  };

  const cardHeaderStyle = {
    backgroundColor: '#2c3e50',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    padding: '10px', // Added padding for better appearance
  };

  const cardBodyStyle = {
    backgroundColor: '#ecf0f1',
    padding: '15px', // Added padding for better appearance
  };

  const tableHeaderStyle = {
    backgroundColor: '#34495e',
    color: 'white',
  };

  const buttonStyle = {
    backgroundColor: '#2c3e50',
    color: 'white',
    margin: '5px',
  };

  return (
    <div className="container py-4">
      <CCard className="mb-4" style={{ background: '#18453b', border: '1px solid #ccc' }}>
        <CCardHeader style={cardHeaderStyle}>
          <h5 style={{ margin: 0 }}>Daily Parade States</h5>
        </CCardHeader>
        <CCardBody style={cardBodyStyle}>
          <div className="table-responsive">
            <CTable striped bordered hover style={{ background: '#fff', border: '1px solid #ccc' }}>
              <CTableHead style={tableHeaderStyle}>
                <CTableRow>
                  <CTableHeaderCell>Date</CTableHeaderCell>
                  <CTableHeaderCell>Unit</CTableHeaderCell>
                  <CTableHeaderCell>On Parade</CTableHeaderCell>
                  <CTableHeaderCell>Absent</CTableHeaderCell>
                  <CTableHeaderCell>On Course</CTableHeaderCell>
                  <CTableHeaderCell>Pass Leave</CTableHeaderCell>
                  <CTableHeaderCell>Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell>{item.date}</CTableHeaderCell>
                    <CTableDataCell>{item.unit}</CTableDataCell>
                    <CTableDataCell>{item.onParade}</CTableDataCell>
                    <CTableDataCell>{item.absent}</CTableDataCell>
                    <CTableDataCell>{item.course}</CTableDataCell>
                    <CTableDataCell>{item.passLeave}</CTableDataCell>
                    <CTableDataCell>
                      <CButton style={buttonStyle} onClick={() => handleShowModal(index)}>Edit</CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </div>
        </CCardBody>
      </CCard>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Parade State</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editItem && (
            <div>
              <div className="mb-3">
                <label>Date</label>
                <input type="text" className="form-control" value={editItem.date} readOnly />
              </div>
              <div className="mb-3">
                <label>Unit</label>
                <input type="text" className="form-control" value={editItem.unit} readOnly />
              </div>
              <div className="mb-3">
                <label>On Parade</label>
                <input type="number" className="form-control" value={editItem.onParade} onChange={(e) => handleNumericInputChange('onParade', e.target.value)} />
              </div>
              <div className="mb-3">
                <label>Absent</label>
                <input type="number" className="form-control" value={editItem.absent} onChange={(e) => handleNumericInputChange('absent', e.target.value)} />
              </div>
              <div className="mb-3">
                <label>On Course</label>
                <input type="number" className="form-control" value={editItem.course} onChange={(e) => handleNumericInputChange('course', e.target.value)} />
              </div>
              <div className="mb-3">
                <label>Pass Leave</label>
                <input type="number" className="form-control" value={editItem.passLeave} onChange={(e) => handleNumericInputChange('passLeave', e.target.value)} />
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Daily;
