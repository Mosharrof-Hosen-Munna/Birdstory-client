import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="text-center text-muted ">Page or document not found!</h1>
        <button onClick={handleGoBack} className="btn-blue-green my-2">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
