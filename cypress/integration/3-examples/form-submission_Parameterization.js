/// <reference types="cypress" />


import HomePage from "../PageObjects/HomePage"
import ProductPage from "../PageObjects/ProductPage"
import checkoutPage from "../PageObjects/CheckoutPage"
//import PurchasePage from "../PageObjects/purchasePage"

const tests = require('../../fixtures/example2.json')
describe("form_submission_suite", function(){

    beforeEach(function(){

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

    })

    tests.forEach(credens=>{

        it("first_method",()=>{
        
            
            
        
            cy.get(":nth-child(1) > .form-control").type(credens.name)
            cy.get(":nth-child(2) > .form-control").type(credens.email)
            cy.get("input[type='submit']").click()
            //cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        
        })
        
            })



    })








    

  
    
        
    




