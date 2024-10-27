/* Description: 
For example, there are four cities (Kansas City, Houston, Gordon, and Tampa). 

-> The distance between Kansas City and Houston is 120.
-> The distance between Kansas City and Tampa is 80.
-> The distance between Houston and Gordon is 100.
*/

% Production Rules
route(Town1, Town2, Distance) :- road(Town1, Town2, Distance).
route(Town1, Town2, Distance) :- 
    road(Town1, X, Dist1),
    route(X, Town2, Dist2),
    Distance is Dist1 + Dist2.

% Facts for roads between towns
road(tampa, houston, 200).
road(gordon, tampa, 300).
road(houston, gordon, 100).
road(houston, kansas_city, 120).
road(kansas_city, tampa, 80).
road(gordon, kansas_city, 130).

:- initialization((route(tampa,kansas_city, Distance), write(Distance), nl)).


/* Usage Example:
To find the route and distance between two towns, use a query like:
?- route(kansas_city, gordon, Distance).
*/
