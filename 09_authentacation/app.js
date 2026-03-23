//cookie setup
// const express = require('express');
// const app = express();
// const cookieparser = require('cookie-parser');


// app.use(cookieparser());

// app.get('/',function(req,res){
//     res.cookie('name','harshita');
//     res.send('done');
// });
// app.get('/read',function(req,res){
//     console.log(req.cookies)
//     res.send('done');
// });

// app.listen(3000,function(err){
//     console.log('done ');
// });




//bcrypt that is encrypt and decrypt
// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');


// //encrypt
// app.get("/", function (req, res) {
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash("pololololoo", salt, function (err, hash) {
//             // Store hash in your password DB.
//             console.log(hash);
//         });
//     });
// });

// //decrept
// app.get("/", function (req, res) {
//     bcrypt.compare("pololololoo", "$2b$10$0uhX/eNyJls/BDurevSZT.fyfFG6/UJNdna/O7yR7czyN6VfgrcQ.", function (err, result) {
//         // result == true
//         console.log(result);
//     });
// });

// app.listen(3000,function(err){
//     console.log('done ');
// });






// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const cookieparser = require('cookie-parser');


// app.use(cookieparser());



// app.get('/',function(req,res){
//     let token = jwt.sign({email:'example@gmail.com'},'secret');
//     res.cookie('token',token);
//     res.send('done');
//     console.log(token);


// })
// app.get('/read',function(req,res){
//     console.log(req.cookies.token);
//     let data = jwt.verify(req.cookies.token,'secret');
//     console.log(data);
// })

// app.listen(3000, function(err){
//     console.log('its running')
// })







const express = require('express');
const app = express();
const usermodel = require('./models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const cookieParser = require('cookie-parser');
const path = require('path');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/create', function (req, res) {
    let { username, email, password, age } = req.body;

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            console.log(hash);
            let usercreate = await usermodel.create({
                username,
                email,
                password: hash,
                age
            })

            let token = jwt.sign({ email }, 'hahaito');
            res.cookie('token', token);

            res.send(usercreate);



        });
    });


});


//login
app.get('/login', function (req, res) {
    res.render('login');
})

app.post('/login', async function (req, res) {
    let user = await usermodel.findOne({ email: req.body.email });
    if (!user) return res.send('something went wrong');

    bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result) {

            let token = jwt.sign({email : user.email}, 'hahaito');
            res.cookie('token', token);
            res.send('yes you can login');
        }

        else res.send('something is wrong')



    });

})


//logout
app.get('/logout', function (req, res) {
    res.cookie('token', '');
    res.redirect('/');
})

app.listen(3000);