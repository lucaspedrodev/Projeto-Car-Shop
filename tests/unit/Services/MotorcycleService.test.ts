import chai from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import motos from './MockMotorcycle';

const { expect } = chai;

describe('testa a camada service de MotorcycleService', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('testa se cadastra uma moto nova', async function () {
    sinon.stub(Model, 'create').resolves(motos.cadastroMoto);

    const service = new MotorcycleService();
    const result = await service.createMotorcycle(motos.cadastroMoto);
    expect(result).to.be.deep.equal(motos.allMotos[0]);
  });

  it('testa se lista todos os veículos na rota /motorcycles', async function () {
    sinon.stub(Model, 'find').resolves(motos.allMotos);
    
    const service = new MotorcycleService();
    const result = await service.findMotorcycle();

    expect(result).to.be.deep.equal(motos.allMotos);
  });

  it('testa se lista apenas um veículo na rota /motorcycles', async function () {
    sinon.stub(Model, 'findOne').resolves(motos.motoPeloID);

    const service = new MotorcycleService();
    const result = await service.findMotorcycle('6464ec1fe27f07e3dd41f349');

    expect(result).to.be.deep.equal(motos.motoPeloID);
  });

  it('testa se atualiza um veículo na rota /motorcycles', async function () {
    sinon.stub(Model, 'findOneAndUpdate').resolves(motos.updateMoto);

    const service = new MotorcycleService();
    const result = await service.updateMotorcycle('6464ec1fe27f07e3dd41f349', motos.updateMoto);

    expect(result).to.be.deep.equal(motos.updateMoto);
  });
});