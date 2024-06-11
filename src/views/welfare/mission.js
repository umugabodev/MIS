import React, { useState, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const mission = () => {
 
  const tableRef = useRef(null);

  const exportToPDF = () => {
    const doc = new jsPDF();
    
    // Add heading to the PDF
    const heading = "Mission List";
    const textWidth = doc.getStringUnitWidth(heading) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const textOffset = (doc.internal.pageSize.width - textWidth) / 2;
    doc.text(heading, textOffset, 10);
    
    // Add table to the PDF
    doc.autoTable({ html: tableRef.current });
  
    doc.save("Mission.pdf");
  };
  return (
    <>
  
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div className="btn-group">
           <Button variant="success" onClick={exportToPDF}>Export to PDF</Button>
        </div>
      </div>

      <div className="container mt-4">
        <table className="table table-hover" ref={tableRef}>
          <thead>
            <tr>
              <th>SVCNO</th>
              <th>RANK</th>
              <th>FNAME</th>
              <th>LNAME</th>
              <th>FROM</th>
              <th>TO</th>
              <th>NO of MISSION</th>
              <th>TYPE</th>
              <th>LAST MISSION</th>
            </tr>
          </thead>
        </table>
      </div>

      
    </>
  );
};

export default mission;
