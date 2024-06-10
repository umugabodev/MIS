import React, { useState } from 'react';
import {
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
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SimpleTable = () => {
  const initialData = [
    { unit: "System Security  Regt",  onParade: "", absent: "", course: "", passLeave: ""  },
    { unit: "Information System Regt",  onParade: "", absent: "", course: "", passLeave: ""},
    { unit: "Test",  onParade: "", absent: "",  course: "", passLeave: ""},
    
  ];

  const [data, setData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const handleEdit = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = value;
    setData(newData);
  };

  const handleOpenModal = (index) => {
    setShowModal(true);
    setSelectedRowIndex(index);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveModal = () => {
    // Save functionality goes here
    console.log("Data saved:", data);
    handleCloseModal();
  };

  return (
    <div className="container py-6">
      <CCard className="mb-6">
        <CCardHeader>
          Daily Parade State
        </CCardHeader>
        <CCardBody>
          <div className="table-responsive">
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>REGMENT</CTableHeaderCell>
                 <CTableHeaderCell>On Parade</CTableHeaderCell>
                  <CTableHeaderCell>Absent</CTableHeaderCell>
                  <CTableHeaderCell>On Course</CTableHeaderCell>
                  <CTableHeaderCell>Pass Leave</CTableHeaderCell>
                  <CTableHeaderCell>Total</CTableHeaderCell>
                  <CTableHeaderCell>Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell>{item.unit}</CTableHeaderCell>
                    
                    <CTableHeaderCell>
                      {item.onParade}
                    </CTableHeaderCell>
                    <CTableHeaderCell>
                      {item.absent}
                    </CTableHeaderCell>
                    
                    <CTableHeaderCell>
                      {item.course}
                    </CTableHeaderCell>
                    <CTableHeaderCell>
                      {item.passLeave}
                    </CTableHeaderCell>
                    <CTableHeaderCell>
                      {item.total}
                    </CTableHeaderCell>
                    
                    <CTableHeaderCell>
                      <button onClick={() => handleOpenModal(index)}>Update</button>
                    </CTableHeaderCell>
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
          <Modal.Title>Parade State Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Input fields for editing data */}
        
  {/* Title for the input field */}
  <label className="form-label">On Parade:</label>
  {/* Input field for editing data */}
  <input
    className="form-control"
    type="number"
    value={data[selectedRowIndex]?.onParade} // Using optional chaining to handle possible undefined value
    onChange={(e) => handleEdit(selectedRowIndex, "onParade", e.target.value)}
  />
  {/* Additional input fields for other data */}
  {/* Remember to include titles for these fields as well */}

<label className="form-label">Absent:</label>
          <input
            className="form-control mt-2"
            type="number"
            value={data[selectedRowIndex]?.absent}
            onChange={(e) => handleEdit(selectedRowIndex, "absent", e.target.value)}
          />
           <label className="form-label">On Course:</label>
          <input
            className="form-control mt-2"
            type="number"
            value={data[selectedRowIndex]?.course}
            onChange={(e) => handleEdit(selectedRowIndex, "course", e.target.value)}
          />
           <label className="form-label">Pass Leave</label>
          <input
            className="form-control mt-2"
            type="number"
            value={data[selectedRowIndex]?.passLeave}
            onChange={(e) => handleEdit(selectedRowIndex, "passLeave", e.target.value)}
          />
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

export default SimpleTable;
