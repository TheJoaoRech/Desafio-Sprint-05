const request = require('supertest');
const app = require('../../src/app');
const Person = require('../../src/app/schema/PersonSchema');

describe('Update a person!', () => {
  beforeEach(async () => {
    await Person.deleteMany();
  });
  it('Updating a person.', async () => {
    const person = await request(app).post('/api/v1/person').send({
      name: 'João da Silva',
      cpf: '131.147.860-49',
      birthDay: '10/10/2002',
      email: 'joazinho@emai.com',
      password: '123456',
      canDrive: 'yes'
    });
    const updatePerson = await request(app).put(`/api/v1/person/${person.body._id}`).send({
      password: '1234567'
    });
    expect(updatePerson.status).toBe(200);
  });
  it('Updating a person with an error.', async () => {
    const person = await request(app).post('/api/v1/person').send({
      name: 'João da Silva',
      cpf: '131.147.860-49',
      birthDay: '10/10/2002',
      email: 'joaoSilva@email.com',
      password: '123456',
      canDrive: 'yes'
    });
    const updatePerson = await request(app).put(`/api/v1/person/${person.body._id}`).send({
      canDrive: 'maybe'
    });
    expect(updatePerson.status).toBe(400);
  });
  it('Updating a person with an error in his ID.', async () => {
    await request(app).post('/api/v1/person').send({
      name: 'João da Silva',
      cpf: '131.147.860-49',
      birthDay: '10/10/2002',
      email: 'joaoSilva@email.com',
      password: '123456',
      canDrive: 'yes'
    });
    const id = '62b25ffae2f0ef696a7ba37';
    const people = await request(app).put(`/api/v1/person/${id}`).send();
    expect(people.status).toBe(400);
  });
});
