/// <reference types="cypress" />
describe("end_to_end_TestSuite", function(){


 before(function(){

cy.fixture("example1").then(function(data){

this.data=data



})




    })

it("LoginFeature_testcase1", function(){

cy.visit("https://admin-demo.nopcommerce.com/login")
cy.get("#Email").clear().type(this.data.email)
cy.get("#Password").clear().type(this.data.password)

cy.contains("Log in").click()
cy.waitFor(1000)
cy.get(".navbar-nav > :nth-child(3) > .nav-link").click()



})









})