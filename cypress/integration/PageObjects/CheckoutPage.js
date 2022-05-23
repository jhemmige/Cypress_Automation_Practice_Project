class checkoutPage{



    getqtyinputfield1(){

    return cy.get(":nth-child(1) >[style='text-align: center']")

    }

    getqtyinputfield2(){

        return cy.get(":nth-child(2) >[style='text-align: center']")
    
        }

        getqtyinputfield3(){

            return cy.get(":nth-child(3) >[style='text-align: center']")
        
            }


        getremoveBtn(){



    return cy.get("glyphicon glyphicon-remove")

            }


getheaderTxt(){

    return cy.get("h4[class='media-heading']")


}


getbtnContshopping(){

return cy.contains("Continue Shopping")

}

getbtnCheckout(){

//cy.get("div.container div.row div.col-sm-12.col-md-10.col-md-offset-1 table.table.table-hover tbody:nth-child(2) tr:nth-child(2) td:nth-child(5) > button.btn.btn-success")
return cy.contains("Checkout")
}


}
export default checkoutPage