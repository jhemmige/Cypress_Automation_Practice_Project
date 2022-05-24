describe("html_first_suite", function(){
    
    it.only("handlin_iframes_another way ", function (){

        cy.visit("https://the-internet.herokuapp.com/frames")
        //cy.get("div.example>ul>li:nth-child(1)").click()
        cy.get(":nth-child(1) > a").click()
        
        cy.frameLoaded('frame[src="/frame_top"]')
        cy.iframe('frame[src="/frame_top"]').find("frame[src='/frame_middle']").should("include.text", "MIDDLE")
        
    
    
    
        })
    

})