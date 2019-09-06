import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

const itemDTOMapper = row => ({
  itemId: row.item_id,
  name: row.name,
  price: row.price
});

const itemDetailsDTOMapper = row => ({
  itemId: row.item_id,
  name: row.name,
  price: row.price,
  description: row.description
});

export async function fetchItemsFromDB() {
  const query = sql`select * from items;`;
  return await PGWrapper.sqlAndMap(query, itemDTOMapper);
}

export async function fetchItemDetailsFromDB(id) {
  const query = sql`select * from items where item_id = ${id}`;
  return (await PGWrapper.sqlAndMap(query, itemDetailsDTOMapper))[0];
}
