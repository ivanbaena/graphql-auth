const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    dummyField: { type: GraphQLID },
  },
});

module.exports = RootQueryType;
