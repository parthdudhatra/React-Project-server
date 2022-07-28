const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

// import userRoutes from "./routes/user"
const authrouter = require('./routes/auth-route');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello From Express")
})

app.use('/auth', authrouter)

app.all('*',(req, res) => res.send("That route doent's exits"))

app.listen(port, () => {
    console.log("server is connected", port)
})