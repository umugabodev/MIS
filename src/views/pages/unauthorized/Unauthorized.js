import React from 'react';

const Unauthorized = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#343a40', // Dark gray background
    color: '#ffffff', // White text color
    padding: '20px',
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif', // Clean, military-like font
  };

  const headerStyle = {
    fontSize: '3rem', // Large font size for emphasis
    marginBottom: '20px',
    fontWeight: 'bold', // Bold text for emphasis
    borderBottom: '2px solid #ffc107', // Golden bottom border for a touch of military insignia
    paddingBottom: '5px',
  };

  const paragraphStyle = {
    fontSize: '1.5rem', // Larger text for readability
    maxWidth: '80%', // Control text width for better readability
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Unauthorized Access</h1>
      <p style={paragraphStyle}>You do not have the necessary permissions to view this page. Please contact your administrator for further assistance.</p>
    </div>
  );
};

export default Unauthorized;
