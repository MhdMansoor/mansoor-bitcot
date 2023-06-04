import React from "react";
import { useNavigate } from "react-router-dom";

const FilterProduct = ({ search, handleChange }) => {
  const navigate = useNavigate();

  return (
    <div className="filter_wrapper">
      <div className="filet_left_content">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABHNCSVQICAgIfAhkiAAAAXtJREFUOE+tVEFOwkAU7e8Q1yyNmFhv0Ih7yg1acW89AXADj1BOYN2D9gaUPZjeABZiXLI2DOObZmiGwSKGTjJpZ/6819f/3x+yjHHu+g6r1bpCCA8hV4UzIkr5ej34ypKFidmuSQ80mp1IWFYXey+YiU20kvGNEHU8fMwHkEbL6bD/G2FBdtHsZDmQc7/s61K1zViCY/PP2SgwCXMypcg749xbZEmupmw4rl//ZiwFMF3ORj39HKmvzaHo+lA+dFAZhpSqOmSHhxSZMaQlhrqVro5Urp5AJnNx9ADOJyF6y/dXr6gmNgWq1v6YDtOjmXDw8vbeQ5XHEFEUUSqrlExaoprfrLQAlVpDM20Lpm0fadoxsj7ZM+22giiEtMYVzBv80U5vOOfCFo+wRbzTAfpCa/TYIko2qtFt2ehCyEYPoWiA90wQPZuEO7eGJM6vIMZ6ALgAtOQeQBOQZ5zzaKu6cXMXmoR7ZP8xrkl4EllePKUQr8HJZAWhbTs/jATsJjmQpCoAAAAASUVORK5CYII="
                alt="search"
              />
            </span>
          </div>
          <input
            type="text"
            className="form-control input_modify"
            placeholder="Search"
            name="name"
            onChange={handleChange}
            value={search.name}
          />
        </div>
        <select
          className="custom-select input_modify"
          name="category"
          onChange={handleChange}
          value={search.category}
        >
          <option selected value="">
            All
          </option>
          <option value="clothe">Clothe</option>
          <option value="bags">Bags</option>
          <option value="shoes">Shoes</option>
          <option value="watches">Watches</option>
          <option value="devices">Devices</option>
        </select>
      </div>
      <div className="filter_btn_wrapper">
        <button
          className="btn theme-btn-primary theme-btn"
          onClick={() => navigate("/add")}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default FilterProduct;
