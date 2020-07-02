const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const DemoType = new GraphQLObjectType({
  name: 'DemoType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    demo: {
      type: DemoType,
      resolve() {
        return 'demo';
      },
    },
  }),
});

module.exports = RootQueryType;
