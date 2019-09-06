import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";
import { setupMaster } from "cluster";

const cartDTO = row => ({
  itemId: row.item_id,
  quantity: row.quantity,
  name: row.name,
  price: row.price
});

const cartCountDTO = row => ({
  numOfItemsInCart: row.count
});

export async function getItemsInCartForUserFromDb(userHandle) {
  const query = sql`
    select c.item_id, c.quantity, i.name, i.price 
      from cart c
      inner join items i
      on c.item_id = i.item_id
      where user_handle = ${userHandle}
       and active = true;`;

  const results = await PGWrapper.sqlAndMap(query, cartDTO);
  return results;
}

export async function addItemsToCartForUserInDb(userHandle, items) {
  const item = items[0];
  const statement = sql`
    insert into cart values (
      ${userHandle},
      ${item.id},
      true,
      ${item.quantity}
    )
    on conflict
      on constraint cart_pkey
        do update set quantity = excluded.quantity, active = true
        returning *;`;

  await PGWrapper.sql(statement);
  const query = sql`
    select sum(quantity) as count 
      from cart 
      where user_handle = ${userHandle}
       and active = true;`;

  const results = await PGWrapper.sqlAndMap(query, cartCountDTO);
  return results[0];
}

// Works
// with updated_item as (
//   insert into cart values (
//     ${userHandle},
//     ${item.id},
//     true,
//     ${item.quantity}
//   )
//   on conflict
//     on constraint cart_pkey
//       do update set quantity = excluded.quantity, active = true
//       returning *
// )
// select (COALESCE(c.quantity,0) + COALESCE(updated_item.quantity,0)) as count from updated_item
//   left join cart c
//   on updated_item.user_handle = c.user_handle
//   and updated_item.item_id != c.item_id
//   and c.active = true;`;

// Testing
// select sum(quantity) from cart
//     where user_handle in (
//       insert into cart values (
//             ${userHandle},
//             ${item.id},
//             true,
//             ${item.quantity}
//           )
//           on conflict
//             on constraint cart_pkey
//               do update set quantity = excluded.quantity, active = true
//               returning user_handle
//     )
//     and active = true;
