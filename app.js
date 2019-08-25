const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require("cors")
const {dbUrl} = require('./config')

mongoose.connect(dbUrl);
mongoose.connection.once('open', () => {
  console.log('connected to database')
})

const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('now listening for requests on port 4000')
})

