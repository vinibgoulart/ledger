import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";


export const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    foo: {
      type: new GraphQLNonNull(GraphQLString),
      resolve(){
        return 'bar'
      }
    }
  })
})