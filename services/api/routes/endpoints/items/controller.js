import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
import { fetchItems, fetchItemDetails } from "../../commands/items";

export default class ItemsController {
  constructor(router) {
    router.get("/:id", wrapAsyncFunc(this.getItemDetails));
    router.get("/", wrapAsyncFunc(this.getAllItems));
  }

  async getAllItems(req, res) {
    //get token for user that is logged in
    const items = await fetchItems();
    res.send({ items });
  }

  async getItemDetails(req, res) {
    const { id } = req.params;
    const item = await fetchItemDetails(id);
    res.send({ item });
  }
  // async createNewItem(req, res) {
  //   console.log("HELLo");
  //   const { item } = req.body;
  //   const results = await createItem(item);
  //   res.send({ results });
  // }
}
