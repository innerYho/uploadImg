# uploadImg
Upload image in server with Node &amp; Mysql  

This project was building from youtube tutotrial about the same topic:
https://www.youtube.com/watch?v=Bj3Gcpohbu4
mint 34:40

# How Build it from the begining
npm init -y
npm i express express-myconnection mysql2 multer

npm i nodemon -D

git init


# BDs
CREATE TABLE `images`.`image` ( `id` INT NOT NULL , `tipo` VARCHAR(50) NOT NULL , `nombre` INT(200) NOT NULL ) ENGINE = InnoDB;
