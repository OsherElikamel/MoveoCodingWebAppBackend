const express = require('express');
const cors = require('cors');
const codeBlockRoutes = require('./routes/codeBlocks');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/api/codeblocks', codeBlockRoutes);
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;
