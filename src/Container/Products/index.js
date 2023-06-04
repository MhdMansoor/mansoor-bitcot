import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { clearProduct } from "../../Redux/reducer/product";
import { toast } from "react-toastify";
import FilterProduct from "../../Components/FilterProduct";
import ProductTable from "../../Components/ProductTable";
import Footer from "../../Components/Footer";

const Products = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);

  const [active, setActive] = useState(true);
  const [search, setSearch] = useState({
    name: "",
    category: "",
  });
  const [productItems, setProductItems] = useState(productList);
  const [dropdownValue, setDropdownValue] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    filterItems();
  }, [search.name, search.category]);

  useEffect(() => {
    setProductItems(productList);
  }, [productList]);

  const toggleSidebar = () => {
    setActive(!active);
  };

  const clearItem = (id, productName) => {
    setLoading(true);
    dispatch(clearProduct(id));
    toast.success(`${productName} deleted successfully`);
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  const filterItems = () => {
    let { name, category } = search;
    const filtered = productList.filter((product) => {
      const isProductNameMatched = product.productName
        .toLowerCase()
        .includes(name?.toLowerCase());
      const isCategoryNameMatched = product.category
        .toLowerCase()
        .includes(category.toLowerCase());

      return isProductNameMatched && isCategoryNameMatched;
    });

    setProductItems(filtered);
  };

  return loading ? (
    <p>Loading....</p>
  ) : (
    <div className="App">
      <Header toggleSidebar={toggleSidebar} />
      <div className="page-wrapper">
        <Sidebar active={active} />
        <div
          className="content-area-wrapper"
          onClick={() => setDropdownValue()}
        >
          <div className="content-area-wrapper">
            <div className="content-wrapper">
              <div className="filter_wrapper  d-block d-sm-none">
                <div className="filet_left_content">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        <img
                          src="images/icons/magnifying-glass.png"
                          alt="search"
                        />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control input_modify"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
              <div className="heading_wrapper d-flex flex-wrap">
                <h1 className="head_title">Product List</h1>
                <nav aria-label="breadcrumb" className="breadcrumb_wrapper">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">E-Commerce</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Product List
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="card products_blc">
                <div className="card-body">
                  <FilterProduct search={search} handleChange={handleChange} />
                  <div className="app_table table-responsive">
                    <ProductTable
                      productItems={productItems}
                      clearItem={clearItem}
                      dropdownValue={dropdownValue}
                      setDropdownValue={setDropdownValue}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Products;
