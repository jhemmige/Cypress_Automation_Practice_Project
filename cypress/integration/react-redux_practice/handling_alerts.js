describe("handling_alert", function(){

it ("handling_alert_method", function(){

cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes.html")
cy.get("button[id='alert']").click()
cy.on("window:confirm",function(str){

expect(str).to.eql("I'm an Alert Box");



})

})


})





