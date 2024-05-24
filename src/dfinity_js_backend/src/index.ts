import { verify } from "@dfinity/agent";
import { auto } from "@popperjs/core";
import {
  query,
  update,
  text,
  Null,
  Record,
  StableBTreeMap,
  Variant,
  Vec,
  None,
  Some,
  Ok,
  Err,
  ic,
  Principal,
  Opt,
  nat64,
  Duration,
  Result,
  bool,
  Canister,
} from "azle";
import { v4 as uuidv4 } from "uuid";

// Define the User class to represent users of the platform
const User = Record({
  id: text,
  name: text,
  email: text,
  createdAt: text,
});

const Plot = Record({
  id: text,
  userId: text,
  size: text,
  location: text,
  reservedUntil: text,
  createdAt: text,
});

const Activity = Record({
  id: text,
  plotId: text,
  description: text,
  date: text,
  createdAt: text,
});

const Resource = Record({
  id: text,
  name: text,
  quantity: nat64,
  available: bool,
  createdAt: text,
});

const Event = Record({
  id: text,
  title: text,
  description: text,
  date: text,
  location: text,
  createdAt: text,
});

// Initialize stable maps for storing garden data
const usersStorage = StableBTreeMap(0, text, User);
const plotsStorage = StableBTreeMap(1, text, Plot);
const activitiesStorage = StableBTreeMap(2, text, Activity);
const resourcesStorage = StableBTreeMap(3, text, Resource);
const eventsStorage = StableBTreeMap(4, text, Event);

// Canister Definition
export default Canister({
  // Create a new user
  createUser: update(
    [text, text],
    Result(User, text),
    (name, email) => {
      if (!name || !email) {
        return Err("Invalid input: Ensure 'name' and 'email' are provided and are strings.");
      }

      const user = {
        id: uuidv4(),
        name: name,
        email: email,
        createdAt: ic.time().toString(),
      };

      usersStorage.insert(user.id, user);
      return Ok(user);
    }
  ),

  // Retrieve all users
  getUsers: query([], Vec(User), () => {
    return usersStorage.values();
  }),

  // Create a new plot
  createPlot: update(
    [text, text, text, text],
    Result(Plot, text),
    (userId, size, location, reservedUntil) => {
      if (!userId || !size || !location || !reservedUntil) {
        return Err("Invalid input: Ensure 'userId', 'size', 'location', and 'reservedUntil' are provided and are of the correct types.");
      }

      const plot = {
        id: uuidv4(),
        userId: userId,
        size: size,
        location: location,
        reservedUntil: reservedUntil,
        createdAt: ic.time().toString(),
      };

      plotsStorage.insert(plot.id, plot);
      return Ok(plot);
    }
  ),

  // Retrieve all plots
  getPlots: query([], Vec(Plot), () => {
    return plotsStorage.values();
  }),

  // Create a new activity
  createActivity: update(
    [text, text, text],
    Result(Activity, text),
    (plotId, description, date) => {
      if (!plotId || !description || !date) {
        return Err("Invalid input: Ensure 'plotId', 'description', and 'date' are provided and are of the correct types.");
      }

      const activity = {
        id: uuidv4(),
        plotId: plotId,
        description: description,
        date: date,
        createdAt: ic.time().toString(),
      };

      activitiesStorage.insert(activity.id, activity);
      return Ok(activity);
    }
  ),

  // Retrieve all activities
  getActivities: query([], Vec(Activity), () => {
    return activitiesStorage.values();
  }),

  // Create a new resource
  createResource: update(
    [text, nat64, bool],
    Result(Resource, text),
    (name, quantity, available) => {
      if (!name || quantity <= 0 || typeof available !== "boolean") {
        return Err("Invalid input: Ensure 'name', 'quantity', and 'available' are provided and are of the correct types.");
      }

      const resource = {
        id: uuidv4(),
        name: name,
        quantity: quantity,
        available: available,
        createdAt: ic.time().toString(),
      };

      resourcesStorage.insert(resource.id, resource);
      return Ok(resource);
    }
  ),

  // Retrieve all resources
  getResources: query([], Vec(Resource), () => {
    return resourcesStorage.values();
  }),

  // Create a new event
  createEvent: update(
    [text, text, text, text],
    Result(Event, text),
    (title, description, date, location) => {
      if (!title || !description || !date || !location) {
        return Err("Invalid input: Ensure 'title', 'description', 'date', and 'location' are provided and are of the correct types.");
      }

      const event = {
        id: uuidv4(),
        title: title,
        description: description,
        date: date,
        location: location,
        createdAt: ic.time().toString(),
      };

      eventsStorage.insert(event.id, event);
      return Ok(event);
    }
  ),

  // Retrieve all events
  getEvents: query([], Vec(Event), () => {
    return eventsStorage.values();
  }),
});
