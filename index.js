const express = require("express");
const bodyParser = require("body-parser");


const contactsRouter = require("./routes/contacts");
const commentsRouter = require("./routes/comments");
const vehiclesRouter = require("./routes/vehicles");
const productsRouter = require("./routes/products");

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use("/", contactsRouter, commentsRouter, vehiclesRouter, productsRouter);

const port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
   });


 

 

 




