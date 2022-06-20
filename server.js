//import vehicles from './cypress/fixtures/vehiculos.json';
const {MongoClient}= require("mongodb");
const uri =
"mongodb+srv://api:cHFYl8BUbvq9LFKB@testingcluster.4cl9wmc.mongodb.net/drizip?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function main() {
try {
    await client.connect();
    //await listDatabases(client);
    await resetDatabase(client);
} catch(e) {
    console.error(e);
} finally {
    // Ensures that the client will close when you finish/error
    await client.close();
}
}
main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}
async function resetDatabase(client){
    // backup db
    // erace db
    const database = client.db("drizip");
    const cars = database.collection("vehiculos");
    vehiculos= await cars.vehiculos.find();
    console.log("documents");
    vehiculos.forEach(console.log());
    //emptyCollection = await client.db.vehiculos.deleteMany({});
    // insert data from json files
}