const request = require('supertest');
const app = require('../../src/app');
const Person = require('../../src/app/schema/PersonSchema');

describe('Find all the persons!', () => {
  beforeEach(async () => {
    await Person.deleteMany();
  });
  it('Return all people registered in the system.', async () => {
    const personGet = await request(app).get('/api/v1/person').send();
    expect(personGet.status).toBe(204);
  });
  it('Return all people registered in the system with error.', async () => {
    const personGet = await request(app).get('/api/v1/person').send({
      name: 'João da Silva',
      cpf: '131.147.86049',
      birthDay: '10/10/2002',
      email: 'joazinho@emai.com',
      password: '123456',
      canDrive: 'yes'
    });
    expect(personGet.status).toBe(400);
  });
  it('Return a person using their id.', async () => {
    const person = await request(app).post('/api/v1/person').send({
      name: 'João da Silva',
      cpf: '131.147.860-49',
      birthDay: '10/10/2002',
      email: 'joazinho@emai.com',
      password: '123456',
      canDrive: 'yes'
    });
    const people = await request(app).get(`/api/v1/person/${person.body._id}`).send();
    expect(people.status).toBe(200);
  });
  it('Return a person using their id with an erro.', async () => {
    const person = await request(app).post('/api/v1/person').send({
      name: 'João da Silva',
      cpf: '131.147.860-49',
      birthDay: '10/10/2002',
      email: 'joazinho@emai.com',
      password: '12345',
      canDrive: 'yes'
    });
    const people = await request(app).get(`/api/v1/person/${person.body._id}`).send();
    expect(people.status).toBe(400);
  });
});
