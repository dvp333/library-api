const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const uri = "mongodb+srv://semana.semana@cluster0-eo6e4.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri);
mongoose.connection.once('open', () => {
  console.log('connected to database')
})

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('now listening for requests on port 4000')
})

