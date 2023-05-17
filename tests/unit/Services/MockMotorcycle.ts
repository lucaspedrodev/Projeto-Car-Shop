import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const cadastroMoto: IMotorcycle = {
  id: '6464eb71e27f07e3dd41f343',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const allMotos: IMotorcycle[] = [

  {
    id: '6464eb71e27f07e3dd41f343',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '6464ebd2e27f07e3dd41f345',
    model: 'Honda 125 biz',
    year: 2009,
    color: 'azul',
    status: true,
    buyValue: 12,
    category: 'Street',
    engineCapacity: 125,
  },
  {
    id: '6464ebe8e27f07e3dd41f347',
    model: 'Honda 150 biz',
    year: 2009,
    color: 'azul',
    status: true,
    buyValue: 12,
    category: 'Street',
    engineCapacity: 150,
  },
  {
    id: '6464ec1fe27f07e3dd41f349',
    model: 'MT-03',
    year: 2022,
    color: 'preta',
    status: true,
    buyValue: 47,
    category: 'Street',
    engineCapacity: 321,
  },
  {
    id: '6464ec31e27f07e3dd41f34b',
    model: 'MT-07',
    year: 2022,
    color: 'vermelha',
    status: true,
    buyValue: 67,
    category: 'Street',
    engineCapacity: 321,
  },
];

const motoPeloID: IMotorcycle = {
  id: '6464ec1fe27f07e3dd41f349',
  model: 'MT-03',
  year: 2022,
  color: 'preta',
  status: true,
  buyValue: 47,
  category: 'Street',
  engineCapacity: 321,
};

const updateMoto = {
  id: '6464ec1fe27f07e3dd41f349',
  model: 'MT-03',
  year: 2022,
  color: 'preta',
  status: true,
  buyValue: 47,
  category: 'Street',
  engineCapacity: 321,
};

const motos = { cadastroMoto, allMotos, motoPeloID, updateMoto };

export default motos;