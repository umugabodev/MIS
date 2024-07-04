
import React from 'react';
import { CFooter } from '@coreui/react';
import '../assets/styles/themes.css';

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          MIS
        </a>
        <span className="ms-1">&copy; 2024.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="#" target="_blank" rel="noopener noreferrer">
          RDF
        </a>
      </div>
    </CFooter>
  );
}

export default React.memo(AppFooter);
