import React from "react";
import { Table } from "react-bootstrap";

const PlotList = ({ plots }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Plot ID</th>
          <th>Size</th>
          <th>Location</th>
          <th>Reserved Until</th>
        </tr>
      </thead>
      <tbody>
        {plots.map((plot) => (
          <tr key={plot.id}>
            <td>{plot.id}</td>
            <td>{plot.size}</td>
            <td>{plot.location}</td>
            <td>{new Date(plot.reservedUntil).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PlotList;
