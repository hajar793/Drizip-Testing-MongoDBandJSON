import * as data from "../../support/drizip-faker-data"; 
describe('drizip testing',()=>{
  it('CREATE AN ACCOUNT',()=>{ 
    // ** -- Strart to Create account **-- // 
      cy.visit('https://drizip-tests.herokuapp.com/us')
      cy.get('.toggle-login').click()
      cy.get('#swap-login').click()
      cy.get('#input-nombres').type(data.FName,{ delay: data.typingDelay })
      cy.get('#input-apellidos').type(data.LName,{ delay: data.typingDelay })
      cy.get('#stepper-step-1 > .flex-end > li > .btn').click()
     // cy.get('#input-rut').type(data.IdNumber,{ delay: data.typingDelay })//  license number
      cy.get('#input-direccion').type(data.TheAddress,{ delay: data.typingDelay })
      cy.get('[value="0"] > .medium-13').click()
      cy.get('.iti > #phone').type(data.phone_Number,{ delay: data.typingDelay })
      cy.contains('Send code').click()
      cy.get('#verificationcode').type( data.OPT,{ delay: data.typingDelay })
      cy.get('#btn-paso2').click()
      cy.get('#input-contactoemail').type(data.registerEmail)
       cy.get('#input-repetircontactoemail').type(data.registerEmail)
     cy.contains('Next').click({force: true})
     cy.get('#input-password').type('1234567')
     cy.get('#input-repassword').type('1234567')
  cy.contains('Next').click({force: true})
  cy.get('#checkbox-condiciones').click()// Approval Terms
   cy.get('#btn-registrame').click()
  
  })

})