# FriendFinder
Website: 
Languages/Frameworks: JavaScript, Express.js, Node.js, AJAX, Materialize

# Directions
Click the Take Survey Button
Fill out the survey
Submit your answers and see who your friend should be!

# Under the Hood
Routing is set up through Express.js
Site is served via Heroku
Logic and API are handled by Node.js and AJAX
Users survey answers are stored in a JSON object, sent via a POST request to the apiRoutes.js file, then logic checks against the data in friends.js, and responds with the closest friend match
