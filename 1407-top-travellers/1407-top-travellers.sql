# Write your MySQL query statement below

SELECT u.name as name, SUM(r.distance) as travelled_distance
FROM Users as u
INNER JOIN Rides as r
ON u.id = r.user_id
GROUP BY u.name


UNION

SELECT u.name as name, 0 as travelled_distance
FROM Users as u
WHERE u.id NOT IN (SELECT r.user_id FROM Rides as r)
ORDER BY travelled_distance desc, name asc;
