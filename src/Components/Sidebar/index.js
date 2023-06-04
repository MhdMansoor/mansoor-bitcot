import React from "react";
import { Link } from "react-router-dom";
import path from "../../assets/images/icons/Path.svg";

const Sidebar = ({ active }) => {
  return (
    <aside
      className={`sidebar-wrapper custom-scrollbar wow fadeInLeft ${
        active ? "open" : ""
      }`}
    >
      <div className="sidebar-content-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item has-subnav active" id="listTem">
            <button className="sidebar-link" id="pro_toggle">
              <img src={path} alt="Product List" />
              <span className="item-text">Ecommerce</span>
            </button>
            <ul>
              <li>
                <Link to="" className="sidebar-link active">
                  Product List
                </Link>
              </li>
              <li>
                <Link to="" className="sidebar-link">
                  Add Product
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
