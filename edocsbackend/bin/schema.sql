drop table category if exists;
drop table contact if exists;
drop table document if exists;
drop table transaction if exists;
drop table user if exists;

create table category (id bigint generated by default as identity, created timestamp not null, is_general boolean not null, name varchar(25) not null, user_id bigint not null, primary key (id));
create table contact (id bigint generated by default as identity, created timestamp not null, origin_status integer not null, target_status integer not null, origin_category_id bigint not null, target_category_id bigint not null, primary key (id));
create table document (id bigint generated by default as identity, created timestamp not null, path varchar(75) not null, author_id bigint not null, primary key (id));
create table transaction (id bigint generated by default as identity, created timestamp not null, is_archived boolean not null, is_requested_signature boolean not null, is_signed boolean not null, opened timestamp, subject varchar(2000), document_id bigint not null, origin_user_id bigint not null, target_category_id bigint not null, primary key (id));
create table user (id bigint generated by default as identity, country varchar(20) not null, created timestamp not null, email varchar(120) not null, identity_number varchar(10) not null, language varchar(2) not null, name varchar(120) not null, password varchar(20) not null, surname varchar(75), is_company boolean not null, token varchar(20) not null, primary key (id));
alter table user add constraint UK_5etist3y74rnx5nuuw29f72hw unique (identity_number);
alter table category add constraint FKpfk8djhv5natgshmxiav6xkpu foreign key (user_id) references user;
alter table contact add constraint FKbyp9ib6aiudb8d0q849mampjy foreign key (origin_category_id) references category;
alter table contact add constraint FKqhesfk6ec8m2dbycrb1clus49 foreign key (target_category_id) references category;
alter table document add constraint FKegc4plit7eewymjwtrr02r89o foreign key (author_id) references user;
alter table transaction add constraint FK6c7cablr7qo7p0hqxi61c6edj foreign key (document_id) references document;
alter table transaction add constraint FKgtvex8twxnjvdc17onn0q8juv foreign key (origin_user_id) references user;
alter table transaction add constraint FKoy1b8bmp57mpxtl38ywflynbt foreign key (target_category_id) references category;
