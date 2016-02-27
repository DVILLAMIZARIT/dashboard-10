import {customers  as mock} from './mock-customers';

class Customers {

  constructor() {
    this.customerList = [];
  }

  loadCustomers() {
    for (let customer of mock) {
      this.customerList.push(customer);
    }
  }

  load() {
    this.loadCustomers();
    return this.list;
  }

  get list() {
    return this.customerList;
  }

}

export default Customers;