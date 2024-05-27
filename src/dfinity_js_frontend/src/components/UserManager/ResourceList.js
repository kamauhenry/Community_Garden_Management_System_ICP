import React from "react";
import { Table } from "react-bootstrap";

const ResourceList = ({ resources }) => {
  return (
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
  );
};

export default ResourceList;
