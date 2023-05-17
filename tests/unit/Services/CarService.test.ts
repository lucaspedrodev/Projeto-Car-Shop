import chai from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import mock from './MockCarService';

const { expect } = chai;

describe('testa a camada service de CarService', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('testa se cadastra um carro novo', async function () {
    sinon.stub(Model, 'create').resolves(mock.carOne);

    const service = new CarService();
    const result = await service.createCar(mock.carOne);

    expect(result).to.be.deep.equal(mock.carOne);
  });

  it('testa se lista todos os veículos na rota /cars', async function () {
    sinon.stub(Model, 'find').resolves(mock.allCars);

    const service = new CarService();
    const result = await service.findCar();

    expect(result).to.be.deep.equal(mock.allCars);
  });

  it('testa se lista apenas um veículo na rota /cars', async function () {
    sinon.stub(Model, 'findOne').resolves(mock.carOne);

    const service = new CarService();
    const result = await service.findCar('634852326b35b59438fbea2f');

    expect(result).to.be.deep.equal(mock.carOne);
  });
});