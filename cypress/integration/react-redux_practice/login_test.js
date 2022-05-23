
import React_Redux_Login_Page_Object  from "../PageObjects/react_redux_loginpg"
import ConduitPage from "../PageObjects/conduitPage.js"


const rpo= new React_Redux_Login_Page_Object()
const cp  = new ConduitPage()
describe("LoginPage_test_suite", function(){

it.only("login_method",function(){

cy.visit("https://react-redux.realworld.io/#/login?_k=z5yunn")

rpo.getemailInput().type("jhemmige@gmail.com")
rpo.getpasswordInput().type("jhemmige123")
rpo.getsignInTnClick().click()
Cypress.config("defaultCommandTimeout", 15000)


//cy.log(cy.get("title"))


//cy.contains("No articles are here... yet.").should("be.visible")
cp.getyoufeedText().should("include.text","No articles are here... yet.")

cp.getyoufeedText().then(function(element){

const txtprev= element.text()

cy.log(txtprev)
})
cy.url().should("include", "https://react-redux.realworld.io/#")

//cy.hash().should("eq", "#/?_k=s2f0dx")

//This is how you get the URL 
cy.url().then(function(url){
    cy.log('Current URL is: ' + url)

    const URL = url
    const newURL = URL.split("o/")[1]
    cy.log('Current URL is: ' + newURL)

    cy.hash().then(function(hash){

        cy.log("this is the hash: " + hash)

    })
    cy.hash().should("eq", newURL)


    cy.url().should("eq",URL)
  })

  
  
/*cy.hash().then(function(el){

cy.log("this would be the text"+ el.prop("href"))
})*/

cy.location("protocol").should("eq", "https:")
cy.location("host").should("eq", "react-redux.realworld.io")
cy.title().then(function(title){

const tiTle= title

cy.log(tiTle)
expect(tiTle).to.eql("Conduit");

})

//to view commandsand logs right click > inspect > console.
//type document.cookie

//cy.viewport("samsung-note9","portrait")
cy.setCookie("channelName","Jayashree") //sets cookie 

cy.clearCookie("channelName","Jayashree") //clears cookie

cy.getCookie("channelName")

})



})






