import React, { useState, useEffect } from "react";
import logo from "../../assets/images/thumbnails/Logo.svg";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addUser, clearAuth } from "../../Redux/reducer/auth";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearAuth());
    localStorage.clear();
  }, []);

  let initialValues = {
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [showError, setShowError] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShowError({ ...showError, [name]: "" });
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = () => {
    let emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (formValues.email === "") {
      setShowError({ ...showError, email: "Email Required" });
    } else if (!emailFormat.test(formValues.email)) {
      setShowError({ ...showError, email: "Invalid Email" });
    } else if (formValues.password === "") {
      setShowError({ ...showError, password: "Password Required" });
    } else if (formValues.confirmpassword === "") {
      setShowError({
        ...showError,
        confirmpassword: "Confirm Password Required",
      });
    } else if (formValues.password !== formValues.confirmpassword) {
      setShowError({ ...showError, confirmpassword: "Passwords not matching" });
    } else {
      dispatch(addUser(formValues));
      toast.success("Signup Successful!, Please Login to continue");
      navigate("/login");
    }
  };

  return (
    <div className="App">
      <div id="wrapper">
        <div className="page-wrapper auth_wrapper">
          <div className="content-area-wrapper">
            <div className="content-wrapper">
              <div className="container">
                <div className="card products_blc">
                  <div className="card-body">
                    <div className="card_content_wrap text-center"></div>
                    <div className="card_content_wrap text-center">
                      <div className="logo_wrap">
                        <img src={logo} alt="logo" />
                        <h6>Create an account</h6>
                      </div>
                      <form>
                        <div className="form_wrapper">
                          <div className="mb-4">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label label_modify"
                            >
                              <span className="mendatary">*</span> Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              placeholder="demo@gmail.com"
                              className={
                                showError.email !== ""
                                  ? "form-control input_modify border-red"
                                  : "form-control input_modify"
                              }
                              id="exampleFormControlInput1"
                              value={formValues.email}
                              onChange={handleChange}
                            />
                            {showError.email !== "" && (
                              <p className="form-error">{showError.email}</p>
                            )}
                          </div>
                          <div className="mb-4">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label label_modify"
                            >
                              {" "}
                              <span className="mendatary">*</span> Password
                            </label>
                            <input
                              type="password"
                              placeholder="*****"
                              name="password"
                              className={
                                showError.password !== ""
                                  ? "form-control input_modify border-red"
                                  : "form-control input_modify"
                              }
                              id="exampleFormControlInput2"
                              value={formValues.password}
                              onChange={handleChange}
                            />
                            {showError.password !== "" && (
                              <p className="form-error">{showError.password}</p>
                            )}
                          </div>
                          <div className="mb-4">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label label_modify"
                            >
                              {" "}
                              <span className="mendatary">*</span>Confirm
                              Password
                            </label>
                            <input
                              type="password"
                              name="confirmpassword"
                              className={
                                showError.confirmpassword !== ""
                                  ? "form-control input_modify border-red"
                                  : "form-control input_modify"
                              }
                              id="exampleFormControlInput3"
                              placeholder="*****"
                              value={formValues.confirmpassword}
                              onChange={handleChange}
                            />
                            {showError.confirmpassword !== "" && (
                              <p className="form-error">
                                {showError.confirmpassword}
                              </p>
                            )}
                          </div>
                          <div className="mb-0 auth_btn">
                            <button
                              type="button"
                              className="theme-btn-primary theme-btn"
                              onClick={submitHandler}
                            >
                              Sign Up
                            </button>
                          </div>
                          <div className="already">
                            {" "}
                            <Link to="../login">Already have Account</Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
