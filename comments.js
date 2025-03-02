// Create web server
// Create API
// Create a comment model
// Create a comment controller
// Create a comment service
// Create a comment repository
// Create a comment memory repository

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');

app.use(bodyParser.json());

app.get('/comments', comments.getAll);
app.get('/comments/:id', comments.getById);
app.post('/comments', comments.create);
app.put('/comments/:id', comments.update);
app.delete('/comments/:id', comments.remove);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});