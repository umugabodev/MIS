import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PDFViewer, Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import {
  CCard,
  CCol,
  CRow,
  CButton,
  CSpinner
} from '@coreui/react';

// Register font before component initialization
Font.register({
  family: 'Arial',
  src: '/path/to/arial.ttf', // Replace with the actual path to your Arial font file
});

const PersonnelDetail = () => {
  const { id } = useParams();
  const [personnel, setPersonnel] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPDF, setShowPDF] = useState(false);
  const token = localStorage.getItem('accessToken');

  // PDF styles using react-pdf/renderer StyleSheet
  const pdfStyles = StyleSheet.create({
    page: {
      fontFamily: 'Arial',
      padding: '20px',
    },
    section: {
      marginBottom: '20px',
      borderBottom: '1px solid #ccc',
      paddingBottom: '10px',
    },
    title: {
      textAlign: 'center',
      fontSize: 18,
      marginBottom: '10px',
      color: '#333',
    },
    heading: {
      fontSize: 16,
      fontWeight: 'bold',
      borderBottom: '1px solid #666',
      paddingBottom: '5px',
      marginBottom: '10px',
    },
    text: {
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    // Adjusted style for two sections in one row
    parallelSections: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '20px',
    },
    sectionContainer: {
      width: '48%', // Adjust width as needed
    },
  });

  useEffect(() => {
    const fetchPersonnelDetail = async () => {
      try {
        const response = await fetch(`http://localhost:3007/api/v1/personnel/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (response.ok) {
          const result = await response.json();
          if (result.id != null) {
            setPersonnel(result);
          } else {
            setError(result.message);
          }
        } else {
          setError('Failed to fetch Personnel details');
        }
      } catch (error) {
        setError('Error fetching Personnel details');
      } finally {
        setLoading(false);
      }
    };

    fetchPersonnelDetail();
  }, [id, token]);

  const handleExportPDF = () => {
    setShowPDF(true);
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <CSpinner color="primary" />
        <p className="mt-2">Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!personnel) {
    return <div>No data available for this personnel.</div>;
  }

  const sectionStyle = {
    border: '1px solid #ddd',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9'
  };

  return (
    <CRow>
      <CCol xs="8">
        <CCard style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto', padding: '20px' }}>
          {/* Export Button */}
          <div style={{ textAlign: 'right', marginBottom: '20px' }}>
            <CButton color="primary" onClick={handleExportPDF}>Export as PDF</CButton>
          </div>

          {/* Title */}
          <h1 style={{ textAlign: 'center', color: '#333', borderBottom: '2px solid #333', paddingBottom: '10px' }}>Personnel Details</h1>

          {/* Parallel Sections */}
          <div style={pdfStyles.parallelSections}>
            {/* Section 1 */}
            <div style={pdfStyles.sectionContainer}>
              <div style={sectionStyle}>
                <h2 style={pdfStyles.heading}>Personnel Information</h2>
                <p style={pdfStyles.text}>Service Number: {personnel.serviceNumber}</p>
                <p style={pdfStyles.text}>Rank: {personnel.rank}</p>
                <p style={pdfStyles.text}>Name: {personnel.firstname} {personnel.lastname}</p>
                <p style={pdfStyles.text}>Marital Status: {personnel.maritalStatus}</p>
                <p style={pdfStyles.text}>Current Unit: {personnel.currentunit}</p>
                <p style={pdfStyles.text}>DOB: {personnel.dob}</p>
                <p style={pdfStyles.text}>Gender: {personnel.gender}</p>
                <p style={pdfStyles.text}>Place of Birth: {personnel.placeofbirth}</p>
              </div>
            </div>

            {/* Section 2 */}
            <div style={pdfStyles.sectionContainer}>
              <div style={sectionStyle}>
                <h2 style={pdfStyles.heading}>Academic Qualification</h2>
                <p style={pdfStyles.text}>School: {personnel.school}</p>
                <p style={pdfStyles.text}>Degree: {personnel.degree}</p>
                <p style={pdfStyles.text}>Option: {personnel.option}</p>
                <p style={pdfStyles.text}>Started: {personnel.starteddegree}</p>
                <p style={pdfStyles.text}>End: {personnel.enddegree}</p>
                <p style={pdfStyles.text}>Country: {personnel.country}</p>
                <p style={pdfStyles.text}>Status: {personnel.status}</p>
              </div>
            </div>
          </div>

          {/* Parallel Sections */}
          <div style={pdfStyles.parallelSections}>
            {/* Section 1 */}
            <div style={pdfStyles.sectionContainer}>
              <div style={sectionStyle}>
              <h2 style={pdfStyles.heading}>Course and Training</h2>
            <p style={pdfStyles.text}>School: {personnel.school}</p>
            <p style={pdfStyles.text}>Degree: {personnel.degree}</p>
            <p style={pdfStyles.text}>Started: {personnel.starteddegree}</p>
            <p style={pdfStyles.text}>End: {personnel.enddegree}</p>
            <p style={pdfStyles.text}>Country: {personnel.country}</p>
            <p style={pdfStyles.text}>Status: {personnel.status}</p>
              </div>
            </div>

            {/* Section 2 */}
            <div style={pdfStyles.sectionContainer}>
              <div style={sectionStyle}>
              <h2 style={pdfStyles.heading}>Deployment Data</h2>
            <p style={pdfStyles.text}>Division: {personnel.div}</p>
            <p style={pdfStyles.text}>Brigade: {personnel.bde}</p>
            <p style={pdfStyles.text}>Battalion: {personnel.btn}</p>
            <p style={pdfStyles.text}>Regiment: {personnel.regiment}</p>
            <p style={pdfStyles.text}>Appointment: {personnel.appointment}</p>
              </div>
            </div>
          </div>

          {/* PDF Viewer */}
          {showPDF && (
            <PDFViewer style={{ width: '100%', height: '500px', marginTop: '20px' }}>
              <Document>
                <Page size="A4" style={pdfStyles.page}>
                  <View>
                    <Text style={pdfStyles.title}>Personnel Details</Text>
                    <View style={pdfStyles.section}>
                      <Text style={pdfStyles.heading}>Personnel Information</Text>
                      <Text style={pdfStyles.text}>Service Number: {personnel.serviceNumber}</Text>
                      <Text style={pdfStyles.text}>Rank: {personnel.rank}</Text>
                      <Text style={pdfStyles.text}>Name: {personnel.firstname} {personnel.lastname}</Text>
                      <Text style={pdfStyles.text}>Marital Status: {personnel.maritalStatus}</Text>
                      <Text style={pdfStyles.text}>Current Unit: {personnel.currentunit}</Text>
                      <Text style={pdfStyles.text}>DOB: {personnel.dob}</Text>
                      <Text style={pdfStyles.text}>Gender: {personnel.gender}</Text>
                      <Text style={pdfStyles.text}>Place of Birth: {personnel.placeofbirth}</Text>
                    </View>

                    {/* Academic Qualification Section */}
                    <View style={pdfStyles.section}>
                      <Text style={pdfStyles.heading}>Academic Qualification</Text>
                      <Text style={pdfStyles.text}>School: {personnel.school}</Text>
                      <Text style={pdfStyles.text}>Degree: {personnel.degree}</Text>
                      <Text style={pdfStyles.text}>Started: {personnel.starteddegree}</Text>
                      <Text style={pdfStyles.text}>End: {personnel.enddegree}</Text>
                      <Text style={pdfStyles.text}>Country: {personnel.country}</Text>
                      <Text style={pdfStyles.text}>Status: {personnel.status}</Text>
                    </View>

                    {/* Add other sections similarly with appropriate styles */}
                    
                  </View>
                </Page>
              </Document>
            </PDFViewer>
          )}
        </CCard>
      </CCol>
    </CRow>
  );
};

export default PersonnelDetail;
