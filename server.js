require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/db/db");

async function startServer() {

    await connectDB();

    app.listen(process.env.PORT || 5000, () => {
        console.log("Server is listening");
    });

}

startServer();