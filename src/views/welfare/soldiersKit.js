import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const mission = () => {
  const [soldierskit, setsoldierskit] = useState([
    {
      svcno: '12345',
      rank: 'Sergeant',
      names: 'John BUKURU',
      unit: 'Comms',
      shoes: '48',
      bdu: 'Medium',
      cap: '59',
      officeDress: 'Large',
    },
    {
      svcno: '54321',
      rank: 'Corporal',
      names: 'Jane MBABAZI',
      unit: 'Bravo Company',
      shoes: '41',
      bdu: 'Small',
      cap: '57',
      officeDress: 'Small',
    },
    // Add more static data as needed
  ]);

  const tableRef = useRef(null);

  const exportToPDF = () => {
    const doc = new jsPDF();

    // Add heading to the PDF
    const heading = "Soldiers kit";
    const textWidth = doc.getStringUnitWidth(heading) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const textOffset = (doc.internal.pageSize.width - textWidth) / 2;
    doc.text(heading, textOffset, 10);

    // Add table to the PDF
    doc.autoTable({ html: tableRef.current });

    doc.save("Soldiers kit.pdf");
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
              <th>NAMES</th>
              <th>CURRENT UNIT</th>
              <th>SHOES SIZE</th>
              <th>BDU SIZE</th>
              <th>CAP SIZE</th>
              <th>OFFICE DRESS</th>
            </tr>
          </thead>
          <tbody>
            {soldierskit.map((soldier, index) => (
              <tr key={index}>
                <td>{soldier.svcno}</td>
                <td>{soldier.rank}</td>
                <td>{soldier.names}</td>
                <td>{soldier.unit}</td>
                <td>{soldier.shoes}</td>
                <td>{soldier.bdu}</td>
                <td>{soldier.cap}</td>
                <td>{soldier.officeDress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default mission;
