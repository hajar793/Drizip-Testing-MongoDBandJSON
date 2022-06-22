import * as data from "../../support/drizip-faker-data";
describe('Drizip Testing pause a car',()=>{
   
    it('pause a car',()=>{
        //login
        cy.login(data.E_mail)
        cy.forceRunExceptionErr()
        //start pause a car
        cy.get('.item-encabezado > .flex-center').click()
        cy.get('.tool-tip > #mis-autos').click()
        cy.clickRandomId('section.mis-autos>div>article>a','a')
        cy.get('#btn-pausar-vehiculo').click()
        cy.get('#\\33 ').click()
    })
    
})