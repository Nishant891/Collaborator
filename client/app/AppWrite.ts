import { Client, Account, Databases } from "appwrite";

  export const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("64719ed6c9b56a6c9afe");

export const databases = new Databases(client);
export const account = new Account(client);


