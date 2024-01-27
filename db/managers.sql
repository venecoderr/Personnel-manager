UPDATE employee 
SET manager_id = CASE 
    WHEN id = 1 THEN 2
    WHEN id = 3 THEN 4
    WHEN id = 5 THEN 6
END;
