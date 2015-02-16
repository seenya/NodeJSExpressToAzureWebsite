
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express App - Deploy to Azure' });
};