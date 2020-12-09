
const express = require('express');
const app = express();
const Subscriber = require("./models/subscribers");


app.get("/subscribers", (req, res) => {
    Subscriber.find().then(data => res.send(data));
})  

app.get("/subscribers/names", (req, res) => {
    Subscriber.find().then((data) => {
        let arr = [];
        data.map( ele => {
            let name = ele.name;
            let subscribered = ele.subscribedChannel;
            arr.push({name, subscribered});
        });
        res.send(arr);
    });
})

app.get("/subscribers/:id", (req, res) => {
    Subscriber.find({_id: req.params.id})
        .then(data => res.send(data))
        .catch(err => res.status(400).send({message: "id does not match"}));
})

// Your code goes here





















module.exports = app;
