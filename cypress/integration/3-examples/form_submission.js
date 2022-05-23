/// <reference types="cypress" />


import HomePage from "../PageObjects/HomePage"
import ProductPage from "../PageObjects/ProductPage"
import checkoutPage from "../PageObjects/CheckoutPage"
//import PurchasePage from "../PageObjects/purchasePage"
describe("form_submission_suite", function(){

    before(function(){

    cy.fixture("example").then(function(data){

    this.data= data

    })

    })


it ("first_method",function(){

    const hp= new HomePage()
    const prodp= new ProductPage()

    //cy.visit("https://rahulshettyacademy.com/angularpractice/")
    cy.visit(Cypress.env("url")+"/angularpractice")
    hp.getNameInputField().type(this.data.name)
    hp.getEmailInputField().clear().type(this.data.email)
    hp.getGender().select(this.data.gender)
    hp.getBday().type(this.data.dob)
    cy.get("input[type='submit']").click()
   // cy.get("div[class='alert alert-success alert-dismissible']").should("contain.text"," The Form has been submitted successfully!.")
    cy.get("div[class='alert alert-success alert-dismissible']").should("include.text"," The Form has been submitted successfully!.")
    


})

})