const express = require('express');
const app = express();
const PORT = 3000;

// Define a simple endpoint
app.get('/api/data', (req, res) => {
    const data = { message: "Hello from the server!" };
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
