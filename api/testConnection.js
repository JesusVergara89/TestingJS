const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://root:root123@localhost:27017/demo';

async function testConnection() {
  const client = new MongoClient(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    console.log("Conexión exitosa a MongoDB");
    const db = client.db('demo');
    const collections = await db.listCollections().toArray();
    console.log("Colecciones en la base de datos:", collections);
  } catch (error) {
    console.error("Error en la conexión:", error);
  } finally {
    await client.close();
  }
}

testConnection();
