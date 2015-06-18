# fix illegal byte sequence thrown by sed (on Mac OS)
export LC_CTYPE=C 
export LANG=C

mysql -u ${DB_DEV_USER} -p${DB_DEV_PASS} -e "use net; create table user (userId int(11) unsigned primary KEY AUTO_INCREMENT, email varchar(255), pass varchar(255), index indexEmail (email asc), index indexPass (pass asc) );"
mysql -u ${DB_DEV_USER} -p${DB_DEV_PASS} -e "use net; insert into user (email, pass) values ('user1@customer1.com', 'cd5fbbc6b3ab045a67de4487f8f96dcbd9a883dc46004da26b518172822bf1fe') "