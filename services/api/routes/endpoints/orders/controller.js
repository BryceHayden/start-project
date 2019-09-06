import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
import { placeUserOrder } from "../../commands/orders";

export default class OrdersController {
  constructor(router) {
    router.post("/add", wrapAsyncFunc(this.placeOrder));
  }

  async placeOrder(req, res) {
    const { userHandle } = req.user;
    await placeUserOrder(userHandle);
    res.send({ msg: "Order placed" });
  }
}
