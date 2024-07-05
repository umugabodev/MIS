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
  const [academic, setAcademic] = useState(null);
  const [training, setTraining] = useState(null);
  const [deployment, setDeployment] = useState(null);
  const [emergency, setEmergency] = useState(null);
  const [medicaldata, setMedicaldata] = useState(null);
  const [militaryinfo, setMilitaryinfo] = useState(null);
  const [promotion, setPromotion] = useState(null);
  const [residence, setResidence] = useState(null);
   const [missions, setMissions] = useState(null);
   const [kits, setKits] = useState(null);
   const [nextofkin, setNextofkin] = useState(null);
    const [spouse, setSpouse] = useState(null);
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
            fetchAcademicQualificationDetail(result.personnelId); // Assuming personnelId is the identifier for academic qualifications
            fetchcoursesAndTrainingDetail(result.personnelId);
            fetchdeployment(result.personnelId);
            fetchemergency(result.personnelId);
            fetchMedicaldata(result.personnelId);
            fetchMilitaryinfo(result.personnelId);
            fetchMissions(result.personnelId);
            fetchResidence(result.personnelId);
            fetchPromotion(result.personnelId);
            fetchSpouse(result.personnelId);
            fetchNextofkin(result.personnelId);
            fetchKits(result.personnelId);
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
  
  const fetchAcademicQualificationDetail = async () => {
    try {
      const response = await fetch(`http://localhost:3007/api/v1/academicqualifications/personnel/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const result = await response.json();
        setAcademic(result); // Assuming the response is an array of academic qualifications
      } else {
        setError('Failed to fetch Academic Qualifications details');
      }
    } catch (error) {
      setError('Error fetching Academic Qualifications details');
    }
  };
  
const fetchcoursesAndTrainingDetail = async () => {
    try {
      const response = await fetch(`http://localhost:3007/api/v1/courses/personnel/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const result = await response.json();
        setTraining(result); // Assuming the response is an array of coursesAndTraining
      } else {
        setError('Failed to fetch Courses And Training details');
      }
    } catch (error) {
      setError('Error fetching Courses And Training details');
    }
  };

const fetchdeployment = async () => {
    try {
      const response = await fetch(`http://localhost:3007/api/v1/deployment/personnel/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const result = await response.json();
        setDeployment(result); // Assuming the response is an array of deployment
      } else {
        setError('Failed to fetch deployment details');
      }
    } catch (error) {
      setError('Error fetching deployment details');
    }
  };
  const fetchemergency = async () => {
    try {
      const response = await fetch(`http://localhost:3007/api/v1/emergency/personnel/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const result = await response.json();
        setEmergency(result); // Assuming the response is an array of emergency
      } else {
        setError('Failed to fetch emergency details');
      }
    } catch (error) {
      setError('Error fetching emergencyt details');
    }
  };

  const fetchMedicaldata = async () => {
    try {
      const response = await fetch(`http://localhost:3007/api/v1/medicaldata/personnel/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const result = await response.json();
        setMedicaldata(result); // Assuming the response is an array of medicaldata
      } else {
        setError('Failed to fetch medicaldata details');
      }
    } catch (error) {
      setError('Error fetching medicaldata details');
    }
  };
  const fetchMilitaryinfo = async () => {
    try {
      const response = await fetch(`http://localhost:3007/api/v1/militaryinfo/personnel/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const result = await response.json();
        setMilitaryinfo(result); // Assuming the response is an array of militaryinfo
      } else {
        setError('Failed to fetch militaryinfo details');
      }
    } catch (error) {
      setError('Error fetching militaryinfo details');
    }
  };

  const fetchMissions = async () => {
    try {
      const response = await fetch(`http://localhost:3007/api/v1/missions/personnel/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const result = await response.json();
        setMissions(result); // Assuming the response is an array of missions
      } else {
        setError('Failed to fetch missions details');
      }
    } catch (error) {
      setError('Error fetching missions details');
    }
  };

  const fetchPromotion = async () => {
    try {
      const response = await fetch(`http://localhost:3007/api/v1/promotion/personnel/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const result = await response.json();
        setPromotion(result); // Assuming the response is an array of promotion
      } else {
        setError('Failed to fetch promotion details');
      }
    } catch (error) {
      setError('Error fetching promotion details');
    }
  };

  const fetchResidence = async () => {
    try {
      const response = await fetch(`http://localhost:3007/api/v1/residence/personnel/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const result = await response.json();
        setResidence(result); // Assuming the response is an array of residence
      } else {
        setError('Failed to fetch residence details');
      }
    } catch (error) {
      setError('Error fetching residence details');
    }
  };

  const fetchKits = async () => {
    try {
      const response = await fetch(`http://localhost:3007/api/v1/kits/personnel/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const result = await response.json();
        setKits(result);
      } else {
        setError('Failed to fetch Kits details');
      }
    } catch (error) {
      setError('Error fetching Kits details');
    }
  };
  
  const fetchNextofkin = async () => {
    try {
      const response = await fetch(`http://localhost:3007/api/v1/nextofkin/personnel/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const result = await response.json();
        setNextofkin(result); // Assuming the response is an array of nextofkin
      } else {
        setError('Failed to fetch nextofkin');
      }
    } catch (error) {
      setError('Error fetching nextofkin details');
    }
  };

  const fetchSpouse = async () => {
    try {
      const response = await fetch(`http://localhost:3007/api/v1/spouse/personnel/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result)
        setSpouse(result); // Assuming the response is an array of spouse
      } else {
        setError('Failed to fetch spouse');
      }
    } catch (error) {
      setError('Error fetching spouse details');
    }
  };

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
      <CCol xs="10">
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
            {academic && academic.map((qualification, index) => (
  <div key={index} style={pdfStyles.sectionContainer}>
    <div style={sectionStyle}>
      <h2 style={pdfStyles.heading}>Academic Qualification {index + 1}</h2>
      <p style={pdfStyles.text}>School: {qualification.school}</p>
      <p style={pdfStyles.text}>Degree: {qualification.degree}</p>
      <p style={pdfStyles.text}>Option: {qualification.option}</p>
      <p style={pdfStyles.text}>Started: {qualification.fromDate}</p>
      <p style={pdfStyles.text}>End: {qualification.toDate}</p>
      <p style={pdfStyles.text}>Country: {qualification.place}</p>
      <p style={pdfStyles.text}>Status: {qualification.status}</p>
    </div>
  </div>
))}

     </div>    
     <div style={pdfStyles.parallelSections}>
     {/* Section 3 */}
     {training && training.map((training, index) => (
  <div key={index} style={pdfStyles.sectionContainer}>
    <div style={sectionStyle}>
      <h2 style={pdfStyles.heading}>Course and Training {index + 1}</h2>
      <p style={pdfStyles.text}>Course Name: {training.courseName}</p>
      <p style={pdfStyles.text}>From Date: {training.fromDate}</p>
      <p style={pdfStyles.text}>To Date: {training.toDate}</p>
      <p style={pdfStyles.text}>Place: {training.place}</p>
      <p style={pdfStyles.text}>Status: {training.status}</p>
    </div>
  </div>
))}
    {/* Section 4 */}
    {deployment && deployment.map((deployment, index) => (
  <div key={index} style={pdfStyles.sectionContainer}>
    <div style={sectionStyle}>
      <h2 style={pdfStyles.heading}>Deployment Data {index + 1}</h2>
      <p style={pdfStyles.text}>Division: {deployment.div}</p>
      <p style={pdfStyles.text}>Brigade: {deployment.bde}</p>
      <p style={pdfStyles.text}>Regment: {deployment.regiment}</p>
      <p style={pdfStyles.text}>Appointment: {deployment.appointment}</p>
      
    </div>
  </div>
))}
</div>

