import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
} from '@coreui/react';

const UnitList = ({ units }) => {
  return (
    <CCard className="shadow mb-4" style={{ maxWidth: '800px', margin: '20px auto' }}>
      <CCardHeader className="bg-primary text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Unit Registration List</h5>
      </CCardHeader>
      <CCardBody className="p-4">
        <div className="row">
          {units.map((unit, unitIndex) => (
            <div key={unit.id} className="col-md-6 mb-4">
              <div className="border p-3 rounded">
                <h4>Unit {unitIndex + 1}</h4>
                <p><strong>Unit Name:</strong> {unit.unitName}</p>
                <p><strong>Address:</strong> {unit.address}</p>
                <p><strong>Description:</strong> {unit.description}</p>
                {unit.brigades.map((brigade, brigadeIndex) => (
                  <div key={brigade.id} className="mb-3 border p-3 rounded">
                    <h5>Brigade {brigadeIndex + 1}</h5>
                    <p><strong>Brigade Name:</strong> {brigade.brigadeName}</p>
                    <ul>
                      {brigade.battalions.map((battalion, battalionIndex) => (
                        <li key={battalion.id}>
                          <strong>Battalion Name:</strong> {battalion.battalionName}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CCardBody>
    </CCard>
  );
};

export default UnitList;
