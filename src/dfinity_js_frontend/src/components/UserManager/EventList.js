import React from "react";
import { Card, Table, Container } from "react-bootstrap";

const EventList = ({ events }) => {
  return (
    <div className="mx-5">
      <Container className="mt-4">
        <Card
          className="p-3 shadow-sm"
          style={{
            borderRadius: "15px",
            backgroundColor: "#f8f9fa",
            minWidth: "600px", // Added min-width to increase card width
          }}
        >
          <h2 className="text-center mb-4">Community Events</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td>{event.id}</td>
                  <td>{event.title}</td>
                  <td>{event.description}</td>
                  <td>{new Date(event.date).toLocaleDateString()}</td>
                  <td>{event.location}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Container>
    </div>
  );
};

export default EventList;