<div style={pdfStyles.parallelSections}>
     {/* Section 5 */}
     {emergency && emergency.map((emergency, index) => (
  <div key={index} style={pdfStyles.sectionContainer}>
    <div style={sectionStyle}>
      <h2 style={pdfStyles.heading}>Emergency Contact {index + 1}</h2>
      <p style={pdfStyles.text}>First Name: {emergency.firstname}</p>
      <p style={pdfStyles.text}>Last Name: {emergency.lastname}</p>
      <p style={pdfStyles.text}>Contact: {emergency.contact}</p>
      <p style={pdfStyles.text}>Relationship: {emergency.relationship}</p>
      <p style={pdfStyles.text}>address: {emergency.address}</p>
    </div>
  </div>
))}
    {/* Section 6 */}
    {medicaldata && medicaldata.map((medicaldata, index) => (
  <div key={index} style={pdfStyles.sectionContainer}>
    <div style={sectionStyle}>
      <h2 style={pdfStyles.heading}>Medical Data {index + 1}</h2>
      <p style={pdfStyles.text}>Blood Group: {medicaldata.bloodGroup}</p>
      <p style={pdfStyles.text}>MMI No: {medicaldata.mmiNumber}</p>
      <p style={pdfStyles.text}>Height: {medicaldata.height}</p>
      <p style={pdfStyles.text}>Weight: {medicaldata.weight}</p>
      
    </div>
  </div>
))}
</div>

<div style={pdfStyles.parallelSections}>
     {/* Section 7 */}
     {missions && missions.map((missions, index) => (
  <div key={index} style={pdfStyles.sectionContainer}>
    <div style={sectionStyle}>
      <h2 style={pdfStyles.heading}>Mission and Operation {index + 1}</h2>
      <p style={pdfStyles.text}>Name: {missions.name}</p>
      <p style={pdfStyles.text}>Type: {missions.type}</p>
      <p style={pdfStyles.text}>Location: {missions.location}</p>
      <p style={pdfStyles.text}>Unity: {missions.unity}</p>
      <p style={pdfStyles.text}>From: {missions.fromDate}</p>
      <p style={pdfStyles.text}>To: {missions.toDate}</p>
       <p style={pdfStyles.text}>Status: {missions.status}</p>
     
    </div>
  </div>
))}
    {/* Section 8 */}
    {militaryinfo && militaryinfo.map((militaryinfo, index) => (
  <div key={index} style={pdfStyles.sectionContainer}>
    <div style={sectionStyle}>
      <h2 style={pdfStyles.heading}>Military Information {index + 1}</h2>
      <p style={pdfStyles.text}>Date Of Entry: {militaryinfo. poe}</p>
      <p style={pdfStyles.text}>Place Of Entry: {militaryinfo.doe}</p>
      <p style={pdfStyles.text}>CSS ACC No: {militaryinfo.css_acc_no}</p>
     
    </div>
  </div>
))}
</div>

