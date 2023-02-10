const fs = require('fs');
const faker = require('faker');

const clients = [];
const numberOfClients = 20;

for (let i = 0; i < numberOfClients; i++) {
  const id = Math.floor(1000 + Math.random() * 9000);
  const name = faker.name.findName();
  const phone = faker.phone.phoneNumber();
  const email = faker.internet.email();
  const quantity = 0;
  
  clients.push({ id, name, phone, email, quantity });
}

fs.writeFile('client_Db.json', JSON.stringify(clients), (err) => {
  if (err) throw err;
  console.log('The client data was successfully saved to the file!');
});