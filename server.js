const express = require('express');
const app = express();
const PORT = 3006;
app.use(express.static('build'));

// this is a server for testing the built static page.
app.listen(PORT, () => console.log(`Server is now listening on port ${PORT}!`));
