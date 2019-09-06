create table
if not exists cart
(
    user_handle uuid references users(user_handle),
    item_id uuid references items(item_id),
    active boolean not null default true,
    quantity numeric not null default 1,
    primary key(user_handle, item_id)
);
grant select, insert, update, delete on table cart to project_app;
grant select on table cart to project_read;