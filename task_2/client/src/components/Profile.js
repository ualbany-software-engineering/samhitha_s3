import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

const Profile = ({ item }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{item?.full_name}</CardTitle>
        <p className="card-text">
          {item?.full_bio} |{" "}
          <img src={item?.profile_picture_url} alt={item?.full_name} />
        </p>
      </CardBody>
    </Card>
  );
};

export default Profile;
