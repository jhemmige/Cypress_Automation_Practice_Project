
/// <reference types="Cypress-iframe" />
import "cypress-iframe"


describe("html_first_suite", function(){
    
    it("handlin_iframes_nested_iframe ", function (){

        cy.visit("https://the-internet.herokuapp.com/frames")
        //cy.get("div.example>ul>li:nth-child(1)").click()
        cy.get(":nth-child(1) > a").click()
        
        cy.get("frame[src='/frame_top']").within(function(frame){
        const lefttxt= frame.contents().find("frame[src='/frame_left']").within((fr)=>{


        const lt1= fr.contents().find("body[xpath='1']")

        cywrap(lt1).should("have.text", "LEFT")

        })
        })

   
})
})
    
    
    
    



        it("handlin_iframes_another way ", function (){

            cy.visit("https://the-internet.herokuapp.com/frames")
            //cy.get("div.example>ul>li:nth-child(1)").click()
            cy.get("ul > :nth-child(2) > a").click()
            
            cy.frameLoaded("div[class='tox-edit-area']")
           
            
            cy.iframe().find("iframe[class='tox-edit-area__iframe']").clear().type("this is a test")
            
        
        
        
            })
    
            it('Handling_iframe_method', function (){

                cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
                cy.frameLoaded("#courses-iframe")
                //cy.iframe().find("a[href*='consulting']:visible").click() - this also works
                //cy.iframe().find("a[href*='consulting']").eq(0).click()
                //cy.iframe().find("#requirements").should ("include.text","Please explain")
        
                cy.iframe().find("a[href*='mentorship']").eq(0).click()
        
                //cy.log("this is the URL" + cy.url())
        
                
               //cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2)// somehow this is failing
                //cy.iframe().find("h1[class*='pricing-title']").should("have.text", "BRONZE")
        
               
               })
//this function and the one below do that same thing.
               it('iFrame - Type in the body - jQuery Way', () => {
                cy.visit('https://the-internet.herokuapp.com/iframe')
                cy.get('iframe#mce_0_ifr').within(($frame) => {
                    const body = $frame.contents().find('body#tinymce')
                    cy.wrap(body).clear().type('Test')
                })

})

it('iFrame - Type in the body - JavaScript Way', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe')
    
    cy.get('iframe#mce_0_ifr').within(function(frame){

    const body= frame.contents().find('body#tinymce')
    cy.wrap(body).clear().type("testing 123")
    //cy.wrap(body).clear().type("this is a test")

    })



})

it ("new_function_just_trying",function(){

cy.visit("https://rahulshettyacademy.com/mentorship")
cy.get("button[class='btn btn-lg btn-teal btn-mw-150 border-radius-50 mentorshipJoinBtn']").then((element=>{

const eltxt= element.text()

cy.log(eltxt)

}))





})
it.only('Nested Frames - Fetch the text - jQuery Way', () => {
    // $('frame[src="/frame_top"]').contents().find('frame[src="/frame_middle"]').contents().find('div#content').text()
    cy.visit('https://the-internet.herokuapp.com/nested_frames')
    cy.get('frame[src="/frame_top"]').within($frame => {
        cy.wrap($frame.contents().find('frame[src="/frame_middle"]')).within(fr => {
            cy.wrap(fr.contents().find("div[id='content']")).should('have.text', 'MIDDLE')
            cy.wrap(fr.contents().find("div[id='content']")).then((ele)=>{

            const frametxt= ele.text()
            cy.log(frametxt)


            })
        })

})

})


