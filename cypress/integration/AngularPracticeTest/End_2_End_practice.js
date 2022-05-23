/// <reference types="cypress" />

//import { isEqual } from "cypress/types/lodash"
import ProductPage from "../PageObjects/ProductPage.js"
describe("end_2_e_practice_suite", function(){

    before(function(){

        cy.fixture("example").then(function(data){
    
        this.data= data
    
        })
    
        })
    




it("first_function_for_e2e", function(){
const prodp= new ProductPage()

cy.visit(Cypress.env("url")+"/angularpractice/shop")

this.data.prodName.forEach(element => 

    cy.SelectProduct(element))
    prodp.getcheckout().click()  
    
    cy.get("h4[class='media-heading']").each((el,index, list)=>{

    const listtext= el.text()
    cy.log(listtext)

    
    cy.get("h4[class='media-heading']").should("have.length",3)
    cy.get("h4[class='media-heading']").should("include.text",listtext)

    
    
    

    })
          
    
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
    })

    
            })

        


        })

   



