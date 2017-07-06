delete from document;
delete from transaction;
delete from contact;
delete from user;
delete from category;

INSERT INTO user (id, created, user_type, name, surname, identity_number, email, country, password, language) VALUES (1, {ts '2017-01-01 00:00:00.00'}, 1, 'Jordynn', 'Rigel', '75545347', 'Jordy.LUN8128@yahoo.com', 'United States', 'yG0RSco46T', 'us');
INSERT INTO user (id, created, user_type, name, surname, identity_number, email, country, password, language) VALUES (2, {ts '2017-01-01 00:00:00.00'}, 0, 'Kobe', 'Mo', '85877367', 'Kob.VALENZU1995@mail2web.com', 'United States', '4HqI8SjqmG', 'us');
INSERT INTO user (id, created, user_type, name, surname, identity_number, email, country, password, language) VALUES (3, {ts '2017-01-01 00:00:00.00'}, 0, 'Karis', 'Shae', '37389778', 'Kari.SAUNDERS9199@gmail.com', 'United States', '8dB2t8eEdR', 'us');
INSERT INTO user (id, created, user_type, name, surname, identity_number, email, country, password, language) VALUES (4, {ts '2017-01-01 00:00:00.00'}, 1, 'Rihanna', 'Kinsey', '05689529', 'Riha.OL1538@yahoo.com', 'United States', 'ToLe6Tpwzb', 'us');
INSERT INTO user (id, created, user_type, name, surname, identity_number, email, country, password, language) VALUES (5, {ts '2017-01-01 00:00:00.00'}, 1, 'Lilah', 'Sidney', '18932616', 'Li.REYNOL7789@hushmail.com', 'United States', 'UWq79GcvTX', 'us');
INSERT INTO user (id, created, user_type, name, surname, identity_number, email, country, password, language) VALUES (6, {ts '2017-01-01 00:00:00.00'}, 0, 'Brennen', 'Sidney', '29657247', 'Brenn.MILL4124@live.com', 'United States', 'PdFbYPfiTu', 'us');
INSERT INTO user (id, created, user_type, name, surname, identity_number, email, country, password, language) VALUES (7, {ts '2017-01-01 00:00:00.00'}, 1, 'Yosef', 'Devyn', '03523209', 'Yos.COX8743@live.com', 'United States', 'iCxZA6N6pl', 'us');
INSERT INTO user (id, created, user_type, name, surname, identity_number, email, country, password, language) VALUES (8, {ts '2017-01-01 00:00:00.00'}, 1, 'Barbara', 'Tawanda', '88962627', 'Barbar.WHITF8199@live.com', 'United States', '7gMqVpStCW', 'us');
INSERT INTO user (id, created, user_type, name, surname, identity_number, email, country, password, language) VALUES (9, {ts '2017-01-01 00:00:00.00'}, 1, 'Layne', 'Lexis', '87374328', 'Lay.FORD9298@gmail.com', 'United States', 'SpW5RTmmmf', 'us');
INSERT INTO user (id, created, user_type, name, surname, identity_number, email, country, password, language) VALUES (10, {ts '2017-01-01 00:00:00.00'}, 1, 'Lyla', 'Robin', '08404823', 'Lyla.ROWL7168@mail2web.com', 'United States', 'm9a569L6sH', 'us');

INSERT INTO category (id, created, name, is_general, user_id) VALUES (1, {ts '2017-01-01 00:00:00.00'}, 'General', 1, 4);
INSERT INTO category (id, created, name, is_general, user_id) VALUES (2, {ts '2017-01-01 00:00:00.00'}, 'General', 1, 2);
INSERT INTO category (id, created, name, is_general, user_id) VALUES (3, {ts '2017-01-01 00:00:00.00'}, 'Tickets', 0, 2);
INSERT INTO category (id, created, name, is_general, user_id) VALUES (4, {ts '2017-01-01 00:00:00.00'}, 'General', 1, 6);
INSERT INTO category (id, created, name, is_general, user_id) VALUES (5, {ts '2017-01-01 00:00:00.00'}, 'Flights', 0, 2);
INSERT INTO category (id, created, name, is_general, user_id) VALUES (6, {ts '2017-01-01 00:00:00.00'}, 'Flights', 0, 10);
INSERT INTO category (id, created, name, is_general, user_id) VALUES (7, {ts '2017-01-01 00:00:00.00'}, 'Tickets', 0, 7);
INSERT INTO category (id, created, name, is_general, user_id) VALUES (8, {ts '2017-01-01 00:00:00.00'}, 'Contracts',0, 10);
INSERT INTO category (id, created, name, is_general, user_id) VALUES (9, {ts '2017-01-01 00:00:00.00'}, 'General', 1, 1);
INSERT INTO category (id, created, name, is_general, user_id) VALUES (10, {ts '2017-01-01 00:00:00.00'}, 'Contracts', 0, 6);
INSERT INTO category (id, created, name, is_general, user_id) VALUES (11, {ts '2017-01-01 00:00:00.00'}, 'General', 1, 3);
INSERT INTO category (id, created, name, is_general, user_id) VALUES (12, {ts '2017-01-01 00:00:00.00'}, 'General', 1, 5);
INSERT INTO category (id, created, name, is_general, user_id) VALUES (13, {ts '2017-01-01 00:00:00.00'}, 'General', 1, 7);
INSERT INTO category (id, created, name, is_general, user_id) VALUES (14, {ts '2017-01-01 00:00:00.00'}, 'General', 1, 8);
INSERT INTO category (id, created, name, is_general, user_id) VALUES (15, {ts '2017-01-01 00:00:00.00'}, 'General', 1, 9);
INSERT INTO category (id, created, name, is_general, user_id) VALUES (16, {ts '2017-01-01 00:00:00.00'}, 'General', 1, 10);

