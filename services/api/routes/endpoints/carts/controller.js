import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
// Import business logic for these endpoints

import {
  addItemsToCartForUser,
  getItemsInCartForUser
} from "../../commands/carts.js";
/*
/carts  --- all of the carts
/carts/:use_handle --- find a cart for a given user
/carts/:user_handle/add
*/

export default class ItemsController {
  constructor(router) {
    router.get("/items", wrapAsyncFunc(this.getCartForUser));
    // We would like it to be /carts/:user_handle/add ... but to save time we will
    // assume we are doing this for the logged in user, until we use redux/central state management.
    router.post("/add", wrapAsyncFunc(this.addItemToCart));
  }
  async getCartForUser(req, res) {
    const { userHandle } = req.user;
    const results = await getItemsInCartForUser(userHandle);
    res.send({ cart: results });
  }

  async addItemToCart(req, res) {
    const { userHandle } = req.user;
    const { items } = req.body;

    const results = await addItemsToCartForUser(userHandle, items);
    res.send({ cart: results });
  }
}
