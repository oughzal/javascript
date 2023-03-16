-- Active: 1678416017708@@127.0.0.1@3306@moodle
use moodle;
CREATE TABLE Stagiaire (
    CEF int,
    LastName varchar(255),
    FirstName varchar(255)
);

INSERT INTO Stagiaire(CEF,LastName,FirstName) VALUES(1,"OUGHZA","Omar");


SELECT * from Stagiaire ;

SELECT * from stagiaire WHERE `LastName` = "OUGHZA";

