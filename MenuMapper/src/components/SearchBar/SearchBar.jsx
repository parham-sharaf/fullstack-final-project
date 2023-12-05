import React, { useState } from 'react';

const SearchBar = ({ placeholder, onChange }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder || 'Search...'}
        value={searchValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
