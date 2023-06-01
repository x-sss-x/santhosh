"use client";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { searchService } from '../store/Search.slice';
import Search from "../components/Search"

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const searchResults = useSelector((state: RootState) => state.search.searchResults);
  const isLoading = useSelector((state: RootState) => state.search.isLoading);
  const error = useSelector((state: RootState) => state.search.error);
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = () => {
    dispatch(searchService(searchQuery));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Search
        placeholder="Search services..."
        inputVariant="another"
        value={searchQuery}
        onChange={handleChange}
        onSearch={handleSearch}
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default Page;
