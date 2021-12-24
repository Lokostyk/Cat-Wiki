require('dotenv').config()
const express = require("express")
const {MongoClient} = require("mongodb")
const app = express()

const client = new MongoClient(process.env.MOGNO_URI)

async function main() {
  try {
    await client.connect();
    const db = await getAllCats(client);
    return db[0]._id.toString()
  } finally {
    await client.close();
  }
}
main().catch(console.dir);

app.get("/",async (req,res)=>{
  res.send(await main())
})
app.listen(3000)

async function getAllCats(client){
  return client.db("CatWiki").collection("Cats").find().toArray()
}