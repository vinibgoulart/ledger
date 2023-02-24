import { Schema, Types, Document, model } from "mongoose";

type BankAccount = {
  _id: Types.ObjectId;
  name: string;
  balance: number;
  createdAt: Date;
  updatedAt: Date;
  removedAt: Date;
};

export type IBankAccount = Document & BankAccount;

const BankAccountSchema = new Schema<IBankAccount>(
  {
    name: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
    removedAt: {
      type: Date,
      index: true,
      default: null,
      es_indexed: true,
    },
  },
  {
    collection: "BankAccount",
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const BankAccountModel = model<IBankAccount>("BankAccount", BankAccountSchema);

export default BankAccountModel;
