const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Pedro Barros',
    email: 'pedrobars7a@gmail.com',
    phone: '73999577204',
    category: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactRepository();
