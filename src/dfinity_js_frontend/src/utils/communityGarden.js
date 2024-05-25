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
