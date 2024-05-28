import React from "react";
import { Card, Table, Container } from "react-bootstrap";

const ResourceList = ({ resources }) => {
  return (
    <div className="mx-5">
      <Container className="mt-2">
        <Card
          className="p-3 shadow-sm"
          style={{
            borderRadius: "15px",
            backgroundColor: "#f8f9fa",
            minWidth: "600px",
          }}
        >
          <h2 className="text-center mb-4">Available Resources</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Resource ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Available</th>
              </tr>
            </thead>
            <tbody>
              {resources.map((resource) => (
                <tr key={resource.id}>
                  <td>{resource.id}</td>
                  <td>{resource.name}</td>
                  <td>{resource.quantity}</td>
                  <td>{resource.available ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Container>
    </div>
  );
};

export default ResourceList;
