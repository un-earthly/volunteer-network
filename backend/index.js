const express = require("express")
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT || 80
const app = express()
app.use(cors())
app.use(express.json())

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.vt0bn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        client.connect()
        const volunteerCollection = client.db("volunteerDB").collection("volunteer");

        app.get('/works', async (req, res) => {
            const works = await volunteerCollection.find().toArray()
            res.send(works)
        })


    }
    finally {

    }
}

run()

app.listen(port)