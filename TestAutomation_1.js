/// <reference types="cypress" />




import HomePage from "../PageObjects/HomePage.js"
describe("first_automation_suite", function(){

    before(function(){

    cy.fixture("example").then(function(data){

    this.data= data

    })

    })


it ("first_method",function(){

    const hp= new HomePage()

    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    hp.getNameInputField.type(this.data.name)
    hp.getEmailInputField.clear().type(this.data.email)
    hp.getGender.select(this.data.gender)
  

    //TC 1:In this testcase we are comparing to check the names in the input box
    //Method 1
    hp.get2wayBinding.should("have.value",this.data.name)

    //Method 2


   /*cy.get("input[name='name']:nth-child(1)").each(($el,index,$list)=>{
 
    const inputtxt= $el.text()
    
    cy.log("this is the " + $el.text())

    if(inputtxt.includes(this.data.name)){

    cy.log("this is the right name")

    }

    })*/

    // TC 2:Here were are checking if the minimum length of the field is 2. there are 2 ways to do this. 1. Is a straightforward shortcut way using Jquery.
// the other one is the long way which is commented out.
    cy.get(":nth-child(1) > .form-control").should("have.attr","minlength","2")

  /*  cy.get(":nth-child(1) > .form-control").then(function(e1){

   const len=   e1.prop("minlength")

        console.log(len)


    })*/


// TC 3: in this testcase we are trying to find in Enterpreuneuship is disabled

    hp.getEntrepreneurradioBtn.should("be.disabled")


    //TC 4:clicking on SHOP link to go a different page.
//cy.pause()
    
hp.getShopBtn.click()

//cy.SelectProduct("Samsung Note 8")
//cy.SelectProduct("Blackberry")
//cy.SelectProduct("Nokia Edge")


this.data.productName.forEach(element => 
    
    
    cy.SelectProduct(element));
    

    cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()

})


})



