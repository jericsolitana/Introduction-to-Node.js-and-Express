const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Initial items
const items = ['Apple', 'Banana', 'Orange'];

// Serve static files from "public" folder
app.use(express.static('public'));

// Parse JSON bodies
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// GET / - serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// GET /items - return the current list
app.get('/items', (req, res) => {
    res.json(items);
});

// POST /items - add a new item
app.post('/items', (req, res) => {
    const newItem = req.body.item;
    console.log('Received item:', newItem);
    if (newItem) items.push(newItem);
    res.json(items); // return updated list
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});