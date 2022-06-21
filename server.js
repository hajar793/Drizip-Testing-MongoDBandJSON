const vehiculo= require('./cypress/fixtures/vehiculos');
const marcas= require('./cypress/fixtures/marcas');
const textos= require('./cypress/fixtures/textos');
const users= require('./cypress/fixtures/users');
const MongoClient= require('mongodb').MongoClient;
const uri =
"mongodb+srv://api:cHFYl8BUbvq9LFKB@testingcluster.4cl9wmc.mongodb.net/drizip?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function main() {
try {
    await client.connect();
    await resetDatabase(client,"vehiculos");
    //await resetDatabase(client,"marcas");
    //await resetDatabase(client,"textos");
    //await resetDatabase(client,"users"); 
    //await resetDatabase(client,"alquileres");
    //await fillCollection(client,"users",users);
    //await fillCollection(client,"vehiculos",vehiculo);
    //await fillCollection(client,"marcas",marcas);
    //await fillCollection(client,"textos",textos);
    //await fillCollection(client,"alquileres",alquileres);
    
} catch(e) {
    console.error(e);
} finally {
    // Ensures that the client will close when you finish/error
    await client.close();
}
}
main().catch(console.error);

async function resetDatabase(client,collection){
    // erace collection
    const result= await client.db("drizip").collection(collection).deleteMany();
    console.log(`${result.deletedCount} document(s) was/were deleted from ${collection}`);
}
async function fillCollection (client,collection,json)
{   // insert data from json files
    const result = await client.db("drizip").collection(collection).insertMany(json); 
    console.log(result); 
}