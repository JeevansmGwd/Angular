const express = require("express");
const cors = require('cors')
const app = express();
const port = 3001;
app.use(cors())
app.use(express.json())
let data = [{
    name:"Prithesh salian",
    age:"20"
}]

app.get("/", function (req, res) {
  res.send(data);
});

app.put("/", (req,res)=>{
    const newData = req.body;
    data.push(newData)
    res.send(data)
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
