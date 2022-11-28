# Write your MySQL query statement below
SELECT DISTINCT num as ConsecutiveNums
FROM Logs
WHERE (Id + 1, num) in (SELECT * FROM Logs) and (Id + 2, num) in (SELECT * FROM Logs)