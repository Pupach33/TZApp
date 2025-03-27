'use client';

import React, { useState, useEffect } from 'react';
import useBlogStore from '../store/blogStore';
import { useDebounce } from '../hooks/useDebounce';

const SearchBar = () => {
  const { setSearchQuery } = useBlogStore();
  const [value, setValue] = useState('');
  
  
  const debouncedValue = useDebounce(value, 500);

  
  useEffect(() => {
    setSearchQuery(debouncedValue);
  }, [debouncedValue, setSearchQuery]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Поиск..."
      value={value}
      onChange={handleChange}
      className="w-full text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
    />
  );
};

export default SearchBar;