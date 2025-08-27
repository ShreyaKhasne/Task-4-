// Import Express
const express = require('express');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to Simple Express API!');
});

// GET API Route
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// POST API Route
app.post('/api/data', (req, res) => {
    const { name } = req.body;
    res.json({ success: true, message: `Hello, ${name}!` });
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
