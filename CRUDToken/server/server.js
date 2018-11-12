
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const jwt = require('jsonwebtoken')

const PORT = 3000;


const app = express();



var users = [
    {
        "id": 1,
        "name": "Leonardo Lindoso",
        "email": "leo7lindoso@hotmail.com",
        "password": "123456a",
        "isAdmin": true,
      },
    {
        "id": 2,
        "name": "Leonardo Augusto",
        "email": "leo99lindoso@gmail.com",
        "password": "123456a",
        "isAdmin": false,
      },
    {
        "id": 3,
        "name": "Chelsey Dietrich",
        "email": "Lucio_Hettinger@annie.ca",
        "password": "123456a",
        "isAdmin": false,
      },
    {
        "id": 4,
        "name": "Chelsey Dietrich",
        "email": "Lucio_Hettinger@annie.ca",
        "password": "123456a",
        "isAdmin": false,
      },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "Lucio_Hettinger@annie.ca",
      "password": "123456a",
      "isAdmin": false,
    }
]

app.use(bodyParser.json());

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);

app.get('/', function(req, res){
    res.status(200).send(users)
});

app.post('/register', (req,res) =>{
    let userData = req.body
    users.push({
        "id":6,
        "name": userData.name,
        "email": userData.email,
        "password": userData.password,
        "isAdmin": userData.isAdmin
    })
    let payload = { subject: userData.id}
    let token = jwt.sign(payload,'secret')
    res.status(201).send({token})
})
app.post('/login', (req,res) =>{
    let userData = req.body
    let foundUser = users.find( x => x.email == userData.email && x.password == userData.password)
    if(!foundUser){
        res.status(401).send("Invalid E-mail or Password")
    }else{
        let payload = { subject: userData.email}
        let token = jwt.sign(payload,'secret')
        res.status(201).send({token})
    }
    
})

app.listen(PORT, function(){
    console.log('Server running on localhost:' + PORT);
});