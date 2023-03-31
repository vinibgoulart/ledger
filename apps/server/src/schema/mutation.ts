import { GraphQLObjectType } from "graphql";
import { transactionMutation } from "../modules/transaction/mutations/transactionMutation";


export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    transactionMutation
  })
})