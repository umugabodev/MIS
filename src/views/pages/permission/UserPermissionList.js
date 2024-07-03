import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter
} from '@coreui/react';

const UserPermissionList = () => {
  const initialUsers = [
    {
      Name: 'Bruno HAKIZIMANA',
      userName: 'BDEADMIN@gmail.com',
      userType: 'Bde Admin',
      permissions: { canView: true, canEdit: false, canDelete: true }
    },
    {
      Name: 'Eto MUPENZI',
      userName: 'S2@gmail.com',
      userType: 'Bde S2',
      permissions: { canView: true, canEdit: false, canDelete: true }
    },
    {
      Name: 'David KAMANA',
      userName: 'S2@gmail.com',
      userType: 'S1@gmail.com',
      permissions: { canView: true, canEdit: false, canDelete: true }
    },
    {
      Name: 'Yves MUGABO',
      userName: 'ADMINSystem@gmail.com',
      userType: 'SYS Admin',
      permissions: { canView: true, canEdit: false, canDelete: true }
    }
  ];

  const [users, setUsers] = useState(initialUsers);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 2; // Number of users to display per page

  const totalPages = Math.ceil(users.length / pageSize);

  const editPermissions = (user) => {
    setCurrentUser(user);
    setModalVisible(true);
  };

  const updatePermissions = (updatedPermissions) => {
    if (currentUser) {
      const updatedUsers = users.map(user => {
        if (user.userName === currentUser.userName) {
          return { ...user, permissions: updatedPermissions };
        }
        return user;
      });
      setUsers(updatedUsers);
      setModalVisible(false);
      setCurrentUser(null);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setCurrentUser(null);
  };

  const labelStyle = { display: 'block', marginBottom: '8px', color: '#333' };
  const buttonStyle = { marginRight: '10px' };
  const tableStyle = { fontSize: '14px' }; // Adjust table font size as needed

  const renderUsers = () => {
    const startIndex = currentPage * pageSize;
    const visibleUsers = users.slice(startIndex, startIndex + pageSize);

    return (
      <tbody>
        {visibleUsers.map((user, index) => (
          <tr key={startIndex + index}>
            <td>{user.Name}</td>
            <td>{user.userName}</td>
            <td>{user.userType}</td>

            <td>
              <ul>
                <li>Can View: {user.permissions.canView ? 'Yes' : 'No'}</li>
                <li>Can Edit: {user.permissions.canEdit ? 'Yes' : 'No'}</li>
                <li>Can Delete: {user.permissions.canDelete ? 'Yes' : 'No'}</li>
              </ul>
            </td>
            <td>
              <CButton style={buttonStyle} color="primary" onClick={() => editPermissions(user)}>Edit Permissions</CButton>
            </td>
          </tr>
        ))}
      </tbody>
    );
  };

  const goToPreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <CCard className="mb-4" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <CCardHeader className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">User Permission List</h5>
      </CCardHeader>
      <CCardBody>
        <table className="table" style={tableStyle}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>User Name</th>
              <th>User Type</th>
              <th>Permissions</th>
              <th>Action</th>
            </tr>
          </thead>
          {renderUsers()}
        </table>

        {/* Pagination buttons */}
        <div className="d-flex justify-content-between mt-3">
          <CButton color="primary" onClick={goToPreviousPage} disabled={currentPage === 0}>Previous</CButton>
          <div>{`Page ${currentPage + 1} of ${totalPages}`}</div>
          <CButton color="primary" onClick={goToNextPage} disabled={currentPage === totalPages - 1}>Next</CButton>
        </div>

        {/* Modal for editing permissions */}
        <CModal visible={modalVisible} onClose={closeModal}>
          <CModalHeader onClose={closeModal}>
            <h5>Edit Permissions</h5>
          </CModalHeader>
          <CModalBody>
            {currentUser && (
              <div>
                <h6>{currentUser.userName}</h6>
                <div>
                  <label style={labelStyle}>Can View:</label>
                  <input
                    type="checkbox"
                    checked={currentUser.permissions.canView}
                    onChange={(e) => setCurrentUser({ ...currentUser, permissions: { ...currentUser.permissions, canView: e.target.checked } })}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Can Edit:</label>
                  <input
                    type="checkbox"
                    checked={currentUser.permissions.canEdit}
                    onChange={(e) => setCurrentUser({ ...currentUser, permissions: { ...currentUser.permissions, canEdit: e.target.checked } })}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Can Delete:</label>
                  <input
                    type="checkbox"
                    checked={currentUser.permissions.canDelete}
                    onChange={(e) => setCurrentUser({ ...currentUser, permissions: { ...currentUser.permissions, canDelete: e.target.checked } })}
                  />
                </div>
              </div>
            )}
          </CModalBody>
          <CModalFooter>
            <CButton color="primary" onClick={() => updatePermissions(currentUser.permissions)}>Save Changes</CButton>
            <CButton color="secondary" onClick={closeModal}>Cancel</CButton>
          </CModalFooter>
        </CModal>
      </CCardBody>
    </CCard>
  );
};

export default UserPermissionList;
