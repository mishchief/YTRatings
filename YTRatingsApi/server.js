"use strict";
import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import  mongoose from 'mongoose';
import cors from 'cors';

import typeDefs from './schema';
import resolvers from './resolvers';
import YouTuber from './models/youtubers';
import Categories from './models/categories';
import Review from './models/reviews';
// config files
import config from './config/dbconfig'

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
// Mongoose Promises deprecated so we reassign it here
mongoose.Promise = global.Promise;

const app = express();
mongoose.connect(config.db);

let db = mongoose.connection;

app.use('*', cors({ origin: 'http://localhost:3000' }));
// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { YouTuber, Categories, Review } }));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

app.listen(4000, () => {
    console.log('Server is running on port 4000');
    db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')});
    db.once('open', () => {
        console.log( '+++Connected to mongoose')
    })
});
