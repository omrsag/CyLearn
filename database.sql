CREATE DATABASE cylearn_db;
USE cylearn_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(120) UNIQUE,
  password VARCHAR(100)
);

CREATE TABLE courses (
  id VARCHAR(50) PRIMARY KEY,
  title VARCHAR(200),
  level VARCHAR(50),
  team VARCHAR(10),
  color VARCHAR(20),
  description TEXT
);

CREATE TABLE lessons (
  id VARCHAR(50) PRIMARY KEY,
  course_id VARCHAR(50),
  title VARCHAR(200),
  videoUrl VARCHAR(300),
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

INSERT INTO courses (id, title, level, team, color, description) VALUES
('web-attacks','Web Application Attacks','Intermediate','Red','#8B0000','Explore common web vulnerabilities such as XSS and SQL Injection and Understanding HTTP and Cookies.'),
('siem','SIEM','Intermediate','Blue','#0A1A2F','What is a SIEM? and How to read logs.'),
('pentesting','Penetration Testing','Advanced','Red','#8B0000','Intro to Pentesting and learn and how to recon with GHDB and learn Metasploit Framework.'),
('linux','Linux','Beginner','Both','#374151','Linux basics and bash environment.');

INSERT INTO lessons (id, course_id, title, videoUrl) VALUES
('wa-1','web-attacks','Introduction to Web Security','https://www.youtube.com/embed/80VviDER96I'),
('wa-2','web-attacks','Understanding HTTP and Cookies','https://www.youtube.com/embed/GhrvZ5nUWNg'),
('wa-3','web-attacks','SQL Injection Basics','https://www.youtube.com/embed/0v5pv-wuqTo'),
('wa-4','web-attacks','Cross-Site Scripting (XSS)','https://www.youtube.com/embed/yoijYEJrs_w'),

('siem-1','siem','What is a SIEM?','https://www.youtube.com/embed/CUWvm0YG_Aw'),
('siem-2','siem','How To CORRECTLY Read Logs','https://www.youtube.com/embed/TlB-vGW-xLQ'),
('siem-3','siem','Use Cases and Correlation Rules','https://www.youtube.com/embed/kGfmGGU8dn8'),

('pt-1','pentesting','Introduction','https://www.youtube.com/embed/bc8JcenrvB0'),
('pt-2','pentesting','Google Hacking Database GHDB','https://www.youtube.com/embed/dW_gIsNleDY'),
('pt-3','pentesting','The Metasploit Framework','https://www.youtube.com/embed/S73VRMghBt4'),

('lx-1','linux','Linux Basics','https://www.youtube.com/embed/JvTs2yihtTA'),
('lx-2','linux','Bash Environment','https://www.youtube.com/embed/cqYvosNZW6w'),
('lx-3','linux','Piping & Redirection','https://www.youtube.com/embed/p_i2GPRb9tA');
