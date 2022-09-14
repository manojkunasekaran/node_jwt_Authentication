const mongoose = require('mongoose');

const connectDB = async() => {
    // await mongoose.connect(process.env.MONGO_URI, {
    //     useNewUrlParser: true,
    //     useCreateIndex: true,
    //     useUnifiedTopoogy: true,
    //     useFindAndModify: true
    // });
    
    // console.log("Mongodb Connected");

    mongoose.connect(process.env.MONGO_URI,
        err => {
            if(err) throw err;
            console.log('connected to MongoDB')
        });
} 

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://manoj:ManoManoj@cluster0.3ovphyq.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
//   console.log("Mongodb Connected");
// });

module.exports = connectDB;