import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const UserProfile = ({ user }) => {
  const { name, email, phoneNumber, createdAt } = user;

  return (
    <Row
      className="d-flex justify-content-center align-items-center p-2"
      style={{
        backgroundColor: "gray",
        borderRadius: "20px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Col className="flex-1">
        <Image
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
          alt="avatar"
          className="rounded-circle"
          style={{ width: "150px" }}
        />
      </Col>
      <Col className="flex-1">
        <h3>{name}</h3>
        <p>Email: {email}</p>
        <p>Phone Number: {phoneNumber}</p>
        <p>Member Since: {new Date(createdAt).toLocaleDateString()}</p>
      </Col>
    </Row>
  );
};

export default UserProfile;
