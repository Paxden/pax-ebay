import { useState } from 'react';

function ToggleSwitch({ initialChecked = false, onChange }) {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <label className="toggle-switch">
      <input 
        type="checkbox" 
        checked={isChecked}
        onChange={handleChange}
      />
      <span className="slider round" />
    </label>
  );
}

export default ToggleSwitch;