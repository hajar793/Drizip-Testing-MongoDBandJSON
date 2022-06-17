describe('Drizip Testing delete a car',()=>{

    it('delete a car',()=>{
        //login
        cy.login('neemsalem07@hotmail.com','HJK$123')
        cy.forceRunExceptionErr()
        //start delete a car
        cy.get('.item-encabezado > .flex-center').click()
        cy.get('.tool-tip > #mis-autos').click()
        cy.get('#\\33 ').click()
        cy.clickRandomId('section.mis-autos>div>article>a.btn-eliminar-anuncio-permanente','a.btn-eliminar-anuncio-permanente')
        cy.get('#btn-eliminar').click()
    })

})