describe("handling_alert", function(){

it("handling_alert_method", function(){

cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes.html")


//cy.on accepts windows event -alert, confirm, cancel.
cy.on("window:alert",blob =>{
    expect(blob).to.eql("I'm an Alert Box");
  

})

cy.get("button[id='alert']").click()

})

it ("next_method_to_handle_pop_ups", function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("#name").clear().type("Jayashree")
    cy.get("#alertbtn").click()
    cy.on( 'window:alert', (str) =>{
    //Mocha Assertion
    expect(str).to.equal("Hello Jayashree, share this practice page and share your knowledge")

    })





})
it("handle_multi_popups", function(){

    cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes.html")
    const fn = cy.stub()
        cy.on('window:alert', fn)
        cy.get('button#miltiplealert').click().then(() => {
            expect(fn.getCall(0)).to.be.calledWithExactly('First Alert Box')
            expect(fn.getCall(1)).to.be.calledWithExactly('Second Alert Box')
            expect(fn.getCall(2)).to.be.calledWithExactly('Third Alert Box')

    })
    
        
    
    })

    it("handle_confirm_popups", function(){

        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes.html")
        cy.get('button#confirm').click()

        cy.on("window:confirm", confirmtxt=>{


        expect(confirmtxt).to.be.eq("I'm a Confirm Box")

        })
            
        })

        it("Secondway_handle_confirm_popups", function(){

        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes.html")
        const stub = cy.stub()
        stub.onFirstCall().returns(true)//this is boolean . True clicks on OK, false clicks cancel.Check the outcome block of the site
        cy.on('window:confirm', stub)
        cy.get('button#confirm').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWithExactly('I\'m a Confirm Box')

  
    })

        })

        it("prompt_popup", function(){

            cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes.html")
            
            //cy.get("button#prompt").click()
            //cy.on("window:alert", )

            cy.window().then(win => {
                const stub = cy.stub(win, 'prompt')
                stub.returns('Avi')
                cy.get('button#prompt').click()
            }) 


    })

    it.only( "using_xpath", function(){

cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/cyxpath.html")
cy.xpath("//*[@id='groupone']/table/tbody/tr/td[2]").type("ABD")

    })

        })
    
