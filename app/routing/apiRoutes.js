
const friends = require("../data/friends");


module.exports = function(app) {

app.get('/api/survey', function(req, res) {
    res.json(friends);
});

app.post('/api/survey', function(req, res) {

    let newFriend = req.body.scores;
    let total = 50;
    let match = '';

    for (const friend of friends) {
        let difference = 0;
            
        for (let i = 0; i < friend.scores.length; i++) {
            difference += Math.abs(friend.scores[i] - newFriend[i]);
            console.log(difference);
        }
        
        if (difference < total) {
            total = difference;
            match = friend.name;
        }
    }

    res.json({total, match});
});


}