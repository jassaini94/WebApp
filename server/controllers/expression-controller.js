
var Expression = require('../datasets/expressions');

module.exports.postExpression = function(req, res)
{
	var expression = new Expression(req.body);
	expression.save();

	Expression.find({}).sort({date: -1}).exec(function(err, allExpressions)
	{
		if(err)
		{
			res.error(err);
		}
		else
		{
			res.json(allExpressions);
		}
	});
}

module.exports.getExpressions = function(req, res)
{
	if(!req.body.following)
	{	
		Expression.find({}).sort({date: -1}).exec(function(err, allExpressions)
		{
			if(err)
			{
				res.error(err);
			}
			else
			{
				res.json(allExpressions);
			}
		})
	}
	else
	{
		var i = 0;
		var len = req.body.following.length;
		var requestedExpresssions = [];

		for(i=0; i<len; i++)
		{
			requestedExpresssions.push({userId: req.body.following[i].userId});
		}

		Expression.find({$or: requestedExpresssions}).sort({date: -1}).exec(function(err, allExpressions)
		{
			if(err)
			{
				res.error(err);
			}
			else
			{
				res.json(allExpressions);
			}
		})
	}
}