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

  get list() {
    return this.customerList;
  }

}

export default Customers;