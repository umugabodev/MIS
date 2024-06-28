import React, { useState, useRef } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import 'jspdf-autotable';

const Monthly = () => {
  const initialData = [
    { date: "2024-06-01", unit: "System Security Regt", onParade: "", absent: "", course: "", passLeave: "" },
    { date: "2024-06-01", unit: "Information System Regt", onParade: "", absent: "", course: "", passLeave: "" },
    { date: "2024-06-01", unit: "Test", onParade: "", absent: "", course: "", passLeave: "" },
    { date: "2024-06-02", unit: "System Security Regt", onParade: "", absent: "", course: "", passLeave: "" },
    { date: "2024-06-02", unit: "Information System Regt", onParade: "", absent: "", course: "", passLeave: "" },
    { date: "2024-06-02", unit: "Test", onParade: "", absent: "", course: "", passLeave: "" },
    // Add more sample data for multiple days
  ];
  
 
  const [data, setData] = useState(initialData);
 
 

  const generateMonthlySummary = () => {
    const monthlySummary = {};
    data.forEach(item => {
      const { date, onParade, absent, course, passLeave } = item;
      if (!monthlySummary[date]) {
        monthlySummary[date] = {
          onParade: Number(onParade) || 0,
          absent: Number(absent) || 0,
          course: Number(course) || 0,
          passLeave: Number(passLeave) || 0
        };
      } else {
        monthlySummary[date].onParade += Number(onParade) || 0;
        monthlySummary[date].absent += Number(absent) || 0;
        monthlySummary[date].course += Number(course) || 0;
        monthlySummary[date].passLeave += Number(passLeave) || 0;
      }
    });
    return monthlySummary;
  };

  const cardHeaderStyle = {
    backgroundColor: '#2c3e50',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  };

  const cardBodyStyle = {
    backgroundColor: '#ecf0f1',
  };

  const tableHeaderStyle = {
    backgroundColor: '#34495e',
    color: 'white',
  };

  return (
    <div className="container py-4">
      <CCard className="mb-4" style={{ background: '#f0f0f0', border: '1px solid #ccc' }}>
        <CCardHeader style={cardHeaderStyle}>
          <h5 style={{ margin: 0 }}>Monthly Summary</h5>
        </CCardHeader>
        <CCardBody style={cardBodyStyle}>
          <div className="table-responsive">
            <CTable striped bordered hover style={{ background: '#fff', border: '1px solid #ccc' }}>
              <CTableHead style={tableHeaderStyle}>
                <CTableRow>
                  <CTableHeaderCell>Date</CTableHeaderCell>
                  <CTableHeaderCell>Total On Parade</CTableHeaderCell>
                  <CTableHeaderCell>Total Absent</CTableHeaderCell>
                  <CTableHeaderCell>Total On Course</CTableHeaderCell>
                  <CTableHeaderCell>Total Pass Leave</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {Object.entries(generateMonthlySummary()).map(([date, totals], index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell>{date}</CTableHeaderCell>
                    <CTableHeaderCell>{totals.onParade}</CTableHeaderCell>
                    <CTableHeaderCell>{totals.absent}</CTableHeaderCell>
                    <CTableHeaderCell>{totals.course}</CTableHeaderCell>
                    <CTableHeaderCell>{totals.passLeave}</CTableHeaderCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </div>
        </CCardBody>
      </CCard>
      </div>
  );
};

export default Monthly;
