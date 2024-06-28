import React from 'react';

const Brigade = ({ brigade, setBrigades }) => {
  const handleBrigadeNameChange = (e) => {
    const updatedBrigades = [...brigades];
    updatedBrigades.find(bg => bg.id === brigade.id).name = e.target.value;
    setBrigades(updatedBrigades);
  };

  const handleAddBattalion = () => {
    const updatedBrigades = [...brigades];
    const brigadeIndex = updatedBrigades.findIndex(bg => bg.id === brigade.id);
    updatedBrigades[brigadeIndex].battalions.push({ id: updatedBrigades[brigadeIndex].battalions.length + 1, name: '' });
    setBrigades(updatedBrigades);
  };

  const handleBattalionNameChange = (e, battalionId) => {
    const updatedBrigades = [...brigades];
    const brigadeIndex = updatedBrigades.findIndex(bg => bg.id === brigade.id);
    const battalionIndex = updatedBrigades[brigadeIndex].battalions.findIndex(bt => bt.id === battalionId);
    updatedBrigades[brigadeIndex].battalions[battalionIndex].name = e.target.value;
    setBrigades(updatedBrigades);
  };

  return (
    <div className="mb-3">
      <label>Brigade Name:</label>
      <input
        type="text"
        className="form-control"
        value={brigade.name || ''}
        onChange={handleBrigadeNameChange}
      />
      <button type="button" className="btn btn-secondary btn-sm ml-2" onClick={handleAddBattalion}>
        Add Battalion
      </button>
      <ul className="list-unstyled mt-3">
        {brigade.battalions.map((battalion, index) => (
          <li key={battalion.id} className="mb-2">
            <label>Battalion Name:</label>
            <input
              type="text"
              className="form-control"
              value={battalion.name || ''}
              onChange={(e) => handleBattalionNameChange(e, battalion.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brigade;
