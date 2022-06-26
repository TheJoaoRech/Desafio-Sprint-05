const request = require('supertest');
const app = require('../../src/app');
const Person = require('../../src/app/schema/PersonSchema');

const authenticatePost = {
  name: 'João Lopes',
  cpf: '131.147.860-49',
  birthDay: '03/03/1998',
  email: 'joazinho@email.com',
  password: '123456',
  canDrive: 'yes'
};

describe('Authenticate test.', () => {
  beforeEach(async () => {
    await Person.deleteMany();
  });

  it('Authenticate a person.', async () => {
    await request(app).post('/api/v1/person').send(authenticatePost);
    const aut = await request(app).post(`/api/v1/authenticate`).send({
      email: authenticatePost.email,
      password: authenticatePost.password
    });
    expect(aut.status).toBe(200);
  });
  it('Authenticate a person with an error.', async () => {
    await request(app).post('/api/v1/person').send(authenticatePost);
    const aut = await request(app).post(`/api/v1/authenticate`).send({
      email: authenticatePost.email,
      password: '12345789'
    });
    expect(aut.status).toBe(400);
  });
});
