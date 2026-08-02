const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect(
        "mongodb://narutousaskue66_db_user:6ehVtdxwDWAD7pNw@ac-j2dgiwe-shard-00-00.j4hgj0z.mongodb.net:27017,ac-j2dgiwe-shard-00-01.j4hgj0z.mongodb.net:27017,ac-j2dgiwe-shard-00-02.j4hgj0z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eoxliw-shard-0&authSource=admin&appName=Cluster0" );

    console.log("Connected to Database");
}

module.exports = connectDB;