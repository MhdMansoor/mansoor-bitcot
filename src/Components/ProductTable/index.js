import React from "react";
import { useNavigate } from "react-router-dom";

const ProductTable = ({
  productItems,
  clearItem,
  dropdownValue,
  setDropdownValue,
}) => {
  const navigate = useNavigate();
  const handleToggle = (e, id) => {
    setDropdownValue(id);
    e.stopPropagation();
  };

  const navigateHandler = (id) => {
    console.log("I am clicked");
    navigate(`/edit/${id}`);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">
            <label className="checkbox_container text-uppercase"> ID</label>
          </th>
          <th scope="col" className="th_didivder">
            Products
            <span className="filter-order-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="13"
                viewBox="0 0 11 13"
              >
                <g
                  id="Group_22146"
                  data-name="Group 22146"
                  transform="translate(-501 -126.5)"
                >
                  <path
                    id="Icon_ionic-md-arrow-dropdown"
                    data-name="Icon ionic-md-arrow-dropdown"
                    d="M9,13.5,14.5,19,20,13.5Z"
                    transform="translate(492 120.5)"
                    fill="rgba(69,85,96,0.2)"
                  ></path>
                  <path
                    id="Icon_ionic-md-arrow-dropdown-2"
                    data-name="Icon ionic-md-arrow-dropdown"
                    d="M9,19l5.5-5.5L20,19Z"
                    transform="translate(492 113)"
                    fill="rgba(69,85,96,0.2)"
                  ></path>
                </g>
              </svg>
            </span>
          </th>
          <th scope="col" className="th_didivder">
            Category
            <span className="filter-order-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="13"
                viewBox="0 0 11 13"
              >
                <g
                  id="Group_22146"
                  data-name="Group 22146"
                  transform="translate(-501 -126.5)"
                >
                  <path
                    id="Icon_ionic-md-arrow-dropdown"
                    data-name="Icon ionic-md-arrow-dropdown"
                    d="M9,13.5,14.5,19,20,13.5Z"
                    transform="translate(492 120.5)"
                    fill="rgba(69,85,96,0.2)"
                  ></path>
                  <path
                    id="Icon_ionic-md-arrow-dropdown-2"
                    data-name="Icon ionic-md-arrow-dropdown"
                    d="M9,19l5.5-5.5L20,19Z"
                    transform="translate(492 113)"
                    fill="rgba(69,85,96,0.2)"
                  ></path>
                </g>
              </svg>
            </span>
          </th>
          <th scope="col" className="th_didivder">
            Price
            <span className="filter-order-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="13"
                viewBox="0 0 11 13"
              >
                <g
                  id="Group_22146"
                  data-name="Group 22146"
                  transform="translate(-501 -126.5)"
                >
                  <path
                    id="Icon_ionic-md-arrow-dropdown"
                    data-name="Icon ionic-md-arrow-dropdown"
                    d="M9,13.5,14.5,19,20,13.5Z"
                    transform="translate(492 120.5)"
                    fill="rgba(69,85,96,0.2)"
                  ></path>
                  <path
                    id="Icon_ionic-md-arrow-dropdown-2"
                    data-name="Icon ionic-md-arrow-dropdown"
                    d="M9,19l5.5-5.5L20,19Z"
                    transform="translate(492 113)"
                    fill="rgba(69,85,96,0.2)"
                  ></path>
                </g>
              </svg>
            </span>
          </th>
          <th scope="col" className="th_didivder">
            Stock
            <span className="filter-order-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="13"
                viewBox="0 0 11 13"
              >
                <g
                  id="Group_22146"
                  data-name="Group 22146"
                  transform="translate(-501 -126.5)"
                >
                  <path
                    id="Icon_ionic-md-arrow-dropdown"
                    data-name="Icon ionic-md-arrow-dropdown"
                    d="M9,13.5,14.5,19,20,13.5Z"
                    transform="translate(492 120.5)"
                    fill="rgba(69,85,96,0.2)"
                  ></path>
                  <path
                    id="Icon_ionic-md-arrow-dropdown-2"
                    data-name="Icon ionic-md-arrow-dropdown"
                    d="M9,19l5.5-5.5L20,19Z"
                    transform="translate(492 113)"
                    fill="rgba(69,85,96,0.2)"
                  ></path>
                </g>
              </svg>
            </span>
          </th>
          <th scope="col" className="th_didivder">
            Status
            <span className="filter-order-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="13"
                viewBox="0 0 11 13"
              >
                <g
                  id="Group_22146"
                  data-name="Group 22146"
                  transform="translate(-501 -126.5)"
                >
                  <path
                    id="Icon_ionic-md-arrow-dropdown"
                    data-name="Icon ionic-md-arrow-dropdown"
                    d="M9,13.5,14.5,19,20,13.5Z"
                    transform="translate(492 120.5)"
                    fill="rgba(69,85,96,0.2)"
                  ></path>
                  <path
                    id="Icon_ionic-md-arrow-dropdown-2"
                    data-name="Icon ionic-md-arrow-dropdown"
                    d="M9,19l5.5-5.5L20,19Z"
                    transform="translate(492 113)"
                    fill="rgba(69,85,96,0.2)"
                  ></path>
                </g>
              </svg>
            </span>
          </th>
          <th scope="col" className="th_didivder">
            Action
            <span className="filter-order-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="13"
                viewBox="0 0 11 13"
              >
                <g
                  id="Group_22146"
                  data-name="Group 22146"
                  transform="translate(-501 -126.5)"
                >
                  <path
                    id="Icon_ionic-md-arrow-dropdown"
                    data-name="Icon ionic-md-arrow-dropdown"
                    d="M9,13.5,14.5,19,20,13.5Z"
                    transform="translate(492 120.5)"
                    fill="rgba(69,85,96,0.2)"
                  ></path>
                  <path
                    id="Icon_ionic-md-arrow-dropdown-2"
                    data-name="Icon ionic-md-arrow-dropdown"
                    d="M9,19l5.5-5.5L20,19Z"
                    transform="translate(492 113)"
                    fill="rgba(69,85,96,0.2)"
                  ></path>
                </g>
              </svg>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {productItems.length > 0 ? (
          productItems.map((product) => {
            let { id, productName, variation, category, status } = product;
            return (
              <tr key={id}>
                <td>
                  <label className="checkbox_container text-uppercase">
                    {id}
                  </label>
                </td>
                <td>
                  <div className="media align-items-center">
                    <div className="product_thumb">
                      <img
                        src={product.variation[0].productImage}
                        alt="Images"
                      />
                    </div>
                    <div className="media-body product_des">
                      <h6 className="product_name">{productName}</h6>
                    </div>
                  </div>
                </td>
                <td className="text_primary">{category}</td>
                <td>$ {variation[0].price}</td>
                <td>{variation[0].stock}</td>
                <td>{status}</td>
                <td className="actions">
                  <div className="dropdown dropdown_wrapper ">
                    <button
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      onClick={(e) => handleToggle(e, id)}
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                        alt="Donts"
                      />
                    </button>

                    <div
                      className={`dropdown-menu dropdown-menu-right ${
                        dropdownValue === id ? "d-block" : ""
                      }`}
                    >
                      <button
                        className="dropdown-item"
                        onClick={() => navigateHandler(id)}
                      >
                        Edit Product
                      </button>
                      <button
                        className="dropdown-item"
                        onClick={() => clearItem(id, productName)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })
        ) : (
          <h3>No Record</h3>
        )}
      </tbody>
    </table>
  );
};

export default ProductTable;
