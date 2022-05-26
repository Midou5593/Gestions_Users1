CREATE DATABASE userdb;

CREATE TABLE users(
    id SERIAL PRIMARY KEY ,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(80) NOT NULL,
    username VARCHAR(50) NOT NULL,
    age int NOT NULL,
    passeword TEXT NOT NULL,
     confirmpasseword TEXT NOT NULL
);