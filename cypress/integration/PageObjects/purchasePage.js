
class PurchasePage{


    getCountryInput(data1){

        return cy.get("#country").type(data1)
     
        
   

    }

   getCountrylist(){

        return cy.get(".suggestions>ul>li").each(($el,index,list)=>{

            const countryTxt= $el.text()

            cy.log($el.text())


         
            if(countryTxt.includes("United Arab Emirates")){

              cy.wrap($el).click()


            }
        
        
        
        })
    

    }


    getCheckBox(){

    return cy.get("#checkbox2").click({force: true})


    }


    getSubmitBtn(){

   return  cy.get("input[value='Purchase']").click()

    }

}




export default PurchasePage