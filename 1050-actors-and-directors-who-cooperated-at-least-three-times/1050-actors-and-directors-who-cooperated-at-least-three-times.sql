# Write your MySQL query statement below


# Runtime: 374 ms, faster than 98.67% of MySQL online submissions for Actors and Directors Who Cooperated At Least Three Times.
# SELECT actor_id, director_id
# FROM ActorDirector
# GROUP BY actor_id, director_id
# HAVING COUNT(1) > 2



SELECT actor_id, director_id
FROM ActorDirector
GROUP BY actor_id, director_id
HAVING COUNT(*) > 2