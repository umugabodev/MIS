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

const PermissionForm = () => {
  const [userName, setUserName] = useState('');
  const [permissions, setPermissions] = useState({
    canView: false,
    canEdit: false,
    canDelete: false
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Simulating submission to an API
      console.log({
        userName,
        permissions
      });

      // Reset form fields
      setUserName('');
      setPermissions({
        canView: false,
        canEdit: false,
        canDelete: false
      });
      
      // Show modal after successful submission
      setModalVisible(true);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = () => {
    let validationErrors = {};

    if (!userName.trim()) {
      validationErrors.userName = 'User Name is required';
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
        <h5 className="mb-0">Permission Assignment Form</h5>
      </CCardHeader>
      <CCardBody style={{ flex: 1, padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f2f0f0' }}>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={labelStyle}>User Name:</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={inputStyle}
              placeholder="Enter user name"
            />
            {errors.userName && <p style={errorStyle}>{errors.userName}</p>}
          </div>
          <div>
            <label style={labelStyle}>Permissions:</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="canView"
                  checked={permissions.canView}
                  onChange={(e) => setPermissions({ ...permissions, canView: e.target.checked })}
                />
                &nbsp; Can View
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="canEdit"
                  checked={permissions.canEdit}
                  onChange={(e) => setPermissions({ ...permissions, canEdit: e.target.checked })}
                />
                &nbsp; Can Edit
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="canDelete"
                  checked={permissions.canDelete}
                  onChange={(e) => setPermissions({ ...permissions, canDelete: e.target.checked })}
                />
                &nbsp; Can Delete
              </label>
            </div>
          </div>
          <button type="submit" style={buttonStyle}>Assign Permissions</button>
        </form>
      </CCardBody>

      {/* Modal for submission confirmation */}
      <CModal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <CModalHeader onClose={() => setModalVisible(false)}>
          <h5>Permissions Assigned</h5>
        </CModalHeader>
        <CModalBody>
          Permissions have been successfully assigned to {userName}.
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={() => setModalVisible(false)}>Close</CButton>
        </CModalFooter>
      </CModal>
    </CCard>
  );
};

export default PermissionForm;
