import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <Card className="border-0 rounded  shadow-sm py-2 ps-3 my-2">
      <h3 className="d-none d-md-block">Information</h3>
      <div>
        <strong>Name: </strong>
        {user.name}{" "}
      </div>
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
      <div>
        <strong>Account CreateAt:</strong>{" "}
        {new Date(user.metadata?.creationTime).toDateString()}
      </div>
    </Card>
  );
};

export default ProfileInfo;
