import app from "./server.js";
import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviewsDAO.js"


const MongoClient = mongodb.MongoClient
const mongo_username = "dsakalli"
const mongo_password = "freemongodb"
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.lsog1zc.mongodb.net/?retryWrites=true&w=majority`

const port = 8000

MongoClient.connect(
    uri, 
    {
        maxPoolSize: 50,
        useNewUrlParser: true
    })
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        await ReviewsDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        })        
    })
