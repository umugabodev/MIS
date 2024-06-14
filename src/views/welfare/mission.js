import React, { useState, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const mission = () => {
  const [mission, setmission] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    svcno: '',
    rank: '',
    fname: '',
    lname: '',
    from: '',
    to: '',
    noofmission: '',
    type: '',
    lastmission: '',
  });
  const tableRef = useRef(null);

  const exportToPDF = () => {
    const doc = new jsPDF();
    
    // Add heading to the PDF
    const heading = "Mission List";
    const textWidth = doc.getStringUnitWidth(heading) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const textOffset = (doc.internal.pageSize.width - textWidth) / 2;
    doc.text(heading, textOffset, 10);
    
    // Add table to the PDF
    doc.autoTable({ html: tableRef.current });
  
    doc.save("Mission.pdf");
  };

  const handleAddDeployment = () => {
    setIsModalOpen(true);
  };

  const handleSearch = () => {
    // Add logic for searching mission
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setmission([...mission, formData]);
    setIsModalOpen(false);
    setFormData({
        svcno: '',
        rank: '',
        fname: '',
        lname: '',
        from: '',
        to: '',
        noofmission: '',
        type: '',
        lastmission: '',
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
              <th>FNAME</th>
              <th>LNAME</th>
              <th>FROM</th>
              <th>TO</th>
              <th>NO of MISSION</th>  
              <th>TYPE</th>
              <th>LAST MISSION</th>
            </tr>
          </thead>
          <tbody>
            {mission.map((deployment, index) => (
              <tr key={index}>
                <td>{deployment.svcno}</td>
                <td>{deployment.rank}</td>
                <td>{deployment.fname}</td>
                <td>{deployment.lname}</td>
                <td>{deployment.from}</td>
                <td>{deployment.to}</td>
                <td>{deployment.noofmission}</td>
                <td>{deployment.type}</td>
                <td>{deployment.lastmission}</td>
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
              <label>First Name:</label>
              <input type="text" name="fname" value={formData.fname} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input type="text" name="lname" value={formData.lname} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>From Unit:</label>
              <input type="text" name="from" value={formData.from} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>To Unit:</label>
              <input type="text" name="to" value={formData.to} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>No Of Mission:</label>
              <input type="text" name="noofmission" value={formData.noofmission} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Mission Type:</label>
              <input type="text" name="type" value={formData.type} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Last Mission Year:</label>
              <input type="text" name="lastmission" value={formData.lastmission} onChange={handleChange} className="form-control" />
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
