const express = require("express")
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT || 80
const app = express()
app.use(cors())
app.use(express.json())

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.vt0bn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        client.connect()
        const volunteerServiceCollection = client.db("volunteerDB").collection("volunteer");
        // serve and search api 
        app.get('/works', async (req, res) => {
            const query = req.query.work
            let works;
            if (query) {
                works = await volunteerServiceCollection.find({ title: req.query.work }).toArray()
            }
            else {
                works = await volunteerServiceCollection.find().toArray()
            }
            res.send(works)
        })

        // register apiKey
        const volunteerCollection = client.db("volunteerDB").collection("volunteerList");

        app.post('/volunteer', async (req, res) => {
            res.send(await volunteerCollection.insertOne(req.body))
        })

        // send volunteerdata
        app.get('/volunteer', async (req, res) => {
            res.send(await volunteerCollection.find().toArray())
        })

        // delete volunteer data
        app.post('/volunteer/:id', async (req, res) => {
            console.log(req.params.id)
            res.send(await volunteerCollection.deleteOne({ _id: ObjectId(req.params.id) }))
        })


        // POST EVENT DATA api
        const eventCollection = client.db("volunteerDB").collection("event");

        app.post('/event', async (req, res) => {
            res.send(await eventCollection.insertOne(req.body))
        })
        app.delete('/event/:id', async (req, res) => {
            res.send(await eventCollection.deleteOne({ _id: ObjectId(req.params.id) }))
            // console.log(req.params.id)
        })

        app.get('/event', async (req, res) => {
            res.send(await eventCollection.find().toArray())
        })
    }
    finally {

    }
}

run()

app.listen(port)