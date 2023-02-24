import { Document, model, Schema, Types } from "mongoose";
import { IBankAccount } from "../bankAccount/BankAccountModel";

type TransactionStatus = "PENDING" | "DONE";

type TransactionType = "CREDIT" | "DEBIT";

type Transaction = {
  _id: Types.ObjectId;
  from: IBankAccount;
  to: IBankAccount;
  type: TransactionType;
  value: number;
  status: TransactionStatus;
  refund: boolean;
  createdAt: Date;
};

export type ITransaction = Document & Transaction;

const TransactionSchema = new Schema<ITransaction>(
  {
    from: {
      type: Types.ObjectId,
      ref: "BankAccount",
      required: true,
    },
    to: {
      type: Types.ObjectId,
      ref: "BankAccount",
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["CREDIT", "DEBIT"],
    },
    value: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["PENDING", "DONE"],
    },
    refund: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
    },
  }
);

const TransactionModel = model<ITransaction>("Transaction", TransactionSchema);

export default TransactionModel;
