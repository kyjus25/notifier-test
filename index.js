const notifier = require('node-notifier');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/', (req, res) => {
  let verbiage = '';
  switch (req.body.action) {
    case 'added':
      verbiage = 'added to';
      break;
    case 'deleted':
      verbiage = 'deleted from';
      break;
    case 'moved_column':
      verbiage = ['moved to a different column on']
  }
  notifier.notify({
    title: 'Glo Boards',
    message: `"${req.body.card.name}" has been ${verbiage} ${req.body.board.name} by ${req.body.sender.name}`,
    icon: path.join(__dirname, 'glo.png'),
    actions: 'Close'
  });
});

app.listen(port, () => {
  notifier.notify({
    title: 'Glo Boards',
    message: `Listening on port ${port}`,
    icon: path.join(__dirname, 'glo.png'),
    actions: 'Close'
  });
}); 
