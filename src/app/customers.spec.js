import assert from 'assert';

describe ('test setup', () => {
  it('works', () => {
    assert(true)
  });
});


import Customers from './customers';
describe ('Basic Test for Costumers Class', () => {

  let customers = new Customers('https://mock');
  describe('Constructor', () => {
    it('is instance of Customers', () => {
      return assert(customers instanceof Customers);
    });
    it('it has initially loaded customers', () => {
      return assert(customers.getCustomerObjectList().length !== 0);
    });
    it('it has initially set the companies', () => {
      return assert(customers.getCompanyList().length !== 0);
    });
  });

  describe('load customers data', () => {
    it('can be reloaded', () => {
      let loaded = customers.load('https://mock');
      return assert(loaded);
    });
    it('the CustomerObjectList has all defined params', () => {
      let singleCustomer = customers.getCustomerObjectList()[0];
      return assert( singleCustomer.hasOwnProperty('id') && singleCustomer.hasOwnProperty('firstName'));
    });
    it('the result has all defined params', () => {
      let companies = customers.getCompanyList();
      return assert(companies.length > 0);
    });
    it('companyA and companyB are in the result', () => {
      let companies = customers.getCompanyList();
      return assert(companies.indexOf('CompanyA') > -1 && companies.indexOf('CompanyB') > -1);
    });
  });
});

describe ('sale calculation', () => {
  let customers = new Customers('https://mock');
  describe('sales by company', () => {
    it('returns the total sales if param is missing', () => {
      return assert(customers.getSalesByCompany() === 7457.73);
    });
    it('returns only sales for the defined company', () => {
      return assert(customers.getSalesByCompany('CompanyB') === 1033.44);
    });
  });
  describe('top companies', () => {
    let topCompanies = customers.getTopComopanies();
    it('should return an array', () => {
      return assert(topCompanies instanceof Array);
    });
    it('should order the companies by sales amount', () => {
      return assert(topCompanies[0].sales > topCompanies[1].sales && topCompanies[1].sales > topCompanies[2].sales);
    });
  });
});
