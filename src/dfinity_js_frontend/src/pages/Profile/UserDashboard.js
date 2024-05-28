import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import UserProfile from "../../components/UserManager/UserProfile";
import PlotList from "../../components/UserManager/PlotList";
import ActivityList from "../../components/UserManager/ActivityList";
import ResourceList from "../../components/UserManager/ResourceList";
import EventList from "../../components/UserManager/EventList";

const UserDashboard = ({ user }) => {
  const [plots, setPlots] = useState([]);
  const [activities, setActivities] = useState([]);
  const [resources, setResources] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchPlots();
    fetchActivities();
    fetchResources();
    fetchEvents();
  }, []);

  const fetchPlots = async () => {
    try {
      const response = await fetch("/plots");
      const data = await response.json();
      setPlots(data.plots);
    } catch (error) {
      console.error("Failed to fetch plots:", error);
    }
  };

  const fetchActivities = async () => {
    try {
      const response = await fetch("/activities");
      const data = await response.json();
      setActivities(data.activities);
    } catch (error) {
      console.error("Failed to fetch activities:", error);
    }
  };

  const fetchResources = async () => {
    try {
      const response = await fetch("/resources");
      const data = await response.json();
      setResources(data.resources);
    } catch (error) {
      console.error("Failed to fetch resources:", error);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await fetch("/events");
      const data = await response.json();
      setEvents(data.events);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  return (
    <Container className="mt-2">
      {/* <UserProfile user={user} /> */}
      <Row className="mx-2 my-4">
        <Col md={6}>
          {/* <h2>Your Plots</h2> */}
          <PlotList plots={plots} />
        </Col>
        <Col md={6}>
          {/* <h2>Your Activities</h2> */}
          <ActivityList activities={activities} />
        </Col>
      </Row>
      <Row className="mx-2 my-4">
        <Col md={6}>
          {/* <h2>Available Resources</h2> */}
          <ResourceList resources={resources} />
        </Col>
        <Col md={6}>
          {/* <h2>Community Events</h2> */}
          <EventList events={events} />
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
