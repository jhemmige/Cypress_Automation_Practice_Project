import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ProductPage from "../../../PageObjects/ProductPage"
import PurchasePage from "../../../PageObjects/purchasePage"
import CheckoutPage from "../../../PageObjects/CheckoutPage"
import HomePage from "../../../PageObjects/HomePage"
const purchPg = new PurchasePage()
const prodp= new ProductPage()
const chkpg=new CheckoutPage()
const homepg= new HomePage()
let name //both var or let works here
let name1
Given("I open the Ecommerce Page", function(){

    
    cy.visit(Cypress.env("url")+"/angularpractice")


})

//function can be written like this also, its called as anonymous function
When("I add the items to cart", function(){

    cy.visit(Cypress.env("url")+"/angularpractice/shop")

    this.data.prodName.forEach(element => 

    cy.SelectProduct(element))

    prodp.getcheckout().click()   

})

And("validate the total price displayed", ()=>{
    var sum=0
    cy.get("td[class='col-sm-1 col-md-1 text-center']:nth-child(4)").each((el,index,list)=>{

    const prodprice= el.text()
    const newPrddprice= prodprice.split(" ")[1].trim()
    //cy.log(Number(newPrddprice))

    sum = Number(sum)+ Number(newPrddprice) 


    }).then(function(){

        cy.log(sum)


    })

    cy.get("td[class='text-right'] h3 strong").then(function(element)
    {
        const total= element.text()
        const total1= total.split(".")
        const total2= total1[1].trim()
        const NewTotal=  Number(total2)

        cy.log(NewTotal)

        expect(Number(sum)).to.equal(NewTotal)

        chkpg.getbtnCheckout().click()    

})

})

Then("select the country submit and Verify Thankyou message", function(){
    
    purchPg.getCountryInput(this.data.country1)
    purchPg.getCountrylist()
    purchPg.getCheckBox()
    purchPg.getSubmitBtn()

    cy.get("div[class='alert alert-success alert-dismissible']").should("contain.text", " Thank you! Your order will be delivered in next few weeks :-).")
 

})


//Given I open EcommercePage containing the form

Given("I open EcommercePage containing the form", function(){

cy.visit(Cypress.env("url") + "/angularpractice")


})


//When I fill up all the input fields with valid inputs

When("I fill up all the input fields with valid inputs", function(dataTable){

    name = dataTable.rawTable[1][0]
    name1= dataTable.rawTable[2][0]
    homepg.getNameInputField().type(name)
    homepg.getEmailInputField().clear().type(dataTable.rawTable[1][1])
    homepg.getGender().select(dataTable.rawTable[1][2])
    homepg.getBday().type(dataTable.rawTable[1][3])
    
    homepg.get2wayBinding().should("have.value",name)

    homepg.getNameInputField().clear().type(name1)
    homepg.getEmailInputField().clear().type(dataTable.rawTable[2][1])
    homepg.getGender().select(dataTable.rawTable[2][2])
    homepg.getBday().type(dataTable.rawTable[2][3])

    homepg.get2wayBinding().should("have.value",name1)


})
//Then I want to ensure form is validated

Then("I want to ensure form is validated", function(){

    //homepg.get2wayBinding().should("have.value",name) // this name is added here cos vaidation is happening for jazzy ( from mocha) and not Jaaz from Cucumber
    //homepg.get2wayBinding().should("have.value",name1)
    cy.get(":nth-child(1) > .form-control").should("have.attr","minlength","2")
    homepg.getEntrepreneurradioBtn().should("be.disabled")


})
//And user clicks on shop link successfully*/

And("user clicks on shop link successfully", function(){

    homepg.getShopBtn().click()

})