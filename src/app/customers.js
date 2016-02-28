import {customers  as mock} from './mock-customers';

class Customers {

  constructor(url) {
    this.customerObjectList = [];
    this.companyList = [];
    this.load(url);
  }

  getCustomerObjectList() {
    return this.customerObjectList;
  }

  getCompanyList() {
    return this.companyList;
  }

  getSalesByCompany(company) {
    let sales = 0.00;
    this.customerObjectList.forEach(function(item){
      if(company === undefined || item.company === company) {
        sales += parseFloat(item.sum);
      }
    });
    return sales;
  }

  getTopComopanies() {
    let topCompanies = [];
    this.companyList.forEach(function(item){
      topCompanies.push({name: item, sales: this.getSalesByCompany(item)});
    }, this);

    return topCompanies.slice(0, 4).sort(function(a, b) {
      return b.sales - a.sales;
    });
  }

  /**
   * load or reload the customer data objects
   * @param url
   * @returns {Array|*}
   */
  load(url) {
    if(url === undefined) throw new Error('Missing parameter in load');
    if(url === 'https://mock') {
      this.customerObjectList = mock;
    } else {
      throw new Error('No fetch from extern is defined');
    }

    this.customerObjectList.forEach(function (item){
      if (this.indexOf(item.company) === -1) {
       this.push(item.company);
      }
    }, this.companyList);

    return this.customerObjectList;
  }

}

export default Customers;