# Write your MySQL query statement below

SELECT u.name, SUM(amount) as balance
FROM Users as u
LEFT JOIN Transactions as t
ON u.account = t.account
GROUP BY u.account
HAVING balance > 10000;