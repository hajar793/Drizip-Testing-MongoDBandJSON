import * as data from "../../support/drizip-faker-data"; 

 describe('drizip testing',()=>{
//-- 03 EDIT PROFILE --//
it('EDIT PROFILE',function()
{
    // -- This function in COMMANDS.js --- //
    cy.LoginOnce(data.E_mail ,{ delay: data.typingDelay }) // call login function 
    cy.forceRunExceptionErr()
              //***-- START TO EDIT PROFILE --***//
cy.get('.item-encabezado >.flex-center').click() // view drop menu
cy.get('#cuenta').click()// Clicking on my account

 cy.get('#micuenta-nombres').clear()
 cy.get('#micuenta-nombres').type(data.FName,{ delay: data.typingDelay })
cy.get('#micuenta-nacimiento').click()
cy.get('#micuenta-apellidos').clear()
cy.get('#micuenta-apellidos').type(data.LName,{ delay: data.typingDelay })
cy.get('#micuenta-rut').clear()
cy.get('#micuenta-rut').type(data.IdNumber,{ delay: data.typingDelay })
//for date
cy.get('#micuenta-nacimiento').clear()
cy.get('#micuenta-nacimiento').type(data.Day,{ delay: data.typingDelay })
cy.get('#micuenta-nacimiento').type('/')
cy.get('#micuenta-nacimiento').type(data.Month,{ delay: data.typingDelay })
cy.get('#micuenta-nacimiento').type('/')
cy.get('#micuenta-nacimiento').type(data.Year,{ delay: data.typingDelay })
//end
cy.get('#micuenta-direccion').type(data.TheAddress,{ delay: data.typingDelay })
cy.get('#micuenta-numeropermiso').clear()///clearing old text "license number"
cy.contains("Driver's license number").type(data.license,{ delay: data.typingDelay })// new license number
cy.get('.marco-perfil > .btn-block').click()

//-- END --//
})


 })