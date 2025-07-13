var express = require('express');
var router = express.Router();
const db = require('../db');

router.get('/' ,(req,res) => {
 res.render('inputF')
})

router.post('/', async function(req,res){
    const name = req.body.IName
    const details = req.body.Details
    const image = req.body.Image
    try{
     const sql ="INSERT INTO idolcharacter (Name, Details, Picture) VALUES(?,?,?)"
        await  db.query(sql,[name,details,image], (err,result) =>{
            if(err){
                return res.status(500).send("Error")
            }
            res.send("Success")
        })
    }catch (err){

    }
})
module.exports = router;