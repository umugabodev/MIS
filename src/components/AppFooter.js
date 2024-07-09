import React from 'react';
import { CFooter } from '@coreui/react';
import '../assets/styles/themes.css';

const AppFooter = () => {
  return (
    <CFooter className="px-4" style={{ backgroundColor: '#18453b', color: '#FFFFFF' }}>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF' }}>
          MIS
        </a>
        <span className="ms-1">&copy; 2024.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1" style={{ color: '#FFFFFF' }}>Powered by</span>
        <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF' }}>
          RDF
        </a>
      </div>
    </CFooter>
  );
}

export default React.memo(AppFooter);
