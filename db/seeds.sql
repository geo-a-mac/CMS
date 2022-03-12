INSERT INTO department (department_name)
VALUES
('HQ'),
('HR'),
('IT'),
('Marketing'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('CEO',1000000.00,1),
('HR Director',200000.00 ,2),
('CIO',700000.00 ,3),
('CTO',500000.00 ,3),
('Marketing Director', 500000.00 ,4),
('Marketing Manager', 100000,4),
('Programmer', 150000.00,3),
('Sales Director',100000.00 ,5),
('Sales Manager',50000.00 ,5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Tracy','Emms',1,NULL),
('Jane','Tennison',2,1),
('Elizabeth','Hurley',3,1),
('Freda','Kalo',4,3),
('Iris','Murdoch',5,1),
('Virginia','Woolf',6,5),
('Bob','Monkhouse',7,6),
('Henry','Longfellow',8,1),
('Charles','Dickens',7,6),
('Zadie','Smith',9,8);
