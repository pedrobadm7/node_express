const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Pedro Barros',
    email: 'pedro@barros.com',
    phone: '99999999',
    category: v4(),
  },
  {
    id: v4(),
    name: 'Adriano Barros',
    email: 'adriano@barros.com',
    phone: '99999999',
    category: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();
