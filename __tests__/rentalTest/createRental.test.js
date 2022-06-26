const request = require('supertest');
const app = require('../../src/app');
const Rental = require('../../src/app/schema/RentalSchema');

describe('Create a rental for test!', () => {
  beforeEach(async () => {
    await Rental.deleteMany();
  });
  it('Create a rental for test', async () => {
    const rental = {
      name: 'Localiza Rent a Car',
      cnpj: '16.670.085/0001-55',
      activities: 'Aluguel de Carros E Gestão de Frotas',
      address: [
        {
          zipCode: '96200-200',
          number: '1234',
          isFilial: false
        }
      ]
    };
    const response = await request(app).post('/api/v1/rental/').send(rental);
    const { status } = response;
    expect(status).toBe(201);
  });
  it('Create a rental with worng name.', async () => {
    const rental = {
      name: 'L',
      cnpj: '16.670.085/0001-55',
      activities: 'Aluguel de Carros E Gestão de Frotas',
      address: [
        {
          zipCode: '96200-200',
          number: '1234',
          isFilial: false
        }
      ]
    };
    const response = await request(app).post('/api/v1/rental/').send(rental);
    const { status } = response;
    expect(status).toBe(400);
  });
  it('Create a rental with worng cnpj.', async () => {
    const rental = {
      name: 'Localiza Rent a Car',
      cnpj: '16',
      activities: 'Aluguel de Carros E Gestão de Frotas',
      address: [
        {
          zipCode: '96200-200',
          number: '1234',
          isFilial: false
        }
      ]
    };
    const response = await request(app).post('/api/v1/rental/').send(rental);
    const { status } = response;
    expect(status).toBe(400);
  });
  it('Create a rental with worng activities.', async () => {
    const rental = {
      name: 'Localiza Rent a Car',
      cnpj: '16.670.085/0001-55',
      activities: 'A',
      address: [
        {
          zipCode: '96200-200',
          number: '1234',
          isFilial: false
        }
      ]
    };
    const response = await request(app).post('/api/v1/rental/').send(rental);
    const { status } = response;
    expect(status).toBe(400);
  });
  it('Create a rental with worng zipCode.', async () => {
    const rental = {
      name: 'Localiza Rent a Car',
      cnpj: '16.670.085/0001-55',
      activities: 'Aluguel de Carros E Gestão de Frotas',
      address: [
        {
          zipCode: '9',
          number: '1234',
          isFilial: false
        }
      ]
    };
    const response = await request(app).post('/api/v1/rental/').send(rental);
    const { status } = response;
    expect(status).toBe(400);
  });
  it('Create a rental with worng number.', async () => {
    const rental = {
      name: 'Localiza Rent a Car',
      cnpj: '16.670.085/0001-55',
      activities: 'Aluguel de Carros E Gestão de Frotas',
      address: [
        {
          zipCode: '96200-200',
          number: '',
          isFilial: false
        }
      ]
    };
    const response = await request(app).post('/api/v1/rental/').send(rental);
    const { status } = response;
    expect(status).toBe(400);
  });
  it('Create a rental with worng ifFIlial.', async () => {
    const rental = {
      name: 'Localiza Rent a Car',
      cnpj: '16.670.085/0001-55',
      activities: 'Aluguel de Carros E Gestão de Frotas',
      address: [
        {
          zipCode: '96200-200',
          number: '1234',
          isFilial: 'maybe'
        }
      ]
    };
    const response = await request(app).post('/api/v1/rental/').send(rental);
    const { status } = response;
    expect(status).toBe(400);
  });
  it('Create a rental with worng ifFIlial.', async () => {
    const rental = {
      name: 'Localiza Rent a Car',
      cnpj: '16.670.085/0001-55',
      activities: 'Aluguel de Carros E Gestão de Frotas',
      address: [
        {
          zipCode: '96200-200',
          number: '1234',
          isFilial: true
        },
        {
          zipCode: '96200-200',
          number: '1234',
          isFilial: true
        }
      ]
    };
    const response = await request(app).post('/api/v1/rental/').send(rental);
    const { status } = response;
    expect(status).toBe(201);
  });
});
