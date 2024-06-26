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

const monthly = () => {
  const initialData = [
    { date: "2024-06-01", unit: "System Security Regt", onParade: "", absent: "", course: "", passLeave: "" },
    { date: "2024-06-01", unit: "Information System Regt", onParade: "", absent: "", course: "", passLeave: "" },
    { date: "2024-06-01", unit: "Test", onParade: "", absent: "", course: "", passLeave: "" },
    { date: "2024-06-02", unit: "System Security Regt", onParade: "", absent: "", course: "", passLeave: "" },
    { date: "2024-06-02", unit: "Information System Regt", onParade: "", absent: "", course: "", passLeave: "" },
    { date: "2024-06-02", unit: "Test", onParade: "", absent: "", course: "", passLeave: "" },
    // Add more sample data for multiple days
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

  // Function to generate monthly summary
  const generateMonthlySummary = () => {
    const monthlySummary = {};
    data.forEach(item => {
      const { date, onParade, absent, course, passLeave } = item;
      if (!monthlySummary[date]) {
        monthlySummary[date] = {
          onParade: Number(onParade) || 0,
          absent: Number(absent) || 0,
          course: Number(course) || 0,
          passLeave: Number(passLeave) || 0
        };
      } else {
        monthlySummary[date].onParade += Number(onParade) || 0;
        monthlySummary[date].absent += Number(absent) || 0;
        monthlySummary[date].course += Number(course) || 0;
        monthlySummary[date].passLeave += Number(passLeave) || 0;
      }
    });
    return monthlySummary;
  };

  return (
    <div className="container py-4">
      <CCard className="mb-4" style={{ background: '#f0f0f0', border: '1px solid #ccc' }}>
        <CCardHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#343a40', color: '#fff' }}>
          <h5 style={{ margin: 0 }}>Daily Parade State</h5>
          <Button variant="primary" onClick={exportToPDF}>Export to PDF</Button>
        </CCardHeader>
        <CCardBody>
          <div className="table-responsive">
            <CTable ref={tableRef} striped bordered hover style={{ background: '#fff', border: '1px solid #ccc' }}>
              <CTableHead style={{ background: '#343a40', color: '#fff' }}>
                <CTableRow>
                  <CTableHeaderCell>Date</CTableHeaderCell>
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
                    <CTableHeaderCell>{item.date}</CTableHeaderCell>
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
                  <CTableHeaderCell></CTableHeaderCell>
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

      {/* Monthly Summary Section */}
      <CCard className="mb-4" style={{ background: '#f0f0f0', border: '1px solid #ccc' }}>
        <CCardHeader style={{ background: '#343a40', color: '#fff' }}>
          <h5 style={{ margin: 0 }}>Monthly Summary</h5>
        </CCardHeader>
        <CCardBody>
          <div className="table-responsive">
            <CTable striped bordered hover style={{ background: '#fff', border: '1px solid #ccc' }}>
              <CTableHead style={{ background: '#343a40', color: '#fff' }}>
                <CTableRow>
                  <CTableHeaderCell>Date</CTableHeaderCell>
                  <CTableHeaderCell>Total On Parade</CTableHeaderCell>
                  <CTableHeaderCell>Total Absent</CTableHeaderCell>
                  <CTableHeaderCell>Total On Course</CTableHeaderCell>
                  <CTableHeaderCell>Total Pass Leave</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {Object.entries(generateMonthlySummary()).map(([date, totals], index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell>{date}</CTableHeaderCell>
                    <CTableHeaderCell>{totals.onParade}</CTableHeaderCell>
                    <CTableHeaderCell>{totals.absent}</CTableHeaderCell>
                    <CTableHeaderCell>{totals.course}</CTableHeaderCell>
                    <CTableHeaderCell>{totals.passLeave}</CTableHeaderCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </div>
        </CCardBody>
      </CCard>

      {/* Modal for editing cell */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            {/* Form fields for editing */}
            <div className="form-group">
              <label>Date: </label>
              <input
                type="text"
                className="form-control"
                value={editItem?.date || ""}
                disabled
              />
            </div>
            <div className="form-group">
              <label>On Parade: </label>
              <input
                type="number"
                className="form-control"
                value={editItem?.onParade || ""}
                onChange={(e) => handleNumericInputChange("onParade", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Absent: </label>
              <input
                type="number"
                className="form-control"
                value={editItem?.absent || ""}
                onChange={(e) => handleNumericInputChange("absent", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>On Course: </label>
              <input
                type="number"
                className="form-control"
                value={editItem?.course || ""}
                onChange={(e) => handleNumericInputChange("course", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Pass Leave: </label>
              <input
                type="number"
                className="form-control"
                value={editItem?.passLeave || ""}
                onChange={(e) => handleNumericInputChange("passLeave", e.target.value)}
              />
            </div>
          </form>
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

export default monthly;





