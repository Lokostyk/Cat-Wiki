require('dotenv').config()
const {MongoClient} = require("mongodb")

const client = new MongoClient(process.env.MOGNO_URI)

async function run() {
  try {
    await client.connect();
    const db = client.db();
    // Query for a movie that has the title 'Back to the Future'
    console.log(db);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);