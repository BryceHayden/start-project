import {
  addItemsToCartForUserInDb,
  getItemsInCartForUserFromDb
} from "../repositories/carts.js";

export async function addItemsToCartForUser(userHandle, items) {
  return addItemsToCartForUserInDb(userHandle, items);
}

export async function getItemsInCartForUser(userHandle) {
  return getItemsInCartForUserFromDb(userHandle);
}
