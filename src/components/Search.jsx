import React from "react";

/**
 * Search input component
 */
class Search extends React.PureComponent {
  render() {
    const { placeholder, value, onChange } = this.props;
    return (
      <input
        type="text"
        className="input-component"
        placeholder={placeholder || ""}
        value={value}
        onChange={onChange}
      />
    );
  }
}
export default Search;
