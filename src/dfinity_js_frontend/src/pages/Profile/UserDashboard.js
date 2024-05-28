import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getAllPlots, getAllActivities, getAllResources, getAllEvents } from "../../utils/communityGarden"; 
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
      setPlots(await getAllPlots());
      console.log("Plots fetched:", plots); // Debug log
    }
    catch (error) {
      console.error("Failed to fetch plots:", error);
    }
  };

  const fetchActivities = async () => {
    try {
      setActivities(await getAllActivities());
      console.log("Activities fetched:", activities); // Debug log
    } catch (error) {
      console.error("Failed to fetch activities:", error);
    }
  };

  const fetchResources = async () => {
    try {
      setResources(await getAllResources());
      console.log("Resources fetched:", resources); // Debug log
    } catch (error) {
      console.error("Failed to fetch resources:", error);
    }
  };

  const fetchEvents = async () => {
    try {
      setEvents(await getAllEvents());
      console.log("Events fetched:", events); // Debug log
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  return (
    <Container className="mt-2">
      <Row className="mx-2 my-4">
        <Col md={6}>
          <PlotList plots={plots} />
        </Col>
        <Col md={6}>
          <ActivityList activities={activities} />
        </Col>
      </Row>
      <Row className="mx-2 my-4">
        <Col md={6}>
          <ResourceList resources={resources} />
        </Col>
        <Col md={6}>
          <EventList events={events} />
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
