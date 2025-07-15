var express = require('express');

var router = express.Router();

router.get('/',(req,res) =>{
    res.render('cookieTest',{username: req.cookies.name || ''})
})

router.post('/setcookie', (req,res)=>{
    res.cookie('name','Harry', {maxAge: 5*60*1000})
    res.json({message: 'cook'})
})

router.get('/getcookie',(req,res) =>{
    const name = req.cookies.name
    res.json({name})
})
router.post('/clearcookie', (req, res) => {
    res.clearCookie('name');
    res.json({ message: 'Cookie cleared!' });
});

module.exports = router;
