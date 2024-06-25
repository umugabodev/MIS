import React, { useState, useEffect } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CBadge,
} from '@coreui/react';
import { Link } from 'react-router-dom';

const IssueList = () => {
  const [issues, setIssues] = useState([]);

  // Mock issues data for testing
  const initialIssues = [
    { id: 1, issueTitle: 'Cross-Site Scripting Vulnerability', description: 'Lorem ipsum...', severity: 'High', reportedBy: 'John Doe' },
    { id: 2, issueTitle: 'Authentication Bypass', description: 'Lorem ipsum...', severity: 'Medium', reportedBy: 'Jane Smith' }
  ];

  useEffect(() => {
    // Simulating fetching issues from an API
    setIssues(initialIssues);
  }, []);

  return (
    <div className="container mt-4">
      <h5 className="mb-4">Issue List</h5>
      {issues.length === 0 ? (
        <p>No issues found.</p>
      ) : (
        issues.map((issue) => (
          <CCard key={issue.id} className="mb-4">
            <CCardHeader>
              <div>
                <strong>{issue.issueTitle}</strong>
                <div className="card-header-actions">
                  <CBadge color={getBadgeColor(issue.severity)}>{issue.severity}</CBadge>
                </div>
              </div>
              <div>
                {/* Button in the header */}
                <Link to={`/issue/${issue.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </CCardHeader>
            <CCardBody>
              <p className="card-text">{issue.description}</p>
              <p className="card-text">Reported by: {issue.reportedBy}</p>
            </CCardBody>
          </CCard>
        ))
      )}

      {/* Button to navigate to SecurityForm */}
      <Link to="/SecurityForm">
        <CButton color="success">Add Another Issue</CButton>
      </Link>

      {/* Modal for confirmation */}
      <CModal visible={false} onClose={() => {}}>
        <CModalHeader onClose={() => {}}>
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
    </div>
  );
};

// Function to get badge color based on severity
const getBadgeColor = (severity) => {
  switch (severity) {
    case 'Low': return 'success';
    case 'Medium': return 'warning';
    case 'High': return 'danger';
    default: return 'primary';
  }
};

export default IssueList;
