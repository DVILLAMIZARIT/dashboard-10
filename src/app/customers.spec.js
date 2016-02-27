import assert from 'assert';

describe ('test setup', () => {
  it('works', () => {
    assert(true)
  });
});


import Customers from './customers';
describe ('Costumers Class', () => {

  let customers = new Customers();
  describe('Constructor', () => {
    it('is instance of Customers', () => {
      return assert(customers instanceof Customers);
    });
    it('is has initial no customers', () => {
      return assert(customers.list.length === 0);
    });
  });
  describe('load customers data and get the list', () => {
    it('works', () => {
      customers.loadCustomers();
      return assert(customers.list.length > 0);
    });
  });
  describe('a loaded customer has a id and a name', () => {
    it('works', () => {
      let customer = customers.list[0];
      return assert( customer.hasOwnProperty('id') && customer.hasOwnProperty('name'));
    });
  });

});
