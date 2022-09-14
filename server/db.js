const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://root:abcdefgh@cluster0.dhmsadw.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function getData() {
  try {
    const database = client.db('appointment');
    const movies = database.collection('local');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.find().toArray()

    return movie;
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

async function setData(obj) {
  try {
    const database = client.db('appointment');
    const movies = database.collection('local');
    // create a document to insert
    const doc = obj;
    const result = await movies.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } 
  finally {
    // await client.close();
  }
}

module.exports = {
  getData,
  setData,
}
