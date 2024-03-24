const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let objectsArray = [];

app.use(bodyParser.json());
app.use(cors()); // Add this line to enable CORS

app.put('/api/objects', (req, res) => {
    const newObject = req.body;
    objectsArray.push(newObject);
    res.status(201).json(newObject);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
