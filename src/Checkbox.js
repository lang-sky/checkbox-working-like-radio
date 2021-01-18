import React from "react";

const Checkbox = ({ id, value, label, onChange }) => {
  const handleChange = (event) => {
    onChange(id);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value={true}
          checked={id === value}
          onChange={handleChange}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