INSERT INTO contact (id, created, origin_category_id, target_category_id, origin_status, target_status) VALUES (1, {ts '2017-01-01 00:00:00.00'}, 1, 2, 1, 2);
INSERT INTO contact (id, created, origin_category_id, target_category_id, origin_status, target_status) VALUES (2, {ts '2017-01-01 00:00:00.00'}, 2, 4, 2, 2);
INSERT INTO contact (id, created, origin_category_id, target_category_id, origin_status, target_status) VALUES (3, {ts '2017-01-01 00:00:00.00'}, 13, 14, 3, 1);
INSERT INTO contact (id, created, origin_category_id, target_category_id, origin_status, target_status) VALUES (4, {ts '2017-01-01 00:00:00.00'}, 15, 16, 2, 1);
INSERT INTO contact (id, created, origin_category_id, target_category_id, origin_status, target_status) VALUES (5, {ts '2017-01-01 00:00:00.00'}, 13, 3, 1, 3);

INSERT INTO document (id, created, author_id, path) VALUES (1, {ts '2017-01-01 00:00:00.00'}, 1, '/docs/doc1.pdf');
INSERT INTO document (id, created, author_id, path) VALUES (2, {ts '2017-01-01 00:00:00.00'}, 2, '/docs/doc2.pdf');
INSERT INTO document (id, created, author_id, path) VALUES (3, {ts '2017-01-01 00:00:00.00'}, 3, '/docs/doc3.pdf');
INSERT INTO document (id, created, author_id, path) VALUES (4, {ts '2017-01-01 00:00:00.00'}, 4, '/docs/doc4.pdf');
INSERT INTO document (id, created, author_id, path) VALUES (5, {ts '2017-01-01 00:00:00.00'}, 5, '/docs/doc5.pdf');

INSERT INTO transaction (id, created, document_id, origin_user_id, target_category_id, subject, opened, is_signed, is_requested_signature, is_archived) VALUES (1, {ts '2017-01-01 00:00:00.00'}, 1,1,2,'Contract', null, false, false, false);
INSERT INTO transaction (id, created, document_id, origin_user_id, target_category_id, subject, opened, is_signed, is_requested_signature, is_archived) VALUES (2, {ts '2017-01-01 00:00:00.00'}, 2,3,9,'Ticked', null, true, false, false);
INSERT INTO transaction (id, created, document_id, origin_user_id, target_category_id, subject, opened, is_signed, is_requested_signature, is_archived) VALUES (3, {ts '2017-01-01 00:00:00.00'}, 3,4,12,'FLight ticket', null, true, true, false);
INSERT INTO transaction (id, created, document_id, origin_user_id, target_category_id, subject, opened, is_signed, is_requested_signature, is_archived) VALUES (4, {ts '2017-01-01 00:00:00.00'}, 4,5,16,'Contract', null, false, true, false);
INSERT INTO transaction (id, created, document_id, origin_user_id, target_category_id, subject, opened, is_signed, is_requested_signature, is_archived) VALUES (5, {ts '2017-01-01 00:00:00.00'}, 5,7,9,'Renting contract', null, false, false, true);
INSERT INTO transaction (id, created, document_id, origin_user_id, target_category_id, subject, opened, is_signed, is_requested_signature, is_archived) VALUES (6, {ts '2017-01-01 00:00:00.00'}, 2,1,11,'Contract', null, false, false, false);