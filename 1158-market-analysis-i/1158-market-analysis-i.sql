# Write your MySQL query statement below

SELECT u.user_id as buyer_id, u.join_date, COUNT(o.order_date) as orders_in_2019
FROM Users as u
LEFT JOIN Orders as o
ON u.user_id = o.buyer_id AND Year(o.order_date) = '2019'
GROUP BY u.user_id
ORDER BY buyer_id asc 


# 유저를 찾아라, 날짜 조인하고 2019년에 샀던 사람중에 주문 수를 구해라, 순서는 자유
