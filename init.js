console.log('hello world')

const express = require('express');
const app = express();
const port = 3000;

// Client data
const clients = [
  {
    id: 1,
    name: 'John Doe1',
    phone: '555-555-5555',
    email: 'johndoe@example.com',
    quantity: 10
  },
  {
    id: 2,
    name: 'Jane Doe2',
    phone: '555-555-5556',
    email: 'janedoe@example.com',
    quantity: 20
  },
  // ...
  {
    id: 10,
    name: 'John Smith3',
    phone: '555-555-5565',
    email: 'johnsmith@example.com',
    quantity: 100
  }
];

// Route for getting all clients
app.get('/clients', (req, res) => {
  res.send(clients);
});

// Route for getting a client by ID
app.get('/clients/:id', (req, res) => {
  const client = clients.find(c => c.id === parseInt(req.params.id));
  if (!client) {
    return res.status(404).send('The client with the given ID was not found.');
  }
  res.send(client);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});