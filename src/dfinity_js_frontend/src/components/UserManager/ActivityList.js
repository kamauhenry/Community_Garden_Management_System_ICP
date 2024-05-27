import React from "react";
import { Table } from "react-bootstrap";

const ActivityList = ({ activities }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Activity ID</th>
          <th>Description</th>
          <th>Date</th>
          <th>Plot ID</th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity) => (
          <tr key={activity.id}>
            <td>{activity.id}</td>
            <td>{activity.description}</td>
            <td>{new Date(activity.date).toLocaleDateString()}</td>
            <td>{activity.plotId}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ActivityList;
