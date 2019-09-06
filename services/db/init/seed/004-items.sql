insert into items (item_id, name, price) values
('a3062a91-efbe-4b5e-a3b0-4d4fd322b0dd', 'Basketball', '14.95'),
('f163321f-8193-4b3f-80fa-c8e56f8f02f6', 'Dell XPS 13', '1595.78'),
('f6074afa-5adb-4970-9185-29973cd36c65', 'Call of Duty', '49')
on conflict do nothing;





