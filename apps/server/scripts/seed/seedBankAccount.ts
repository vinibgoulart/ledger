import { connectDatabase } from "../../src/database"
import BankAccountModel from "../../src/modules/bankAccount/BankAccountModel"

(async () => {
  await connectDatabase()

  await (new BankAccountModel({
    name: 'Mediator',
    balance: 0
  }).save())

  await (new BankAccountModel({
    name: 'Account (1)',
    balance: 1000.0
  }).save())

  await (new BankAccountModel({
    name: 'Account (2)',
    balance: 1000.0
  }).save())

  console.log('Seeding complete!')

  process.exit(0)
})()