import { Principal } from "@dfinity/principal";
import { transferICP } from "./ledger";

// createUserProfile
export async function createUserProfile(profile) {
  return window.canister.farmWorkChain.createUserProfile(profile);
}

// getUserProfileByOwner
export async function getUserProfileByOwner(owner) {
  return window.canister.farmWorkChain.getUserProfileByOwner();
}

// getAllPlots
export async function getAllPlots() {
  return window.canister.farmWorkChain.getAllPlots();
}

// getAllActivities
export async function getAllActivities() {
  return window.canister.farmWorkChain.getAllActivities();
}

// getAllResources
export async function getAllResources() {
  return window.canister.farmWorkChain.getAllResources();
}

// getAllEvents
export async function getAllEvents() {
  return window.canister.farmWorkChain.getAllEvents();
}