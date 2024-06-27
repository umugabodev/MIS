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
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null); // State to track which issue is selected
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const issuesPerPage = 2; // Number of issues to display per page

  // Mock issues data for testing
  const initialIssues = [
    { id: 1, issueTitle: 'Murder acts -Security Vulnerability', 
    description: 'Found a dead body of a man near Karugenge Defence.', 
    severity: 'High', 
    reportedBy: 'Cpl John HAKUZA' },
    { id: 2, issueTitle: 'Authentication Bypass', 
    description: 'Today early in the evenning two drunk men have attempted to forcely enter into our defence', 
    severity: 'Medium', 
    reportedBy: 'Jane Smith' },
    { id: 3, issueTitle: 'SQL Injection Vulnerability', 
    description: 'Lorem ipsum...', 
    severity: 'High', 
    reportedBy: 'Alice Brown' },
    { id: 4, issueTitle: 'Insecure Direct Object Reference', 
    description: 'Today early in the evenning two drunk men have attempted to forcely enter into our defence', 
    severity: 'Medium', 
    reportedBy: 'Bob Green' },
    { id: 5, issueTitle: 'Bumbogo Barrack situation', 
    description: 'Today early in the evenning two drunk men have attempted to forcely enter into our defence', 
    severity: 'Low', 
    reportedBy: 'Pte Eve MUSINGA' },
  ];

  useEffect(() => {
    // Simulating fetching issues from an API
    setIssues(initialIssues);
  }, []);

  // Function to handle opening the modal and setting the selected issue
  const openModal = (issue) => {
    setSelectedIssue(issue);
    setModalVisible(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setSelectedIssue(null);
    setModalVisible(false);
  };

  // Function to export issue details as PDF
  const exportToPdf = () => {
    if (selectedIssue) {
      // Initialize jsPDF
      const doc = new jsPDF();

      // Define content for PDF
      const issueDetails = `
        Title: ${selectedIssue.issueTitle}
        Description: ${selectedIssue.description}
        Reported by: ${selectedIssue.reportedBy}
        Severity: ${selectedIssue.severity}
        `;

      // Add content to PDF
      doc.text(issueDetails, 10, 10);

      // Save PDF
      doc.save(`${selectedIssue.issueTitle}.pdf`);
    }
  };

  // Function to handle going to the next page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle going to the previous page
  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Logic to calculate which issues to display based on current page
  const indexOfLastIssue = currentPage * issuesPerPage;
  const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
  const currentIssues = issues.slice(indexOfFirstIssue, indexOfLastIssue);

  return (
    
    <div className="container mt-4">
      {/* <h5 className="mb-4">Issue List</h5> */}
      
      {currentIssues.length === 0 ? (
        <p>No issues found.</p>
      ) : (
        currentIssues.map((issue) => (
          <CCard key={issue.id} className="mb-4">
            <CCardHeader>
              <div>
                <strong>{issue.issueTitle}</strong>
                <div className="card-header-actions">
                  <CBadge color={getBadgeColor(issue.severity)}>{issue.severity}</CBadge>
                </div>
              </div>
              <div>
                {/* Button to open modal */}
                <CButton color="primary" onClick={() => openModal(issue)}>View Details</CButton>
              </div>
            </CCardHeader>
            <CCardBody>
              <p className="card-text">{issue.description}</p>
              <p className="card-text">Reported by: {issue.reportedBy}</p>
            </CCardBody>
          </CCard>
        ))
      )}

      {/* Pagination Buttons */}
      <div className="mt-4">
        <nav>
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={prevPage}>Previous</button>
            </li>
            <li className={`page-item ${indexOfLastIssue >= issues.length ? 'disabled' : ''}`}>
              <button className="page-link" onClick={nextPage}>Next</button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Modal for displaying issue details */}
      <CModal visible={modalVisible} onClose={closeModal}>
        <CModalHeader onClose={closeModal}>
          <h5>Issue Details</h5>
        </CModalHeader>
        <CModalBody>
          {selectedIssue && (
            <>
              <p><strong>Title:</strong> {selectedIssue.issueTitle}</p>
              <p><strong>Description:</strong> {selectedIssue.description}</p>
              <p><strong>Severity:</strong> {selectedIssue.severity}</p>
              <p><strong>Reported by:</strong> {selectedIssue.reportedBy}</p>

              {/* Add additional details as needed */}
            </>
          )}
        </CModalBody>
        <CModalFooter>
           <CButton color="primary" onClick={exportToPdf}>Export to PDF</CButton>
          <CButton color="secondary" onClick={closeModal}>Close</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

const getBadgeColor = (severity) => {
  switch (severity) {
    case 'Low': return 'success';
    case 'Medium': return 'warning';
    case 'High': return 'danger';
    default: return 'primary';
  }
};

export default IssueList;
