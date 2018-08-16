import { Given , When , Then } from 'cucumber';
import samplePage from '../functions/sample.page.js';
import regdata from '../features/data/regdata.js';



  Given(/^User goes to Home page$/, () => {
    samplePage.goToHome();
  });

  When(/^User decides to sign up$/, () => {
    samplePage.goToSignUp();
  });
  Then(/^User enter email address$/, () =>{
    const id=regdata.data[0].email
   samplePage.emailId(id);
   
  });
  When(/^User enter all details$/, () => {
    const data = regdata.data[0];
    samplePage.fillRegistrationForm(data);
  });
  When(/^User search A product$/, () => {
    samplePage.goToSearch();
  });
  When(/^User choose A product$/, () => {
    samplePage.goToChoose();
  });
  When(/^User add product to the cart$/, () => {
    samplePage.addToCart();
  });
  When(/^User proceed To Checkout$/, () => {
    samplePage.checkout();
  });


