import React from "react";
import { Table } from "react-bootstrap";

const EventList = ({ events }) => {
  return (
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
  );
};

export default EventList;
