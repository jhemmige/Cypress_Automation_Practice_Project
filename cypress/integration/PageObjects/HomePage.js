class HomePage{


getHomePagelink(){
return cy.get("li[class='nav-item']:nth-child(1)")

}

getJumboTrontxt(){
    return cy.get("div[class='jumbotron'] h1")
}

getNameInputField(){

    return cy.get(":nth-child(1) > .form-control")
}


getEmailInputField(){

    return cy.get(":nth-child(2) > .form-control")
}

getGender(){

  return  cy.get("#exampleFormControlSelect1")

}

getEntrepreneurradioBtn(){

    return cy.get("#inlineRadio3")
}

getBday(){

    return  cy.get("input[name='bday']")
}

get2wayBinding(){

return cy.get("input[name='name']:nth-child(1)")
}


getShopBtn(){

return cy.get(":nth-child(2) > .nav-link")

}

}
export default HomePage