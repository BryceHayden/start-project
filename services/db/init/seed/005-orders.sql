insert into orders (order_id, buyer_handle, order_date) values
('06fad102-1a73-41ad-ba62-7bbd4be3278f', '037b4897-8a2a-46b6-8ed7-47a555bb40f2', now()),
('b9cdffec-ad82-4855-8cad-5315c3a06610', '037b4897-8a2a-46b6-8ed7-47a555bb40f2', now() - interval '10 Day')
on conflict do nothing;
