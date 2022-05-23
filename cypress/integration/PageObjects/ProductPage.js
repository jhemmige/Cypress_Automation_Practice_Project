class ProductPage{



     getcheckout(){

      return  cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')

    }


    getlistGroupitems(){

    return cy.get(".list-group-item").each((el,index,list)=>{

    const listtxt= el.text()
    cy.log(listtxt) // returns Category 1 Category 2 Category 3
    cy.log(index) // returns the indices
    //cy.log(list) //returns  cy.get(".list-group-item")
    

    })


    


    }



    
}

export default ProductPage