import { placeUserOrderInDb } from "../repositories/orders.js";

export async function placeUserOrder(userHandle) {
  await placeUserOrderInDb(userHandle);
  return;
}
