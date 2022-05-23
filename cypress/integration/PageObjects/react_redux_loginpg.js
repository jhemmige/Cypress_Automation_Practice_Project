/// <reference types="cypress" />

class React_Redux_Login_Page_Object{

getemailInput(){

return cy.get("input[type='email']")

}


getpasswordInput(){

return cy.get("input[type='password']")


}


getsignInTnClick(){

return cy.get("button[type='submit']")

}


}

export default React_Redux_Login_Page_Object