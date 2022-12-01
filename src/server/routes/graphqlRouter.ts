import { NextFunction } from 'express';

const { ApolloServer, gql } = require('apollo-server');

const { typeDefs } = require('./schema');
const {
  Query,
  People,
  PeopleInFilm,
  Pilot,
  PlanetsInFilm,
  Species,
  SpeciesInFilm,
  StarshipSpec,
  VesselsInFilm,
  Planet,
  Film,
  Vessel,
  Mutation,
} = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    People,
    PeopleInFilm,
    Pilot,
    PlanetsInFilm,
    Species,
    SpeciesInFilm,
    StarshipSpec,
    VesselsInFilm,
    Planet,
    Film,
    Vessel,
    Mutation,
  },
});

// server will be listening at 4000
//@ts-ignore
server.listen().then(({ url }) => {
  console.log('Server listening at ' + url);
});
