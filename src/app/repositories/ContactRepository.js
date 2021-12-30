const { v4 } = require('uuid');

const db = require('../../database');

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
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM contacts ORDER BY name ${direction}`);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);

    return row;
  }

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(
      `
    INSERT INTO contacts(name, email, phone, category_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *`,
      [name, email, phone, category_id],
    );

    return row;
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };
      contacts = contacts.map((contact) => (contact.id === id ? updatedContact : contact));

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactRepository();
