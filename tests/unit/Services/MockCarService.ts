import ICar from '../../../src/Interfaces/ICar';

const allCars: ICar[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: undefined,
    model: 'Corsa wind',
    status: false,
    year: 1996,
    color: 'vermelho',
    buyValue: 8.000,
    doorsQty: 2,
    seatsQty: 5,
  },
  {
    id: undefined,
    model: 'voyage',
    status: false,
    year: 2014,
    color: 'Black',
    buyValue: 33.000,
    doorsQty: 4,
    seatsQty: 5,
  },
];
  
const carOne: ICar = {
  id: '634852326b35b59438fbea2f',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};
const mock = {
  allCars,
  carOne,
};
export default mock;