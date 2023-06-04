import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import picture from "../../assets/images/thumbnails/picture.svg";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { Link, useNavigate } from "react-router-dom";
import { addProduct, editProduct } from "../../Redux/reducer/product";
import { toast } from "react-toastify";
import Footer from "../Footer";

const ProductForm = ({ isEdit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let initialVariation = {
    variant: "",
    price: "",
    stock: "",
    productImage: "",
  };
  let initalValues = {
    productName: "",
    description: "",
    price: "",
    comparePrice: "",
    costPerItem: "",
    taxRate: "",
    category: "",
    status: "",
    variation: [initialVariation],
  };

  const [active, setActive] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [formValues, setFormValues] = useState(initalValues);
  const [showError, setShowError] = useState(initalValues);
  const [variantError, setVariantError] = useState(initialVariation);
  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    let findProduct = productList.find((item) => {
      return item.id === isEdit;
    });
    console.log(findProduct);
    setFormValues({ ...findProduct });
  }, [isEdit]);

  const toggleSidebar = () => {
    setActive(!active);
  };

  const toggleTab = (id) => {
    setActiveTab(id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShowError({ ...showError, [name]: "" });
    setFormValues({ ...formValues, [name]: value });
  };

  const handleVariantChange = (e, index) => {
    const { name, value } = e.target;
    setVariantError({ ...variantError, [name]: "" });
    let tempValues = JSON.parse(JSON.stringify(formValues));
    tempValues["variation"][index][name] = value;
    setFormValues(tempValues);
  };

  const handleFileChange = (index, value) => {
    const file = value[0];
    const imagePath = URL.createObjectURL(file);
    setVariantError({ ...variantError, productImage: "" });
    let tempValues = JSON.parse(JSON.stringify(formValues));
    tempValues["variation"][index]["productImage"] = imagePath;
    setFormValues(tempValues);
  };

  const deleteImage = (index) => {
    let tempValues = JSON.parse(JSON.stringify(formValues));
    tempValues["variation"][index]["productImage"] = "";
    setFormValues(tempValues);
  };

  const addFieldHandler = () => {
    let tempValues = JSON.parse(JSON.stringify(formValues));
    tempValues?.variation.push(initialVariation);
    setFormValues(tempValues);
  };

  const removeFieldHandler = (index) => {
    let tempValues = JSON.parse(JSON.stringify(formValues));
    tempValues?.variation.splice(index, 1);
    setFormValues(tempValues);
  };

  const submitHandler = () => {
    if (formValues.productName === "") {
      setShowError({ ...showError, productName: "Product Name Required" });
    } else if (formValues.description === "") {
      setShowError({
        ...showError,
        description: "Product Description Required",
      });
    } else if (!formValues.price || formValues.price === "") {
      setShowError({ ...showError, price: "Price Required" });
    } else if (formValues.comparePrice === "") {
      setShowError({
        ...showError,
        comparePrice: "Price Comparision Required",
      });
    } else if (!formValues.costPerItem || formValues.costPerItem === "") {
      setShowError({ ...showError, costPerItem: "Cost per item Required" });
    } else if (!formValues.taxRate || formValues.taxRate === "") {
      setShowError({ ...showError, taxRate: "Tax Rate Required" });
    } else if (!formValues.category || formValues.category === "") {
      setShowError({ ...showError, category: "Category Required" });
    } else if (!formValues.status || formValues.status === "") {
      setShowError({ ...showError, status: "Status Required" });
    } else if (formValues["variation"][0]["variant"] === "") {
      setActiveTab(1);
      setVariantError({
        ...variantError,
        variant: "Variant Name for the first field is required",
      });
    } else if (formValues["variation"][0]["price"] === "") {
      setActiveTab(1);
      setVariantError({
        ...variantError,
        price: "Product Price for the first field is required",
      });
    } else if (formValues["variation"][0]["stock"] === "") {
      setActiveTab(1);
      setVariantError({
        ...variantError,
        stock: "Stock for the first field is required",
      });
    } else if (formValues["variation"][0]["productImage"] === "") {
      setActiveTab(1);
      setVariantError({
        ...variantError,
        productImage: "Image for the first field is required",
      });
    } else {
      if (isEdit) {
        dispatch(editProduct({ id: formValues.id, formValues }));
        toast.success("Product updated successfully");
      } else {
        let payload = { ...formValues, id: productList.length + 1 };
        dispatch(addProduct(payload));
        toast.success("Product added successfully");
      }
      navigate("/products");
    }
  };

  return (
    <div className="App">
      <Header toggleSidebar={toggleSidebar} />
      <div className="page-wrapper">
        <Sidebar active={active} />
        <div className="content-area-wrapper">
          <div className="content-area-wrapper">
            <div className="content-wrapper">
              <div className="card nav_pills_card nav_pills_card_new">
                <div className="card-body">
                  <div className="heading_wrapper heading_right_content">
                    <h1 className="head_title">
                      {isEdit ? "Edit Product" : "Add Product"}
                    </h1>
                    <div className="btn_wrapper">
                      <button
                        type="button"
                        className="theme-btn btn-outline-secondary"
                      >
                        Discard
                      </button>
                      <button
                        type="button"
                        className="theme-btn theme-btn-primary"
                        onClick={submitHandler}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                  <ul
                    className="nav nav-pills mb-0 nav_pills_wrapper"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className={
                          activeTab === 0 ? "nav-link active" : "nav-link"
                        }
                        id="pills-general-tab"
                        data-toggle="pill"
                        data-target="#pills-general"
                        type="button"
                        role="tab"
                        aria-controls="pills-general"
                        aria-selected="true"
                        onClick={() => toggleTab(0)}
                      >
                        General
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={
                          activeTab === 1 ? "nav-link acttive" : "nav-link"
                        }
                        id="pills-variation-tab"
                        data-toggle="pill"
                        data-target="#pills-variation"
                        type="button"
                        role="tab"
                        aria-controls="pills-variation"
                        aria-selected="false"
                        onClick={() => toggleTab(1)}
                      >
                        Variation
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className={`tab-pane fade  ${
                    activeTab === 0 ? "show active" : ""
                  }`}
                  id="pills-general"
                  role="tabpanel"
                  aria-labelledby="pills-general-tab"
                >
                  <div className="card nav_pills_card">
                    <div className="card-body">
                      <div>
                        <div className="form-title">Basic Info</div>
                        <div className="form-group">
                          <label for="productName">
                            <span className="text-danger">*</span> Product Name
                          </label>
                          <input
                            type="name"
                            name="productName"
                            className={
                              showError.productName !== ""
                                ? "form-control border-red"
                                : "form-control"
                            }
                            id="productName"
                            value={formValues.productName}
                            onChange={handleChange}
                          />
                          {showError.productName !== "" && (
                            <p className="form-error">
                              {showError.productName}
                            </p>
                          )}
                        </div>
                        <div class="form-group">
                          <label for="Description">
                            <span class="text-danger">*</span> Description
                          </label>
                          <textarea
                            type="text"
                            id="Description"
                            className={
                              showError.description !== ""
                                ? "form-control border-red"
                                : "form-control"
                            }
                            name="description"
                            rows="3"
                            value={formValues.description}
                            onChange={handleChange}
                          ></textarea>
                          {showError.description !== "" && (
                            <p className="form-error">
                              {showError.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card nav_pills_card">
                    <div className="card-body">
                      <div>
                        <div className="form-title">Pricing</div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="price">
                                <span className="text-danger">*</span> Price
                              </label>
                              <input
                                type="number"
                                name="price"
                                className={
                                  showError.price !== ""
                                    ? "form-control border-red"
                                    : "form-control"
                                }
                                id="price"
                                value={formValues.price}
                                onChange={handleChange}
                              />
                              {showError.price !== "" && (
                                <p className="form-error">{showError.price}</p>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="comparePrice">
                                <span className="text-danger">*</span> Compare
                                price
                              </label>
                              <input
                                type="number"
                                name="comparePrice"
                                className={
                                  showError.comparePrice !== ""
                                    ? "form-control border-red"
                                    : "form-control"
                                }
                                id="comparePrice"
                                value={formValues.comparePrice}
                                onChange={handleChange}
                              />
                              {showError.comparePrice !== "" && (
                                <p className="form-error">
                                  {showError.comparePrice}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for=" costPerItem">
                                <span className="text-danger">*</span> Cost per
                                item
                              </label>
                              <input
                                type="number"
                                name="costPerItem"
                                className={
                                  showError.costPerItem !== ""
                                    ? "form-control border-red"
                                    : "form-control"
                                }
                                id="costPerItem"
                                value={formValues.costPerItem}
                                onChange={handleChange}
                              />
                              {showError.costPerItem !== "" && (
                                <p className="form-error">
                                  {showError.costPerItem}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="taxRate">
                                <span className="text-danger">*</span> Tax rate
                              </label>
                              <input
                                type="number"
                                name="taxRate"
                                className={
                                  showError.taxRate !== ""
                                    ? "form-control border-red"
                                    : "form-control"
                                }
                                id="taxRate"
                                value={formValues.taxRate}
                                onChange={handleChange}
                              />
                              {showError.taxRate !== "" && (
                                <p className="form-error">
                                  {showError.taxRate}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card nav_pills_card">
                    <div className="card-body">
                      <div>
                        <div className="form-title">Organization</div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="productName">
                                <span className="text-danger">*</span> Category
                              </label>
                              <select
                                className={
                                  showError.category !== ""
                                    ? "form-control border-red"
                                    : "form-control"
                                }
                                id="productName"
                                name="category"
                                value={formValues.category}
                                onChange={handleChange}
                              >
                                <option value="">Select</option>
                                <option value="clothe">Clothe</option>
                                <option value="bags">Bags</option>
                                <option value="shoes">Shoes</option>
                                <option value="watches">Watches</option>
                                <option value="devices">Devices</option>
                              </select>
                              {showError.category !== "" && (
                                <p className="form-error">
                                  {showError.category}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="Description">
                                <span className="text-danger">*</span> Status
                              </label>
                              <select
                                className={
                                  showError.status !== ""
                                    ? "form-control border-red"
                                    : "form-control"
                                }
                                id="productName"
                                name="status"
                                value={formValues.status}
                                onChange={handleChange}
                              >
                                <option value="">Select</option>
                                <option value="In stock">In stock</option>
                                <option value="Limited stock">
                                  Limited stock
                                </option>
                                <option value="Out of stock">
                                  Out of stock
                                </option>
                              </select>
                              {showError.status !== "" && (
                                <p className="form-error">{showError.status}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class={`tab-pane fade ${
                    activeTab === 1 ? "show active" : ""
                  }`}
                  id="pills-variation"
                  role="tabpanel"
                  aria-labelledby="pills-variation-tab"
                >
                  <div className="card nav_pills_card">
                    <div className="card-body">
                      <div>
                        <div className="form-title">Variants</div>
                        <p>
                          Add A Custome Variat Options For Your Product, Like
                          Different Sizes Or Colors.
                        </p>
                        {formValues?.variation.map((item, index) => {
                          return (
                            <div key={index}>
                              <div className={index !== 0 ? "isMinus" : ""}>
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label for=" productName">
                                        <span className="text-danger">*</span>{" "}
                                        Variant
                                      </label>
                                      <input
                                        type="text"
                                        name="variant"
                                        className={
                                          index === 0 &&
                                          variantError.variant !== ""
                                            ? "form-control border-red"
                                            : "form-control"
                                        }
                                        id="productName"
                                        value={item.variant}
                                        onChange={(e) =>
                                          handleVariantChange(e, index)
                                        }
                                      />
                                      {variantError.variant && index === 0 && (
                                        <p className="form-error">
                                          {variantError.variant}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label for=" productName">
                                        <span className="text-danger">*</span>{" "}
                                        Price
                                      </label>
                                      <input
                                        type="number"
                                        name="price"
                                        className={
                                          index === 0 &&
                                          variantError.price !== ""
                                            ? "form-control border-red"
                                            : "form-control"
                                        }
                                        id="productName"
                                        value={item.price}
                                        onChange={(e) =>
                                          handleVariantChange(e, index)
                                        }
                                      />
                                      {variantError.price && index === 0 && (
                                        <p className="form-error">
                                          {variantError.price}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label for=" productName">
                                        <span className="text-danger">*</span>{" "}
                                        Stock keeping unit
                                      </label>
                                      <input
                                        type="number"
                                        name="stock"
                                        className={
                                          index === 0 &&
                                          variantError.stock !== ""
                                            ? "form-control border-red"
                                            : "form-control"
                                        }
                                        id="productName"
                                        value={item.stock}
                                        onChange={(e) =>
                                          handleVariantChange(e, index)
                                        }
                                      />
                                      {variantError.stock && index === 0 && (
                                        <p className="form-error">
                                          {variantError.stock}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                {index !== 0 && (
                                  <span
                                    className="removeSpan"
                                    onClick={() => removeFieldHandler(index)}
                                  >
                                    -
                                  </span>
                                )}
                              </div>
                              <div className="form-group uploader-wrapper">
                                <label for="Description">
                                  <span className="text-danger">*</span> Upload
                                  Image
                                </label>
                                {item.productImage === "" ? (
                                  <div
                                    className={
                                      index === 0 &&
                                      variantError.productImage !== ""
                                        ? "uploader-wrapper-inner dashed-red"
                                        : "uploader-wrapper-inner"
                                    }
                                  >
                                    <img src={picture} alt="pictures" />
                                    <input
                                      type="file"
                                      name="productImage"
                                      onChange={(e) =>
                                        handleFileChange(index, e.target.files)
                                      }
                                    />
                                    Click or drag file to upload
                                  </div>
                                ) : (
                                  <div className="uploader-wrapper-inner">
                                    <div className="d-flex">
                                      <a
                                        href={item.productImage}
                                        target="_blank"
                                      >
                                        Product Image{" "}
                                      </a>
                                      <span
                                        className="removeImage"
                                        onClick={() => deleteImage(index)}
                                      >
                                        X
                                      </span>
                                    </div>
                                  </div>
                                )}
                              </div>
                              {variantError.productImage && index === 0 && (
                                <p className="form-error">
                                  {variantError.productImage}
                                </p>
                              )}
                            </div>
                          );
                        })}

                        <button
                          className="uploader-add-btne"
                          type="button"
                          onClick={addFieldHandler}
                        >
                          Add field
                        </button>
                      </div>
                    </div>
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

export default ProductForm;
