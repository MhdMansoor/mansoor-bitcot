import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const PrivateRoute = ({ Component }) => {
  const navigate = useNavigate();
  const { authToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (authToken === "") {
      navigate("/");
      toast.error("Please login/sign up to continue");
    }
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
};

export default PrivateRoute;
