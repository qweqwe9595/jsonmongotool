import { MongoClient } from 'mongodb';
import { readFile } from 'fs/promises';



export async function connectToCluster(uri) {
  let mongoClient;
  try {
      mongoClient = new MongoClient(uri);
      console.log('Connecting to MongoDB Atlas cluster...');
      await mongoClient.connect();
      console.log('Successfully connected to MongoDB Atlas!');

      return mongoClient;
  } catch (error) {
      console.error('Connection to MongoDB Atlas failed!', error);
      process.exit();
  }
}

export async function createStudentDocument(collection) {
  await collection.insertMany(json);
}

const json = JSON.parse(await readFile(new URL('./cartDetails.json', import.meta.url)));
console.log(json)
const DB_URI = "mongodb+srv://lippo:asd123@nodepractice.5jaag.mongodb.net/?retryWrites=true&w=majority"
const DB_NAME = "NodePractice"
const COLLECTION = "test"

export async function executeStudentCrudOperations() {
  const uri = DB_URI;
  let mongoClient;
  try {
      mongoClient = await connectToCluster(uri);
      const db = mongoClient.db(DB_NAME);
       const collection = db.collection(COLLECTION);

       await createStudentDocument(collection);
  } finally {
      await mongoClient.close();
  }
}

executeStudentCrudOperations()