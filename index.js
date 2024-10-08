const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

// middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.52lko5e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.52lko5e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const businessesCollection = client.db("bdHandicraftsDb").collection("businesses");
    const productsCollection = client.db("bdHandicraftsDb").collection("products");

    // business related api
    app.get('/businesses', async (req, res) => {
      const result = await businessesCollection.find().toArray();
      res.send(result);
    });
    app.get('/businesses/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await businessesCollection.findOne(query);
        res.send(result)
      }
      catch (error) {
        console.log(error)
      }
    });

    // products related api
    app.get('/products', async (req, res) => {
      const result = await productsCollection.find().toArray();
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('server is running')
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
})