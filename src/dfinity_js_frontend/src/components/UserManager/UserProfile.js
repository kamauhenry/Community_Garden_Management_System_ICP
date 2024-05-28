import React from "react";
import { Row, Col, Image, Card, Container } from "react-bootstrap";

const UserProfile1 = ({ user }) => {
  const { name, email, phoneNumber, createdAt } = user;

  return (
    <div className="mx-5">
      <Container className="mt-2">
        <h2 className="mb-4">User Dashboard</h2>
        <Card
          className="p-3 shadow-sm"
          style={{ borderRadius: "15px", backgroundColor: "#f8f9fa" }}
        >
          <Row className="d-flex justify-content-center align-items-center">
            <Col xs={12} className="d-flex justify-content-center mb-3">
              <Image
                src="https://randomuser.me/api/portraits/men/75.jpg" // Updated avatar URL
                alt="avatar"
                className="rounded-circle"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            </Col>
            <Col xs={12} className="text-center">
              <h3>{name}</h3>
              <p className="text-muted mb-1">{email}</p>
              <p className="text-muted mb-1">{phoneNumber}</p>
              <p className="text-muted mb-1">
                Member Since: {createdAt.slice(0, 10)}
              </p>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default UserProfile1;
