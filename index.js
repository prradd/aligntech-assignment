const express = require('express');
const path = require('path');
cors = require('cors');
const cache = require('./middleware/cache');
const photos = require('./Photos');
const randomPhotos = require('./utils/helpers');

const app = express();

// Init middleware
app.use(cache);

app.use(cors());

// Get the random photos
app.get('/api/random', (req, res) => {
    res.json(randomPhotos(photos, 5));
})

// Set static folder
app.use(express.static(path.join(__dirname, 'client/public')));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));