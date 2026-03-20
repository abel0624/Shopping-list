import { Client, Account, ID, Avatars } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject("69b54466002ca5a3e264")
  .setPlatform("dev.noComp.Shopping-List");

export const account = new Account(client);
export const avatars = new Avatars(client);
