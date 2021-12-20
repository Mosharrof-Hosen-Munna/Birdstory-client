import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navigation from "../Shared/Navigation/Navigation";

const UpdateProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const [img, setImg] = useState(null);
  const formData = new FormData();

  const handleChange = (e) => {
    // const reader = new FileReader();
    // const url = reader.readAsDataURL(e.target.files[0]);
    setImg(e.target.files[0]);
  };

  console.log(img);
  return (
    <>
      <Navigation />
      {img && <img src={URL.createObjectURL(img)} alt="" />}
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        name=""
        id=""
      />
    </>
  );
};

export default UpdateProfile;
