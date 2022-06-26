const request = require('supertest');
const app = require('../../src/app');
const Person = require('../../src/app/schema/PersonSchema');

describe('Create person!', () => {
  beforeEach(async () => {
    await Person.deleteMany();
  });

  it('Create a person for test!', async () => {
    const person = {
      name: 'Joãozinho da Silva',
      cpf: '131.147.860-49',
      birthDay: '10/10/2002',
      email: 'joazinho@emai.com',
      password: '123456',
      canDrive: 'yes'
    };
    const response = await request(app).post('/api/v1/person/').send(person);
    const { status } = response;
    expect(status).toBe(201);
  });
  it('It should return an error in the name.', async () => {
    const person = {
      name: 'J',
      cpf: '131.147.860-49',
      birthDay: '10/10/2002',
      email: 'joazinho@emai.com',
      password: '123456',
      canDrive: 'yes'
    };
    const response = await request(app).post('/api/v1/person/').send(person);
    const { status } = response;
    expect(status).toBe(400);
  });
  it('It should return an error in the cpf.', async () => {
    const person = {
      name: 'Joãozinho da Silva',
      cpf: '1',
      birthDay: '10/10/2002',
      email: 'joazinho@emai.com',
      password: '123456',
      canDrive: 'yes'
    };
    const response = await request(app).post('/api/v1/person/').send(person);
    const { status } = response;
    expect(status).toBe(400);
  });
  it('It should return an error in the birthDay.', async () => {
    const person = {
      name: 'Joãozinho da Silva',
      cpf: '131.147.860-49',
      birthDay: '10',
      email: 'joazinho@emai.com',
      password: '123456',
      canDrive: 'yes'
    };
    const response = await request(app).post('/api/v1/person/').send(person);
    const { status } = response;
    expect(status).toBe(400);
  });
  it('It should return an error in the email.', async () => {
    const person = {
      name: 'Joãozinho da Silva',
      cpf: '131.147.860-49',
      birthDay: '10/10/2002',
      email: 'joazinhoemaicom',
      password: '123456',
      canDrive: 'yes'
    };
    const response = await request(app).post('/api/v1/person/').send(person);
    const { status } = response;
    expect(status).toBe(400);
  });
  it('It should return an error in the password.', async () => {
    const person = {
      name: 'Joãozinho da Silva',
      cpf: '131.147.860-49',
      birthDay: '10/10/2002',
      email: 'joazinho@emai.com',
      password: '1',
      canDrive: 'yes'
    };
    const response = await request(app).post('/api/v1/person/').send(person);
    const { status } = response;
    expect(status).toBe(400);
  });
  it('It should return an error in the canDrive.', async () => {
    const person = {
      name: 'Joãozinho da Silva',
      cpf: '131.147.860-49',
      birthDay: '10/10/2002',
      email: 'joazinho@emai.com',
      password: '123456',
      canDrive: 'L'
    };
    const response = await request(app).post('/api/v1/person/').send(person);
    const { status } = response;
    expect(status).toBe(400);
  });
});
