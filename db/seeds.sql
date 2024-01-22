INSERT INTO department (department_name)
VALUES 
    ("Prototyping"),
    ("Design"),
    ("Manufacturing");

INSERT INTO roles (title, salary, department_id)
VALUES 
    ("Product Engineer", 100000.00, 1),
    ("Prototyping Mng", 150000.00, 1),
    ("Product Designer", 75000.00, 2),
    ("Design Mng", 150000.00, 2),
    ("CNC Operator", 120000.00, 3),
    ("Shop Manager", 150000.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ("Daniel", "Bolivar", 1, NULL),
    ("Jose", "Bonaparte", 2, NULL),
    ("Claudio", "Habsburg", 3, NULL),
    ("Mihai", "Romanov", 4, NULL),
    ("Manuel", "Comnos", 5, NULL),
    ("Suleiman", "Jaffar", 6, NULL);