<div style={pdfStyles.parallelSections}>
     {/* Section 9 */}
     {residence && residence.map((residence, index) => (
  <div key={index} style={pdfStyles.sectionContainer}>
    <div style={sectionStyle}>
      <h2 style={pdfStyles.heading}>Residence Address {index + 1}</h2>
      <p style={pdfStyles.text}>NationId: {residence.nationalid}</p>
      <p style={pdfStyles.text}>Contact: {residence.contact}</p>
      <p style={pdfStyles.text}>Province: {residence.province}</p>
      <p style={pdfStyles.text}>District: {residence.district}</p>
     <p style={pdfStyles.text}>Sector: {residence.sector}</p>
      <p style={pdfStyles.text}>Cell: {residence.cell}</p>
      <p style={pdfStyles.text}>Village: {residence.village}</p>
     
     
    </div>
  </div>
))}
    {/* Section 10 */}
    {promotion && promotion.map((promotion, index) => (
  <div key={index} style={pdfStyles.sectionContainer}>
    <div style={sectionStyle}>
      <h2 style={pdfStyles.heading}>Promotion Records {index + 1}</h2>
      <p style={pdfStyles.text}>Former Rank: {promotion.formerRank}</p>
      <p style={pdfStyles.text}>From: {promotion.fromDate}</p>
      <p style={pdfStyles.text}>To: {promotion.toDate}</p>
      <p style={pdfStyles.text}>Newley Ranky: {promotion.newRank}</p>
      <p style={pdfStyles.text}>Date of Promotion: {promotion.dateOfPromotion}</p>

    </div>
  </div>
))}
</div>

<div style={pdfStyles.parallelSections}>
     {/* Section 11 */}
     {spouse && spouse.map((spouse, index) => (
  <div key={index} style={pdfStyles.sectionContainer}>
    <div style={sectionStyle}>
      <h2 style={pdfStyles.heading}>Spouse Address {index + 1}</h2>
      <p style={pdfStyles.text}>NationId: {spouse.nationalid}</p>
      <p style={pdfStyles.text}>Contact: {spouse.contact}</p>
      <p style={pdfStyles.text}>Province: {spouse.province}</p>
      <p style={pdfStyles.text}>District: {spouse.district}</p>
     <p style={pdfStyles.text}>Sector: {spouse.sector}</p>
      <p style={pdfStyles.text}>Cell: {spouse.cell}</p>
      <p style={pdfStyles.text}>Village: {spouse.village}</p>
     
     
    </div>
  </div>
))}
    {/* Section 12 */}
    {nextofkin && nextofkin.map((nextofkin, index) => (
  <div key={index} style={pdfStyles.sectionContainer}>
    <div style={sectionStyle}>
    <h2 style={pdfStyles.heading}>Next of kin Address {index + 1}</h2>
      <p style={pdfStyles.text}>NationId: {nextofkin.nationalid}</p>
      <p style={pdfStyles.text}>Contact: {nextofkin.contact}</p>
      <p style={pdfStyles.text}>Province: {nextofkin.province}</p>
      <p style={pdfStyles.text}>District: {nextofkin.district}</p>
     <p style={pdfStyles.text}>Sector: {nextofkin.sector}</p>
      <p style={pdfStyles.text}>Cell: {nextofkin.cell}</p>
      <p style={pdfStyles.text}>Village: {nextofkin.village}</p>

    </div>
  </div>
))}
</div>

<div style={pdfStyles.parallelSections}>
     {/* Section 13 */}
     {kits && kits.map((kits, index) => (
  <div key={index} style={pdfStyles.sectionContainer}>
    <div style={sectionStyle}>
      <h2 style={pdfStyles.heading}>Soldiers Kits {index + 1}</h2>
      <p style={pdfStyles.text}>BDU: {kits.bdu}</p>
      <p style={pdfStyles.text}>Officer Dress: {kits.officedress}</p>
      <p style={pdfStyles.text}>Jungle Boots: {kits.jungleboots}</p>
      <p style={pdfStyles.text}>Plastic Boots: {kits.plasticboots}</p>
     <p style={pdfStyles.text}>Officers Shoes: {kits.officeshoes}</p>
      <p style={pdfStyles.text}>BDU Size: {kits.bdusize}</p>
      <p style={pdfStyles.text}>Officer Dress Size: {kits.officedresssize}</p>
      <p style={pdfStyles.text}>Jungle Boots Size: {kits.junglebootssize}</p>
      <p style={pdfStyles.text}>Plastic Boots Size: {kits.plasticbootssize}</p>
      <p style={pdfStyles.text}>Officers Shoes Size: {kits.officeshoessize}</p>
     
    </div>
  </div>
))} 
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
