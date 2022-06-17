describe('Drizip Testing pause a car',()=>{
   
    it('pause a car',()=>{
        //login
        cy.login('neemsalem07@hotmail.com','HJK$123')
        cy.forceRunExceptionErr()
        //start pause a car
        cy.get('.item-encabezado > .flex-center').click()
        cy.get('.tool-tip > #mis-autos').click()
        cy.clickRandomId('section.mis-autos>div>article>a','a')
        cy.get('#btn-pausar-vehiculo').click()
        cy.get('#\\33 ').click()
    })
    
})