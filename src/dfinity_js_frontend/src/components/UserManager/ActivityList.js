import React from "react";
import { Card, Table, Container } from "react-bootstrap";

const ActivityList = ({ activities }) => {
  return (
    <div className="mx-5">
      <Container className="mt-2">
        <Card
          className="p-3 shadow-sm"
          style={{ borderRadius: "15px", backgroundColor: "#f8f9fa" }}
        >
          <h2 className="text-center mb-4">Your Activities</h2>
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
        </Card>
      </Container>
    </div>
  );
};

export default ActivityList;
