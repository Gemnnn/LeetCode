# Write your MySQL query statement below
SELECT p.firstName, P.lastName, A.city, A.state
FROM Person AS P
LEFT JOIN address AS A  
on P.personId = A.personId;