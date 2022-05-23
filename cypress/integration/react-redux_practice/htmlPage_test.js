describe("html_first_suite", function(){


    it("having_multiple_buttons_for_click", function(){


cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/cygetcontains.html")
//in here we are clicking the 5 buttons in the first block
//cy.get("fieldset#GETCOMMAND").find("button").click({ multiple: true } )


//cy.get("button").click({ multiple: true })

cy.get("fieldset#GETCOMMAND").within((fieldset)=>{

    cy.get("button").click({ multiple: true })



})
    

    })


    it.only("hidden_shadow_dom_elements", ()=>{


        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/shadowdom")
        cy.get("button[onclick='attachShadowDom()']").click()
        //cy.get("button").click()

    
        //cy.get("div#shadowHost").shadow().find("input[id='name']").type("abc")
        //OR
        cy.get("div#shadowHost").find("input[id='name']", {includeShadowDom: true }).type("abc")
    



    })

   //this test somehow not running 
    it("hidden_shadow_dom_elements_anotherwebsite", ()=>{


        cy.visit('https://books-pwakit.appspot.com/')
        cy.get('book-app')
            .find('app-toolbar input#input')
            .type('Software Testing')
       

    })
 

})