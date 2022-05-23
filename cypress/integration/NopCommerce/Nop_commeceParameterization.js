/// <reference types="cypress" />
describe("custom_function_suite", function(){
//no before function needed here
   
   it("LoginFeature_testcase1", function(){
   
   cy.Login("admin@yourstore.com","admin")
    //cy.get("title").should("have.text","Dashboard / nopCommerce administration")
   cy.title().should("be.equal","Dashboard / nopCommerce administration" )
    //cy.get(".navbar-nav > :nth-child(3) > .nav-link").click()   

   cy.Login("adn@yourstore.com","admin")
    //cy.get("title").should("not.have.text","Dashboard / nopCommerce administration")
 
    //fetching text from an element
   /*cy.get("div[class='message-error validation-summary-errors']").then(function(element){
    const text= element.text()
    cy.log(text)*/

    cy.get("div[class='message-error validation-summary-errors']").should("contain.text", "Login was unsuccessful.")

   })
   
   
   })
   
   
