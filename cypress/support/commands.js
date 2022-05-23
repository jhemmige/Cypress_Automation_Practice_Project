// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// 

//Cypress.Commands.add("SelectProduct", (ProductName) => { 

  

Cypress.Commands.add("SelectProduct", (ProductName) => { 

    cy.get(".card-title").each((el,index, list)=>{

        const devicetxt= el.text()
        
        cy.log(devicetxt)
        
        if (devicetxt.includes (ProductName)){
        
            cy.get("button[class='btn btn-info']").eq(index).click()
        
        }
        
        
        })

    })

    Cypress.Commands.add("Login", (emailID, password) => { 

        cy.visit("https://admin-demo.nopcommerce.com/login")
        cy.get("#Email").clear().type(emailID)
        cy.get("#Password").clear().type(password) 
        cy.contains("Log in").click()
        cy.waitFor(1000)
        
            
         })
            
            
            
    
        




 


 







 









 /*Cypress.Commands.add("CountryName", (countryName) => { 

    cy.get("#country").type(data1).find(".suggestions>ul>li").each((el,index, list)=>{

        const countryTxt= el.text()
        
        cy.log(countryTxt)
        
        if (devicetxt.includes (countryName)){
        
            cy.get(".suggestions>ul>li").eq(index).click()
        
        }
        
        
        })



 })*/





//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
