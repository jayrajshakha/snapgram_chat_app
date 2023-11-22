import { Account, Client } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("655dcb54c6d5fec235fc");

export const account = new Account(client);

export { ID } from "appwrite";
