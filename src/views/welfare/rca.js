import React, { useState, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const mission = () => {
  const [rca, setrca] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    svcno: '',
    rank: '',
    names: '',
    unit: '',
    amount: '',
    account: '',
    depositedby: '',
  });
  const tableRef = useRef(null);

  const exportToPDF = () => {
    const doc = new jsPDF();
    
    // Add heading to the PDF
    const heading = "Deposited RCA";
    const textWidth = doc.getStringUnitWidth(heading) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const textOffset = (doc.internal.pageSize.width - textWidth) / 2;
    doc.text(heading, textOffset, 10);
    
    // Add table to the PDF
    doc.autoTable({ html: tableRef.current });
  
    doc.save("Deposited Rca.pdf");
  };

  const handleAddDeployment = () => {
    setIsModalOpen(true);
  };

  const handleSearch = () => {
    // Add logic for searching rca
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setrca([...rca, formData]);
    setIsModalOpen(false);
    setFormData({
        svcno: '',
        rank: '',
        names: '',
        unit: '',
        amount: '',
        account: '',
        depositedby: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
  
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div className="btn-group">
          <Button variant="info" className="mr-2" onClick={handleAddDeployment}>Add</Button>
          <Button variant="info" className="mr-6" onClick={handleSearch}>Search</Button>
          <Button variant="success" onClick={exportToPDF}>Export to PDF</Button>
        </div>
      </div>

      <div className="container mt-4">
        <table className="table table-hover" ref={tableRef}>
          <thead>
            <tr>
              <th>SVCNO</th>
              <th>RANK</th>
              <th>NAMES</th>
              <th>UNIT</th>
              <th>AMOUNT</th>
              <th>ACCOUNT</th>
              <th>DEPOSTED BY</th>
              </tr>
          </thead>
          <tbody>
            {rca.map((deployment, index) => (
              <tr key={index}>
                <td>{deployment.svcno}</td>
                <td>{deployment.rank}</td>
                <td>{deployment.names}</td>
                <td>{deployment.unit}</td>
                <td>{deployment.amount}</td>
                <td>{deployment.account}</td>
                <td>{deployment.depositedby}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Service Number:</label>
              <input type="text" name="svcno" value={formData.svcno} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Rank:</label>
              <input type="text" name="rank" value={formData.rank} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Names:</label>
              <input type="text" name="names" value={formData.names} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Unit</label>
              <input type="text" name="unit" value={formData.unit} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Amount:</label>
              <input type="text" name="amount" value={formData.amount} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Account:</label>
              <input type="text" name="account" value={formData.account} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Deposited By:</label>
              <input type="text" name="depositedby" value={formData.depositedby} onChange={handleChange} className="form-control" />
            </div>
            
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>Submit</Button>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default mission;
