const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: [ "http://localhost:5173", "https://plant-website-a0f51.web.app/"], 
    credentials: true,
  })
);
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nnpqtvd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const productCollection = client.db("productDB").collection("product");

    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Get all products or filter by owner
    app.get('/product', async (req, res) => {
      const owner = req.query.owner;
      let query = {};
      if (owner) {
        query.owner = owner;
      }
      const cursor = productCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // Get a single product by id
    app.get('/product/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.findOne(query);
      res.send(result);
    });

    // Create a new product
    app.post('/product', async (req, res) => {
      const newProduct = req.body;
      console.log(newProduct);
      const result = await productCollection.insertOne(newProduct);
      res.send(result);
    });

    // Delete a product by id
    app.delete('/product/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.deleteOne(query);
      res.send(result);
    });

    // Update a product by id
    app.put('/product/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const updatedProduct = req.body;
        const query = { _id: new ObjectId(id) };
        const updateDoc = {
          $set: updatedProduct,
        };
        const result = await productCollection.updateOne(query, updateDoc);
        res.send(result);
      } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).send({ message: "Failed to update product." });
      }
    });

    // Dashboard stats endpoint (optional)
    app.get('/dashboard-stats', async (req, res) => {
      const owner = req.query.owner;
      const totalProducts = await productCollection.countDocuments();
      let myItems = 0;
      if (owner) {
        myItems = await productCollection.countDocuments({ owner });
      }
      res.send({ totalProducts, myItems });
    });
  } finally {
    // You can choose to close the client here if needed.
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Welcome in The plants-server Server')
});

app.listen(port, () => {
  console.log(`plants server is running on: ${port}`)
});