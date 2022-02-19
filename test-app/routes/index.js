var express = require('express');
var router = express.Router();
var db=require('./database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'create' });
});

router.post('/create', function(req, res, next) {
  var namePerson = req.body.namePerson;
  var sex = req.body.sex;
  var direction = req.body.direction;
  var mail = req.body.mail;
  var telephone = req.body.telephone;

  var sql = `INSERT INTO persona (idPerson, namePerson, sex, direction, mail, telephone) VALUES (default, "${namePerson}", "${sex}", "${direction}", "${mail}", "${telephone}")`;
  db.query(sql, function(err, result) {
    console.log(result)
    console.log(err)
    if (err) throw err;
    console.log('record inserted');
    res.redirect('/');
  });
});

module.exports = router;
