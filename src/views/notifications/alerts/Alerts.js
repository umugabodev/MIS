import React, { useState } from 'react';
import {
  CToaster,
  CToast,
  CToastHeader,
  CToastBody
} from '@coreui/react';

const Alerts = () => {
  const [showToasts, setShowToasts] = useState(false);

  const toggleToasts = () => {
    setShowToasts(!showToasts);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={toggleToasts}>
        Show Notifications
      </button>

      {showToasts && (
        <CToaster className="position-absolute top-0 end-0 mt-5 me-3">
          <CToast autohide={false} visible={true}>
            <CToastHeader closeButton>
              <svg
                className="rounded me-2"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
              >
                <rect width="100%" height="100%" fill="#007aff"></rect>
              </svg>
              <div className="fw-bold me-auto">CoreUI for React.js</div>
              <small>7 min ago</small>
            </CToastHeader>
            <CToastBody>Hello, world! This is a toast message.</CToastBody>
          </CToast>

          <CToast autohide={false} visible={true}>
            <CToastHeader closeButton>
              <svg
                className="rounded me-2"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
              >
                <rect width="100%" height="100%" fill="#007aff"></rect>
              </svg>
              <div className="fw-bold me-auto">CoreUI for React.js</div>
              <small>7 min ago</small>
            </CToastHeader>
            <CToastBody>Hello, world! This is a toast message.</CToastBody>
          </CToast>
        </CToaster>
      )}
    </>
  );
}

export default Alerts;
