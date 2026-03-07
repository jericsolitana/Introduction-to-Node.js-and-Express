const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));
app.use(express.json());

// Get route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

// Post route
app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Recieved: ${JSON.stringify(data)}`);
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});