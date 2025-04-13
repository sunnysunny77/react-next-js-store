CREATE DATABASE react;

USE react;

CREATE TABLE login ( email varchar(255) NOT NULL, pass CHAR(60) NOT NULL , PRIMARY KEY (email) ); 

INSERT INTO login (email, pass) VALUES ("daniel@gmail.com","$2b$10$kONQ8/E.V3xdBtlFRNw3ouf7oECrsMDjVUqBnkv3nvmzUUCM/2z.S");

passwordA1