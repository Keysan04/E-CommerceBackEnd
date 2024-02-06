import { MongoClient, ObjectId } from "mongodb";

let usersClient, productsClient, catProductsClient;
export const usersCollection = async () => {
  try {
    usersClient = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = usersClient.db();
    const usersCollection = db.collection("categories");
    console.log("connected to users collection");
    const users = await usersCollection.find({}).toArray();
    return users;
    // console.log(users);
  } catch (error) {
    console.error("Error:", error);
    return null;
  } finally {
    await usersClient.close();
  }
};
export const productsCollection = async (id) => {
  try {
    productsClient = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = productsClient.db();
    const objectId = new ObjectId(id);
    const productCollections = db.collection("products");
    console.log("connected to products collection");

    const products = id
      ? await productCollections.findOne({ _id: objectId })
      : await productCollections.find({}).toArray();
    console.log("hehe");
    return products;
  } catch (error) {
    console.error("Error:", error);
    return null;
  } finally {
    await productsClient.close();
  }
};

export const categoryProuductsCollection = async (id) => {
  try {
    catProductsClient = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = catProductsClient.db();
    // const objectId = new ObjectId(id);
    const catProducts = db.collection("products");
    console.log("connected to products collection");

    const items = id
      ? await catProducts.find({ parentCatId: id }).toArray()
      : await catProducts.find({}).toArray();
    console.log("hehe");
    return items;
  } catch (error) {
    console.error("Error:", error);
    return null;
  } finally {
    await catProductsClient.close();
  }
};
