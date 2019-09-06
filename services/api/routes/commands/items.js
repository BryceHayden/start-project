import { StatusError } from "../../utils/errors";
import {
  fetchItemsFromDB,
  fetchItemDetailsFromDB
} from "../repositories/items";

let loggedIn = true;

export async function fetchItems() {
  if (loggedIn) {
    //call db wrapper and ask for data
    try {
      const results = await fetchItemsFromDB();
      return results;
    } catch (err) {
      //Something bad happened with the db throw error
      throw new StatusError({ msg: "DB error", status: 500 });
    }
  } else {
    //throw error user must be logged in
    throw new StatusError({ msg: "User is not logged in", status: 400 });
  }
}

export async function fetchItemDetails(id) {
  //do business logic
  const item = await fetchItemDetailsFromDB(id);
  return item;
}
