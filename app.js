const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const {MongoClient} = require('mongodb');



const uri = "mongodb+srv://<username>.<password>@cluster0-eo6e4.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, uri_decode_auth: true,  useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('now listening for requests on port 4000')
})

