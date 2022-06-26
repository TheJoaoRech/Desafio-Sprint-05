const request = require('supertest');
const app = require('../../src/app');
const Person = require('../../src/app/schema/PersonSchema');

describe('Delete person!', () => {
  beforeEach(async () => {
    await Person.deleteMany();
  });
  it('Delete a person using his ID.', async () => {
    const person = await request(app).post('/api/v1/person').send({
      name: 'Joãozinho da Silva',
      cpf: '131.147.860-49',
      birthDay: '10/10/2002',
      email: 'joazinho@emai.com',
      password: '123456',
      canDrive: 'yes'
    });
    const people = await request(app).delete(`/api/v1/person/${person.body._id}`).send();
    expect(people.status).toBe(204);
  });
  it('Delete a person using his ID with an error!', async () => {
    await request(app).post('/api/v1/person').send({
      name: 'Joãozinho da Silva',
      cpf: '131.147.860-49',
      birthDay: '10/10/2002',
      email: 'joazinho@emai.com',
      password: '123456',
      canDrive: 'yes'
    });
    const id = '62b25ffae2f0ef696a7ba37';
    const people = await request(app).delete(`/api/v1/person/${id}`).send({
      name: 'João Neto da Silva'
    });
    expect(people.status).toBe(404);
  });
});
