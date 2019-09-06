import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

export async function placeUserOrderInDb(userHandle) {
  let placeOrder = sql`
    with new_order as (
      insert into orders (buyer_handle) values (${userHandle}) returning *
    )
    insert into order_items (
      select new_order.order_id as order_id,  c.item_id, c.quantity
        from cart c
        left join new_order on new_order.buyer_handle = c.user_handle
        where c.user_handle = ${userHandle} and c.active = true
    );
  `;

  let updateCart = sql`update cart set active = false where user_handle = ${userHandle} and active = true;`;

  await PGWrapper.sqlTransaction(placeOrder, updateCart);
  return;
}

// '037b4897-8a2a-46b6-8ed7-47a555bb40f2

// BEGIN;
//      with new_order as (
//       insert into orders (buyer_handle) values (${userHandle}) returning *
//      )
//      insert into order_items (
//          select new_order.order_id as order_id,  c.item_id, c.quantity
//           from cart c
//           left join new_order on new_order.buyer_handle = c.user_handle
//           where c.user_handle = ${userHandle} and c.active = true
//      );
//      update cart set active = false where user_handle = ${userHandle} and active = true;
//  COMMIT;
