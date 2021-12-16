import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <Card className="border-0 rounded shadow-sm py-2 ps-3 my-2">
      <h4 className="">User Info</h4>
      <div>
        <strong>Email: </strong>
        {user.email}{" "}
      </div>
      <div>
        <strong>Address:</strong> {user.address ? user.address : "Not avaiable"}{" "}
      </div>
      <div>
        <strong>Phone Number:</strong>{" "}
        {user.phone ? user.phone : "Not avaiable"}{" "}
      </div>
    </Card>
  );
};

export default ProfileInfo;
