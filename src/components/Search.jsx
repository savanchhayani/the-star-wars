import React from 'react';

/**
 * Search input component
 * @param {Object} props - components properties
 */
const Search = (props) => 
  <input
    type="text"
    className= "input-component"
    placeholder={props.placeholder || ''}
    value={props.value}
    onChange={props.onChange}
  />

export default Search;
