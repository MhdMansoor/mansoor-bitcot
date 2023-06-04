import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/images/thumbnails/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { addToken, clearAuth } from "../../Redux/reducer/auth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearAuth());
    localStorage.clear();
  }, []);

  let initialValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [showError, setShowError] = useState(initialValues);
  const { userDetails } = useSelector((state) => state.auth);

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
    } else {
      if (userDetails.length !== 0) {
        for (let i = 0; i < userDetails.length; i++) {
          if (
            userDetails[i].email === formValues.email &&
            userDetails[i].password === formValues.password
          ) {
            const authToken = uuidv4();
            dispatch(addToken(authToken));
            localStorage.setItem("authToken", authToken);
            toast.success("Login Successful");
            navigate("/products");
            break;
          } else {
            toast.error("Invalid Credentials");
          }
        }
      } else {
        toast.error("Please signup to continue");
      }
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
                    <div className="card_content_wrap text-center">
                      <div className="card_content_wrap text-center">
                        <div className="logo_wrap">
                          <img src={logo} alt="logo" />
                          <h6>
                            Don't have an account yet?{" "}
                            <Link className="signUpSpan" to="../sign-up">
                              Sign Up
                            </Link>
                          </h6>
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
                                className={
                                  showError.email !== ""
                                    ? "form-control input_modify border-red"
                                    : "form-control input_modify"
                                }
                                id="exampleFormControlInput1"
                                name="email"
                                placeholder="demo@demo.com"
                                value={formValues.email}
                                onChange={handleChange}
                              />
                              {showError.email !== "" && (
                                <p className="form-error">{showError.email}</p>
                              )}
                            </div>
                            <div className="mb-4">
                              <label
                                for="exampleFormControlInput2"
                                className="form-label label_modify"
                              >
                                {" "}
                                <span className="mendatary">*</span> Password
                              </label>
                              <input
                                type="password"
                                className={
                                  showError.password !== ""
                                    ? "form-control input_modify border-red"
                                    : "form-control input_modify"
                                }
                                name="password"
                                id="exampleFormControlInput1"
                                placeholder="********"
                                value={formValues.password}
                                onChange={handleChange}
                              />
                              {showError.password !== "" && (
                                <p className="form-error">
                                  {showError.password}
                                </p>
                              )}
                            </div>
                            <div className="mb-0 auth_btn">
                              <button
                                type="button"
                                className="theme-btn-primary theme-btn"
                                onClick={submitHandler}
                              >
                                Sign In
                              </button>
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
    </div>
  );
};

export default Login;
