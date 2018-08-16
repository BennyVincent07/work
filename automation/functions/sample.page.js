import Page from './page.js';

class samplePage extends Page {
    get gender() {
      return browser.element('//div[@id="uniform-id_gender1"]');
    }
    get signUp() {
     return browser.element('//a[@class="login"]');
    }
    get email() {
     return browser.element('//input[@id="email_create"]');
    }
    get createAccountButton(){
     return browser.element('//div[@class="submit"]');
    }
    get firstName() {
      return browser.element('//input[@id="customer_firstname"]');
    }
    get lastName() {
      return browser.element('//input[@id="customer_lastname"]');
    }
    get password() {
      return browser.element('//input[@id="passwd"]');
    }
    get daysDropDown(){
    return browser.element('//select[@id="days"]');
    }
    get monthDropDown(){
      return browser.element('//select[@id="months"]');
    }
    get yearDropDown(){
      return browser.element('//select[@id="years"]');
    }
    get company() {
      return browser.element('//input[@id="company"]');
    }
    get address1() {
      return browser.element('//input[@id="address1"]');
    }
    get address2() {
      return browser.element('//input[@id="address2"]');
    }
    get city() {
      return browser.element('//input[@id="city"]');
    }
    get stateDropDown(){
      return browser.element('//select[@id="id_state"]');
    }
    get zipCode() {
      return browser.element('//input[@id="postcode"]');
    }
    get countryDropDown(){
      return browser.element('//select[@id="id_country"]');
    }
    get mobileNumber() {
      return browser.element('//input[@id="phone_mobile"]');
    }
    get addressAlias() {
      return browser.element('//input[@id="alias"]');
    }
    get registerButton() {
      return browser.element('//button[@id="submitAccount"]');
    }
    get search() {
      return browser.element('//input[@id="search_query_top"]');
    }
    get searchButton() {
      return browser.element('//button[contains(@class,"button-search")]')
    }
    get product()
    {
      return browser.element('//img[contains(@src,"home_default")]');
    }
    get cart(){
      return browser.element('//*[@id="add_to_cart"]/button')
    }
    get buy(){
      return browser.element('//p//span//i[@class="icon-chevron-right right"]')
    }
  goToHome () {
    browser.url('http://automationpractice.com');
    browser.pause(500);
  }

  goToSignUp () {
    this.signUp.click();
    browser.pause(500);
  }
  emailId (emailid)
  { browser.pause(2000);
    this.email.click();
    this.email.setValue(emailid);
    this.createAccountButton.click();
    }
  fillRegistrationForm (data){
    browser.pause(6000);
    this.gender.click();
    this.firstName.setValue(data.firstName);
    this.lastName.setValue(data.lastName);
    this.password.setValue(data.password);
    this.company.setValue(data.company);
    this.address1.setValue(data.address1);
    
    this.address2.setValue(data.address2);
    this.city.setValue(data.city);
    const date = data.dob.split("-");
    this.daysDropDown.selectByValue(date[0]);
    this.monthDropDown.selectByValue(date[1]);
    this.yearDropDown.selectByValue(date[2]);
    this.stateDropDown.selectByVisibleText(data.state);
    this.countryDropDown.selectByVisibleText(data.country);
    this.zipCode.setValue(data.zipCode);
    this.mobileNumber.setValue(data.mobileNumber);
    this.addressAlias.setValue(data.alias);
    this.registerButton.click();
  }  
  goToSearch()
  {
    this.search.setValue("shirt");
    this.searchButton.click();
    browser.pause(2000);
  }
  goToChoose()
  {
   
   this.product.click();
   browser.pause(2000);
  }
  addToCart()
  {
   this.cart.click();
   browser.pause(3000);
  }
  checkout ()
 {
   this.buy.click();
   browser.pause(3000);
 }

};
export default new samplePage();
