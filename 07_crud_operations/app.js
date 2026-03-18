const express = require('express')
const app = express();
const userModel = require('./usermodule')

app.get('/',function(req,res){
    res.send('hello world')

})
app.get('/create',async function(req,res){
    let createUser = await userModel.create({
        name:'aryan',
        username:'aryanbhai',
        email:'aryan@gmail.com'
    })
    res.send(createUser);
})
app.get('/update',async function(req,res){
    let faupdate = await userModel.findOneAndUpdate({username:'aryanbhai'},{username:'aryanbhau'},{new:true})
    res.send(faupdate);
})

app.get('/read',async function(req,res){
    let read = await userModel.find();
    res.send(read);
})
app.get('/read',async function(req,res){
    let read = await userModel.find({username:'aryanbhau'});
    res.send(read);
})
app.get('/delete',async function(req,res){
    let del = await userModel.findOneAndDelete({username:'aryanbhau'})
    res.send(del);
})


app.listen(3000);