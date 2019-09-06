insert into cart (user_handle, item_id, active, quantity) values 
('037b4897-8a2a-46b6-8ed7-47a555bb40f2', 'a3062a91-efbe-4b5e-a3b0-4d4fd322b0dd', true, 2),
('037b4897-8a2a-46b6-8ed7-47a555bb40f2', 'f163321f-8193-4b3f-80fa-c8e56f8f02f6', true, 5),
('17832b68-e91e-45f4-9a92-042c69b1b9c5', 'f163321f-8193-4b3f-80fa-c8e56f8f02f6', true, 1),
('17832b68-e91e-45f4-9a92-042c69b1b9c5', 'f6074afa-5adb-4970-9185-29973cd36c65', false, 3),
('17832b68-e91e-45f4-9a92-042c69b1b9c5', 'a3062a91-efbe-4b5e-a3b0-4d4fd322b0dd', true, 5)
on conflict do nothing;
