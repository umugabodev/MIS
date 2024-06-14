import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
} from '@coreui/react';
function FinancialReportForm() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const handleFile1Change = (event) => {
    setFile1(event.target.files[0]);
  };

  const handleFile2Change = (event) => {
    setFile2(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file submission, e.g., send files to backend or perform validation
    console.log("File 1:", file1);
    console.log("File 2:", file2);
  };

  return (
    <CCard className="mb-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Recruiter Registration Form</h5>
        </CCardHeader>
        <CCardBody style={{ flex: 1, padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#DCDCDC' }}>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px', gridTemplateColumns: '1fr 1fr' }}>
          <div className="form-group">
    {/* <div>
      <h2>Financial Report Form</h2>
      <form onSubmit={handleSubmit}> */}
        <div>
          <label htmlFor="file1">Upload PDF Monthly Financial Report:</label>
          <input type="file" id="file1" accept=".pdf" onChange={handleFile1Change} />
        </div>
        <div>
          <label htmlFor="file2">Upload PDF File 2:</label>
          <input type="file" id="file2" accept=".pdf" onChange={handleFile2Change} />
        </div>
        <button type="submit">Submit</button>
        </div>
        </form>
         </CCardBody>
      </CCard>
    );
};


export default FinancialReportForm;
