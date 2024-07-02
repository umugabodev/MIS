import React, { useState, useRef, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Internaldep = () => {
  const [deployments, setDeployments] = useState([
    {
      svcno: '12345',
      rank: 'Captain',
      fname: 'John',
      lname: 'Doe',
      from: 'Unit A',
      to: 'Unit B',
      appointment: 'Commanding Officer'
    },
    // Add more static data as needed
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    svcno: '',
    rank: '',
    fname: '',
    lname: '',
    from: '',
    to: '',
    appointment: ''
  });
  const tableRef = useRef(null);

  useEffect(() => {
    // If you need to fetch data from an API or perform other side effects when the component mounts, you can do it here.
  }, []);

  const exportToPDF = () => {
    const doc = new jsPDF();
    
    // Add heading to the PDF
    const heading = "External Deployment Report";
    const textWidth = doc.getStringUnitWidth(heading) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const textOffset = (doc.internal.pageSize.width - textWidth) / 2;
    doc.text(heading, textOffset, 10);
    
    // Add table to the PDF
    doc.autoTable({ html: tableRef.current });
  
    doc.save("ExternalDep.pdf");
  };

  const handleAddDeployment = () => {
    setIsModalOpen(true);
  };

  const handleSearch = () => {
    // Add logic for searching deployments
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDeployments([...deployments, formData]);
    setIsModalOpen(false);
    setFormData({
      svcno: '',
      rank: '',
      fname: '',
      lname: '',
      from: '',
      to: '',
      appointment: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h3>External Deployments</h3>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="btn-group">
          <Button variant="info" onClick={handleAddDeployment}>Add Deployment</Button>
          <Button variant="info" onClick={handleSearch}>Search</Button>
        </div>
        <Button variant="success" onClick={exportToPDF}>Export to PDF</Button>
      </div>

      <div className="container mt-4">
        <table className="table table-hover" ref={tableRef}>
          <thead>
            <tr>
              <th>SVCNO</th>
              <th>RANK</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>FROM</th>
              <th>TO</th>
              <th>APPOINTMENT</th>
            </tr>
          </thead>
          <tbody>
            {deployments.map((deployment, index) => (
              <tr key={index}>
                <td>{deployment.svcno}</td>
                <td>{deployment.rank}</td>
                <td>{deployment.fname}</td>
                <td>{deployment.lname}</td>
                <td>{deployment.from}</td>
                <td>{deployment.to}</td>
                <td>{deployment.appointment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Deployment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="svcno">
              <Form.Label>Service Number:</Form.Label>
              <Form.Control type="text" name="svcno" value={formData.svcno} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="rank">
              <Form.Label>Rank:</Form.Label>
              <Form.Control type="text" name="rank" value={formData.rank} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="fname">
              <Form.Label>First Name:</Form.Label>
              <Form.Control type="text" name="fname" value={formData.fname} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="lname">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control type="text" name="lname" value={formData.lname} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="from">
              <Form.Label>From Unit:</Form.Label>
              <Form.Control type="text" name="from" value={formData.from} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="to">
              <Form.Label>To Unit:</Form.Label>
              <Form.Control type="text" name="to" value={formData.to} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="appointment">
              <Form.Label>Appointment:</Form.Label>
              <Form.Control type="text" name="appointment" value={formData.appointment} onChange={handleChange} required />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
            <Button variant="secondary" className="ml-2" onClick={() => setIsModalOpen(false)}>Cancel</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Internaldep;
