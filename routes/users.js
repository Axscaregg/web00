var express = require('express');
var router = express.Router();
const db = require('../db');
/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
    const rows = await  db.query('SELECT ID, Name, Details , Picture FROM idolCharacter')
    console.log(rows);

    res.render('user',{users: rows})
  }

  catch (err){
  next(err);
  }
});

module.exports = router;
