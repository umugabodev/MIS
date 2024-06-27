import React, { useState } from 'react';
import {
  CCard,
  CCardBody
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#e3e3e3', // Military-inspired background color
        border: '1px solid #555555', // Military-inspired border color
        borderRadius: '5px',
        fontFamily: 'Arial, sans-serif', // Military standard font
      }}
    >
      {/* Document List */}
      <div
        style={{
          flex: '1',
          marginRight: '20px',
          backgroundColor: '#ffffff',
          padding: '10px',
          border: '1px solid #555555',
          borderRadius: '5px',
        }}
      >
        <h2 style={{ color: '#003366', marginBottom: '10px' }}>Documents</h2>
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
      </div>

      {/* Document Viewer */}
      <div
        style={{
          flex: '2',
          marginRight: '20px',
          backgroundColor: '#ffffff',
          padding: '20px',
          border: '1px solid #555555',
          borderRadius: '5px',
        }}
      >
        {selectedDocument ? (
          <>
            <h2 style={{ color: '#003366', marginBottom: '10px' }}>
              {selectedDocument.name}
            </h2>
            <p style={{ color: '#333333' }}>{selectedDocument.content}</p>
          </>
        ) : (
          <div
            style={{
              textAlign: 'center',
              fontStyle: 'italic',
              color: '#888888',
            }}
          >
            Select a document to view
          </div>
        )}
      </div>

      {/* Upload Form */}
      <div
        style={{
          flex: '1',
          backgroundColor: '#ffffff',
          padding: '20px',
          border: '1px solid #555555',
          borderRadius: '5px',
        }}
      >
        <h2 style={{ color: '#003366', marginBottom: '10px' }}>Upload Document</h2>
        <input
          type="file"
          onChange={handleFileChange}
          style={{ marginBottom: '10px' }}
        />
        <button
          onClick={handleDocumentUpload}
          style={{
            backgroundColor: '#4CAF50', // Military green for upload button
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
            fontFamily: 'Arial, sans-serif', // Military standard font
          }}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default DocumentStoragePage;

