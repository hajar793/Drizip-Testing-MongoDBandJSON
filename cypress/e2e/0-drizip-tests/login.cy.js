import * as data from "../../support/drizip-faker-data"; 
describe('drizip testing',()=>
{
it.only('LOGIN',()=>{
    cy.visit('https://uat.drizip.com/us')
    cy.get('.toggle-login').click() 
        cy.get('#input-email').type(data.E_mail ,{ delay: data.typingDelay })
        cy.get('#input-password').type('123456')
        cy.get('#btn-login').click()
        cy.get('.logo').click()
})
})


