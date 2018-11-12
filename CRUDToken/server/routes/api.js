const express = require('express')
const router = express.Router()

router.get('/',(req,res) =>{
    res.send('From API route')
})

const mongoose = require('mongoose')

const db = "mongodb://admin:IIkZtVpwB8OBtfXR@SG-testecrud-16413.servers.mongodirector.com:46869,SG-testecrud-16414.servers.mongodirector.com:46869,SG-testecrud-16415.servers.mongodirector.com:46869/admin?replicaSet=RS-testecrud-0&ssl=true"

module.exports = router



/*const options = {
    useNewUrlParser:true,
    autoIndex: false, // Don't build indexes
    reconnectTries: 100, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };

mongoose.connect(db,options).then(
    () =>{
        console.log("connected to mongoDB")},
        (err)=>{
            console.log("err",err);
})*/
