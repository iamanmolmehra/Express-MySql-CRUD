const express = require('express');
const db = require('./database/db')
const app = express()
app.use(express.json())

app.get('/show', (req, res) => {
    console.log('Satpal');
    res.send ("show data ")
})
app.get('/get/:id', async(req, res) => {
    db.query("select * from firstcrud where id = ?",req.params.id,async(error,reults)=>{
        console.log(reults);
        res.send(reults)
    })
})


app.get('/getAll', async(req, res) => {
    db.query("select * from firstcrud",async(error,reults)=>{
        console.log(reults);
        res.send(reults)
    })
})


app.post('/create', (req, res) => {
    const {name, age, work} = req.body;
    console.log(req.body);
    db.query('INSERT INTO firstcrud SET  ?', {name : req.body.name, age : req.body.age, work : req.body.work} , (err, result) => {
        if (err) throw err;
        console.log('Resylt successful');
        res.send('Successfully created and stored')
    })
})

app.put('/update/:id', (req, res) => {
        db.query("UPDATE firstcrud SET name=?,age=?,work=? WHERE id =?",[req.body.name,req.body.age,req.body.work,req.params.id], (err, result) => {
            if (err) throw err;
            console.log('Resylt successful');
            res.send('Successfully updated and stored')
        })
        });
        
app.delete('/delete/:id', (req, res) => {
    db.query("DELETE FROM firstcrud WHERE id=?",[req.params.id],(err,result)=>{
        if (err) throw err;
        console.log('delete all tables');
        res.send('We are deleting')
    })
})

const PORT = 3003
app.listen(PORT, () => {
    console.log(`Connected to PORT ${PORT}`);
})
