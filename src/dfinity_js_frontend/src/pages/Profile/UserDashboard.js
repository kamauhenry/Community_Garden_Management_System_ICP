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
      const plots = await getAllPlots();
      setPlots(plots);
    } catch (error) {
      console.error("Failed to fetch plots:", error);
    }
  };

  const fetchActivities = async () => {
    try {
      const activities = await getAllActivities();
      setActivities(activities);
    } catch (error) {
      console.error("Failed to fetch activities:", error);
    }
  };

  const fetchResources = async () => {
    try {
      const resources = await getAllResources();
      setResources(resources);
    } catch (error) {
      console.error("Failed to fetch resources:", error);
    }
  };

  const fetchEvents = async () => {
    try {
      const events = await getAllEvents();
      setEvents(events);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  const handleAddOrUpdatePlot = () => {
    // Logic to handle adding or updating a plot
    console.log("Add or update plot clicked");
  };

  const handleAddOrUpdateActivity = () => {
    // Logic to handle adding or updating an activity
    console.log("Add or update activity clicked");
  };

  const handleAddOrUpdateResource = () => {
    // Logic to handle adding or updating a resource
    console.log("Add or update resource clicked");
  };

  const handleAddOrUpdateEvent = () => {
    // Logic to handle adding or updating an event
    console.log("Add or update event clicked");
  };

  return (
    <Container className="mt-2">
      <Row className="mx-2 my-4">
        <Col md={6}>
          <PlotList plots={plots} onAddOrUpdate={handleAddOrUpdatePlot} />
        </Col>
        <Col md={6}>
          <ActivityList activities={activities} onAddOrUpdate={handleAddOrUpdateActivity} />
        </Col>
      </Row>
      <Row className="mx-2 my-4">
        <Col md={6}>
          <ResourceList resources={resources} onAddOrUpdate={handleAddOrUpdateResource} />
        </Col>
        <Col md={6}>
          <EventList events={events} onAddOrUpdate={handleAddOrUpdateEvent} />
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
