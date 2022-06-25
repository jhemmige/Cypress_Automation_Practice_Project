/// <reference types="cypress" />

import HomePage from "../PageObjects/HomePage"
import ProductPage from "../PageObjects/ProductPage"
import checkoutPage from "../PageObjects/CheckoutPage"
import PurchasePage from "../PageObjects/purchasePage"

describe("calculation_suite", function(){

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

   // cy.visit("https://rahulshettyacademy.com/angularpractice/") check TestAutomation_1.js
   cy.visit(Cypress.env("url") + "/angularpractice/")
   
   
    hp.getNameInputField().type(this.data.name)
    hp.getEmailInputField().clear().type(this.data.email)
    hp.getGender().select(this.data.gender)
    hp.getBday().type(this.data.dob)
    hp.getShopBtn().click()


    //this is how you iterate through array

    this.data.prodName.forEach(element=>
        
        cy.SelectProduct(element))
   
        prodp.getcheckout().click()


        /*cy.get("tr td:nth-child(4) >strong").then(function(element){

          const pricetxt=  element.text()
          cy.log(pricetxt)


        })*/
//this testcase we are calculating the the sum of the amt ( programmatically) in the cart page 
//which is equal to the actual sum

        var sum=0 // we are using variable here since it needs to be reassigned
        cy.get("tr td:nth-child(4) >strong").each((el, index,list)=>{

          
            const pricetxt= el.text()
           

            const pricetxt1= pricetxt.split(".") // splits the data using a regex
            //pricetxt.trim
           
            const pricetxt2= pricetxt1[1].trim() // trims any leading/trailing spaces
            cy.log(pricetxt2)
           
            sum= Number(sum)+ Number(pricetxt2) // by default any data in js is a string. Hence to make it a number, we use number method and pass the string into it
//this is resolving the promise since cypress doesnot have knowledge of adding sequentially.
        }).then(function(){

            cy.log(Number(sum))

        })

    cy.get("h3 strong").then(function(element)
    {

        var Total= element.text().split(".")
        
        Total =Total[1].trim()
        const newTotal = Number(Total)
          cy.log(newTotal)

//chai assertion
          expect(Number(sum)).to.equal(newTotal)
    })


       
e
       
})


})