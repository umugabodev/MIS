import React from 'react';
import { AppFooter, AppHeader, AppSidebar } from '../../../components';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '10px',
    flex: 1,
  },
  tableHeader: {
    borderBottom: '1px solid #ddd',
    marginBottom: '10px',
    background: '#f0f0f0',
    fontWeight: 'bold',
  },
  tableHeaderCell: {
    padding: '10px',
    textAlign: 'left',
  },
};

const PersonnelList = () => {
  return (
    <div style={styles.container}>
      <AppHeader />
      <div style={styles.contentWrapper}>
        <AppSidebar />
        <div className="col-lg-10">
          <div className="card rounded shadow border-0">
            <div className="card-body p-5 bg-white rounded">
              <div className="table-responsive">
                <button className="btn btn-primary btn-sm position-relative" style={{ zIndex: '999' }}>
                  <i className="fas fa-plus-circle position-absolute" ></i>
                  New Button
                </button>
                <table className="table table-bordered">
                  <thead style={styles.tableHeader}>
                    <tr>
                      <th style={styles.tableHeaderCell}>Name</th>
                      <th style={styles.tableHeaderCell}>Position</th>
                      <th style={styles.tableHeaderCell}>Office</th>
                      <th style={styles.tableHeaderCell}>Age</th>
                      <th style={styles.tableHeaderCell}>Start date</th>
                      <th style={styles.tableHeaderCell}>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>2011/04/25</td>
                      <td>$320,800</td>
                    </tr>
                    {/* Add more table rows */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}

export default PersonnelList;
