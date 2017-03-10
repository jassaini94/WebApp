var Users  = require('../datasets/users');

module.exports.getUsers = function(req, res)
{
	Users.find({}, function(err, usersData)
	{
		if(err)
		{
			res.error(err);
		}
		else
		{
			res.json(usersData);
		}
	})
}

module.exports.followUser = function(req, res)
{
	var userId = req.body.userId;
	var expresserId = req.body.expresserId;

	Users.findById(expresserId, function(err, expresser)
	{
		expresser.followers.push({userId: userId});
		expresser.save();

	})
	
	Users.findById(userId, function(err, follower)
	{
		follower.following.push({userId: expresserId});
		follower.save();
	})
}