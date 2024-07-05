import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol
} from '@coreui/react';

const DocumentStoragePage = () => {
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [file, setFile] = useState(null);

  // Function to handle document selection
  const handleDocumentSelect = (document) => {
    setSelectedDocument(document);
  };

  // Function to handle document upload
  const handleDocumentUpload = () => {
    if (file) {
      const newDocument = {
        name: file.name,
        content: `Uploaded file: ${file.name}`,
      };
      setDocuments([...documents, newDocument]);
      setFile(null);
    }
  };

  // Function to handle file input change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '20px auto' }}>
      <CCard>
        <CCardHeader style={{ backgroundColor: '#003366', color: 'white' }}>
          <h3 style={{ margin: 0 }}>Document Storage</h3>
        </CCardHeader>
        <CCardBody>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Document List */}
            <CCol xs="4">
              <CCard>
                <CCardHeader style={{ backgroundColor: '#004080', color: 'white' }}>
                  <h4 style={{ margin: 0 }}>Documents</h4>
                </CCardHeader>
                <CCardBody style={{ maxHeight: '300px', overflowY: 'auto' }}>
                  <ul style={{ listStyleType: 'none', padding: '0' }}>
                    {documents.map((document, index) => (
                      <li
                        key={index}
                        onClick={() => handleDocumentSelect(document)}
                        style={{
                          cursor: 'pointer',
                          padding: '10px',
                          margin: '5px 0',
                          backgroundColor: '#f2f2f2',
                          borderRadius: '3px',
                          border: '1px solid #dddddd',
                        }}
                      >
                        {document.name}
                      </li>
                    ))}
                  </ul>
                </CCardBody>
              </CCard>
            </CCol>

            {/* Document Viewer */}
            <CCol xs="6">
              <CCard>
                <CCardHeader style={{ backgroundColor: '#004080', color: 'white' }}>
                  <h4 style={{ margin: 0 }}>Document Viewer</h4>
                </CCardHeader>
                <CCardBody>
                  {selectedDocument ? (
                    <>
                      <h5>{selectedDocument.name}</h5>
                      <p>{selectedDocument.content}</p>
                    </>
                  ) : (
                    <div style={{ textAlign: 'center', fontStyle: 'italic', color: '#888888' }}>
                      Select a document to view
                    </div>
                  )}
                </CCardBody>
              </CCard>
            </CCol>

            {/* Upload Form */}
            <CCol xs="2">
              <CCard>
                <CCardHeader style={{ backgroundColor: '#004080', color: 'white' }}>
                  <h4 style={{ margin: 0 }}>Upload Document</h4>
                </CCardHeader>
                <CCardBody>
                  <input type="file" onChange={handleFileChange} style={{ marginBottom: '10px' }} />
                  <button
                    onClick={handleDocumentUpload}
                    style={{
                      backgroundColor: '#4CAF50', // Military green for upload button
                      color: 'white',
                      padding: '10px 20px',
                      border: 'none',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      width: '100%',
                    }}
                  >
                    Upload
                  </button>
                </CCardBody>
              </CCard>
            </CCol>
          </div>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default DocumentStoragePage;
