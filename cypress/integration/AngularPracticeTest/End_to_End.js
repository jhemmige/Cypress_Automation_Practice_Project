/// <reference types="cypress" />


import HomePage from "../PageObjects/HomePage"
import ProductPage from "../PageObjects/ProductPage"
import checkoutPage from "../PageObjects/CheckoutPage"
import PurchasePage from "../PageObjects/purchasePage"
describe("End_to_End_Suite", function(){

    before(function(){

    cy.fixture("example").then(function(data){

    this.data= data

    })

    })


it ("first_method",function(){

    const hp= new HomePage()
    const prodp= new ProductPage()
    const checkoutPg= new checkoutPage()
    const purchPg= new PurchasePage()
///angularpractice/
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    hp.getNameInputField().type(this.data.name)
    hp.getEmailInputField().clear().type(this.data.email)
    hp.getGender().select(this.data.gender)
    hp.getBday().type(this.data.dob)
    hp.getShopBtn().click()

   
   
    cy.get(":nth-child(1) > .card > .card-footer > .btn > .zmdi").click()
   cy.get(':nth-child(2) > .card > .card-footer > .btn').click()

  

    prodp.getcheckout().click()
   

   cy.contains("Checkout").click()

    checkoutPg.getbtnCheckout().click()

   purchPg.getCountryInput(this.data.country1)
  

    //cy.waitFor(8000)

    //Cypress.config("defaultCommandTimeout",8000)

    purchPg.getCountrylist()
    purchPg.getCheckBox()
    purchPg.getSubmitBtn()

    //this script is written to get the text. Since text is not a native cypress command, we have to resolve the promise and get the text of the element
    cy.get("div[class='alert alert-success alert-dismissible']").then(function(element){

        const eltxt= element.text()

      cy.log( eltxt)

      //chai assertion
      expect(eltxt.includes("Thank you!")).to.be.true


    })
    cy.get("div[class='alert alert-success alert-dismissible']").should("contain.text", " Thank you! Your order will be delivered in next few weeks :-).")
    



       
       })
      
    })

