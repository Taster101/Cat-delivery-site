const express = require('express');
const app = express();
//Port
const PORT = process.env.PORT || 3001;
const { typeDefs , resolvers } = require('./schemas')
//mongoose set up

const db = require('./config/connection')

// setting up appllo
const { ApolloServer } = require('apollo-server-express');
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers

});

//Start apollo server
const startApolloServer = async () => {
await apolloServer.start();
apolloServer.applyMiddleware({ app });

    db.once('open', () => {
    
    app.listen(PORT, () => {
        console.log('Server runing on port 3001!')
    })
})
}


app.use(express.urlencoded({extended: true}));
app.use(express.json());

startApolloServer();