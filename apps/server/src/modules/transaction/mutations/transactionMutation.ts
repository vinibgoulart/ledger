import { GraphQLFloat, GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import BankAccountModel from "../../bankAccount/BankAccountModel";

type TransactionArgs = {
  fromAccountId: string
  toAccountId: string
  amount: number
}

export const transactionMutation = mutationWithClientMutationId({
  name: 'Transaction',
  inputFields: {
    fromAccountId: { type: new GraphQLNonNull(GraphQLString) },
    toAccountId: { type: new GraphQLNonNull(GraphQLString) },
    amount: { type: new GraphQLNonNull(GraphQLFloat) }
  },
  mutateAndGetPayload: async ({ fromAccountId, toAccountId, amount }: TransactionArgs) => {
    const fromAccount = await BankAccountModel
      .findOne({ _id: fromAccountId })

    if(!fromAccount) {
      return {
        error: 'Sender account not found',
        transactionId: null
      }
    }
    
    const toAccount = await BankAccountModel
      .findOne({ _id: toAccountId })

    if(!toAccount) {
      return {
        error: 'Receiver account not found',
        transactionId: null
      }
    }

    if(fromAccount.balance < amount) {
      return {
        error: 'Sender doesn\'t have sufficient balance',
        transactionId: null
      }
    }

    // TODO: To be continued...

    return {
      transactionId: '',
      error: null
    }
  },
  outputFields: {
    transactionId: {
      type: GraphQLString,
      resolve: ({ transactionId }) => transactionId 
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    }
  }
})