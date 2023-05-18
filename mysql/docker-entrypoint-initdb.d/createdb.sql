CREATE DATABASE IF NOT EXISTS `todo4` COLLATE 'utf8_general_ci' ;

USE todo4;

CREATE TABLE IF NOT EXISTS `activities` (
  activity_id INT PRIMARY KEY,
  title VARCHAR(255),
  email VARCHAR(255) NULL,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `todos` (
  todo_id INT PRIMARY KEY,
  activity_group_id INT,
  title VARCHAR(255),
  priority VARCHAR(255),
  is_active TINYINT DEFAULT 1,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
