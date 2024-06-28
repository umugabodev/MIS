import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter
} from '@coreui/react';
import { Link } from 'react-router-dom';

const SecurityForm = () => {
  const [issueTitle, setIssueTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('');
  const [reportedBy, setReportedBy] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Simulating submission to an API
      console.log({
        issueTitle,
        description,
        severity,
        reportedBy
      });

      // Reset form fields
      setIssueTitle('');
      setDescription('');
      setSeverity('');
      setReportedBy('');
      
      // Show modal after successful submission
      setModalVisible(true);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = () => {
    let validationErrors = {};

    if (!issueTitle.trim()) {
      validationErrors.issueTitle = 'Issue Title is required';
    }
    if (!description.trim()) {
      validationErrors.description = 'Description is required';
    }
    if (!severity) {
      validationErrors.severity = 'Severity is required';
    }
    if (!reportedBy.trim()) {
      validationErrors.reportedBy = 'Reporter Name is required';
    }

    return validationErrors;
  };

  const labelStyle = { display: 'block', marginBottom: '8px', color: '#333' };
  const inputStyle = { width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' };
  const errorStyle = { color: 'red', marginTop: '5px', marginBottom: '10px' };
  const buttonStyle = { backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' };

  return (
    <CCard className="mb-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <CCardHeader className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Security Issue Report Form</h5>
      </CCardHeader>
      <CCardBody style={{ flex: 1, padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f2f0f0' }}>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={labelStyle}>Issue Title:</label>
            <input
              type="text"
              value={issueTitle}
              onChange={(e) => setIssueTitle(e.target.value)}
              style={inputStyle}
              placeholder="Enter issue title"
            />
            {errors.issueTitle && <p style={errorStyle}>{errors.issueTitle}</p>}
          </div>
          <div>
            <label style={labelStyle}>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ ...inputStyle, minHeight: '100px' }}
              placeholder="Enter issue description"
            />
            {errors.description && <p style={errorStyle}>{errors.description}</p>}
          </div>
          <div>
            <label style={labelStyle}>Severity:</label>
            <select
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              style={inputStyle}
            >
              <option value="">Select severity</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            {errors.severity && <p style={errorStyle}>{errors.severity}</p>}
          </div>
          <div>
            <label style={labelStyle}>Reported By:</label>
            <input
              type="text"
              value={reportedBy}
              onChange={(e) => setReportedBy(e.target.value)}
              style={inputStyle}
              placeholder="Enter your name"
            />
            {errors.reportedBy && <p style={errorStyle}>{errors.reportedBy}</p>}
          </div>
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      </CCardBody>

      {/* Modal for submission confirmation */}
      <CModal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <CModalHeader onClose={() => setModalVisible(false)}>
          <h5>Thank You!</h5>
        </CModalHeader>
        <CModalBody>
          Your security issue report has been successfully submitted.
        </CModalBody>
        <CModalFooter>
          <Link to="/issue-list">
            <CButton color="primary">Close</CButton>
          </Link>
        </CModalFooter>
      </CModal>
    </CCard>
  );
};

export default SecurityForm;
