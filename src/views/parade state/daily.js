import React, { useState, useRef } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Paradestate = () => {
  const initialData = [
    { unit: "System Security Regt", onParade: "", absent: "", course: "", passLeave: "" },
    { unit: "Information System Regt", onParade: "", absent: "", course: "", passLeave: "" },
    { unit: "Test", onParade: "", absent: "", course: "", passLeave: "" },
  ];
  const tableRef = useRef();
  const [data, setData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [editItem, setEditItem] = useState(null); // Track currently edited item

  const handleOpenModal = (index) => {
    setShowModal(true);
    setSelectedRowIndex(index);
    setEditItem({ ...data[index] }); // Make a copy of the item being edited
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditItem(null); // Clear the edit item after modal is closed
  };

  const handleSaveModal = () => {
    // Save edited item back to data array
    const newData = [...data];
    newData[selectedRowIndex] = editItem;
    setData(newData);
    handleCloseModal();
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: tableRef.current });
    doc.save("ParadeStateReport.pdf");
  };

  // Function to handle numeric input change
  const handleNumericInputChange = (field, value) => {
    setEditItem({
      ...editItem,
      [field]: value
    });
  };

  // Function to calculate totals
  const calculateTotals = () => {
    let totalOnParade = 0;
    let totalAbsent = 0;
    let totalCourse = 0;
    let totalPassLeave = 0;

    data.forEach(item => {
      totalOnParade += Number(item.onParade) || 0;
      totalAbsent += Number(item.absent) || 0;
      totalCourse += Number(item.course) || 0;
      totalPassLeave += Number(item.passLeave) || 0;
    });

    return {
      totalOnParade,
      totalAbsent,
      totalCourse,
      totalPassLeave
    };
  };

  return (
    <div className="container py-4">
      <CCard className="mb-4" style={{ background: '#f0f0f0', border: '1px solid #ccc' }}>
        <CCardHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#343a40', color: '#fff' }}>
          <h5 style={{ margin: 0 }}>Parade State</h5>
          <Button variant="primary" onClick={exportToPDF}>Export to PDF</Button>
        </CCardHeader>
        <CCardBody>
          <div className="table-responsive">
            <CTable ref={tableRef} striped bordered hover style={{ background: '#fff', border: '1px solid #ccc' }}>
              <CTableHead style={{ background: '#343a40', color: '#fff' }}>
                <CTableRow>
                  <CTableHeaderCell>REGIMENT</CTableHeaderCell>
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
                    <CTableHeaderCell>{item.unit}</CTableHeaderCell>
                    <CTableHeaderCell>{item.onParade}</CTableHeaderCell>
                    <CTableHeaderCell>{item.absent}</CTableHeaderCell>
                    <CTableHeaderCell>{item.course}</CTableHeaderCell>
                    <CTableHeaderCell>{item.passLeave}</CTableHeaderCell>
                    <CTableHeaderCell>
                      <Button variant="info" size="sm" onClick={() => handleOpenModal(index)}>Update</Button>
                    </CTableHeaderCell>
                  </CTableRow>
                ))}
                {/* Total row */}
                <CTableRow style={{ background: '#f0f0f0' }}>
                  <CTableHeaderCell style={{ fontWeight: 'bold' }}>Total</CTableHeaderCell>
                  <CTableHeaderCell style={{ fontWeight: 'bold' }}>{calculateTotals().totalOnParade}</CTableHeaderCell>
                  <CTableHeaderCell style={{ fontWeight: 'bold' }}>{calculateTotals().totalAbsent}</CTableHeaderCell>
                  <CTableHeaderCell style={{ fontWeight: 'bold' }}>{calculateTotals().totalCourse}</CTableHeaderCell>
                  <CTableHeaderCell style={{ fontWeight: 'bold' }}>{calculateTotals().totalPassLeave}</CTableHeaderCell>
                  <CTableHeaderCell></CTableHeaderCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </div>
        </CCardBody>
      </CCard>

      {/* Modal for editing cell */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton style={{ background: '#343a40', color: '#fff' }}>
          <Modal.Title>Edit Regiment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Input fields for editing data */}
          <div className="mb-3">
            <label className="form-label">On Parade:</label>
            <input
              className="form-control"
              type="number"
              value={editItem?.onParade}
              onChange={(e) => handleNumericInputChange("onParade", e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Absent:</label>
            <input
              className="form-control"
              type="number"
              value={editItem?.absent}
              onChange={(e) => handleNumericInputChange("absent", e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">On Course:</label>
            <input
              className="form-control"
              type="number"
              value={editItem?.course}
              onChange={(e) => handleNumericInputChange("course", e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Pass Leave:</label>
            <input
              className="form-control"
              type="number"
              value={editItem?.passLeave}
              onChange={(e) => handleNumericInputChange("passLeave", e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer style={{ background: '#343a40', borderTop: '1px solid #ccc' }}>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button variant="primary" onClick={handleSaveModal}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Paradestate;
