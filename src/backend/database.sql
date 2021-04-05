CREATE DATABASE `Database`;
USE `Database`;

CREATE TABLE `User` (
	 email varchar(100) NOT NULL,
     first_name varchar(50) NOT NULL,
     last_name varchar(60) NOT NULL,
    `password` varchar(60) NOT NULL,
    id integer UNIQUE NOT NULL auto_increment,
    PRIMARY KEY (`Email`)
    ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
    

CREATE TABLE `Category` (
      id integer UNIQUE NOT NULL auto_increment,
	 `name` varchar(100) NOT NULL,
     image_src varchar(200) NOT NULL,
     PRIMARY KEY (`Name`)
    ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
   
   drop table product;
   
   ALTER TABLE category drop column price;
   
CREATE TABLE product (
	 id int NOT NULL auto_increment,
     category_name varchar(100) NOT NULL,
     user_email varchar(100) NOT NULL,
     buy_now decimal NOT NULL,
     initial_price decimal NOT NULL,
     current_ask decimal NOT NULL default 0,
     duration datetime NOT NULL,
     sold boolean NOT NULL default false,
     PRIMARY KEY (`Id`),
     FOREIGN KEY (user_email) REFERENCES user (email) ON DELETE CASCADE,
     FOREIGN KEY (category_name) REFERENCES category (name) ON DELETE CASCADE
     ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
     
     drop table `order`;
CREATE TABLE `sale` (
	id int NOT NULL auto_increment,
    user_email varchar(100) NOT NULL,
    product_id int NOT NULL UNIQUE,
    PRIMARY KEY (id),
    FOREIGN KEY (user_email) REFERENCES user (email) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
    
    drop table sale;
CREATE TABLE bid (
	id int NOT NULL auto_increment,
    value decimal NOT NULL,
    user_email varchar(100) NOT NULL,
    product_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_email) REFERENCES user (email) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
    
    


