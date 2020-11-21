import React from "react";
import "./FilterOptions.css";

class FilterOptions extends React.Component {
  render() {
    return (
      <div className="FilterOptions">
        <div className="FilterOptions__option">
          <label htmlFor="filter_all">
            <input type="radio" value="All" id="filter_all" name="filter" />
            All
          </label>
        </div>
        <div className="FilterOptions__option">
          <label htmlFor="filter_uploaded">
            <input
              type="radio"
              value="Uploaded"
              id="filter_uploaded"
              name="filter"
            />
            Uploaded
          </label>
        </div>
        <div className="FilterOptions__option">
          <label htmlFor="filter_synched">
            <input
              type="radio"
              value="Synched"
              id="filter_synched"
              name="filter"
            />
            Synched
          </label>
        </div>
        <div className="FilterOptions__option">
          <label htmlFor="filter_new">
            <input type="radio" value="New" id="filter_new" name="filter" />
            New
          </label>
        </div>
      </div>
    );
  }
}

export default FilterOptions;
