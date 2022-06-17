import * as data from "../../support/drizip-faker-data";

describe('Drizip Testing edit a car address, price and discounts',()=>{
    it('edit a car',()=>{
        //login
        cy.login('neemsalem07@hotmail.com','HJK$123')
        cy.forceRunExceptionErr()
        //start edit car
        cy.wait(2000)
        cy.get('.item-encabezado > .flex-center').click()
        cy.get('.tool-tip > #mis-autos').click()
        cy.wait(2000)
        cy.clickRandomId('section.mis-autos>div>article>button','button')
        cy.wait(2000)
        cy.get('#enUbicacionVehiculo').click()
        cy.get('.margin-bottom-1 > div > .medium-12').click()
        cy.get('#input-direccionestacionamiento')
            .clear()
            .type(data.InChile, {delay :data.typingDelay ,force:true})
        cy.wait(2000)
        cy.get('#prediccion-item').click()
        cy.wait(1000)
        //edit the price and discounts
        cy.get('#enPrecio').click()
        cy.get('#input-preciodiario').clear().type(data.randomRatePerDay, {delay :data.typingDelay})
        cy.get('#input-precioestimado').clear().type(data.randomEstimatedValue, {delay :data.typingDelay})
        cy.get('#input-discount1').clear().type(data.randomDiscountWeek, {delay :data.typingDelay})
        cy.get('#input-discount2').clear().type(data.randomDiscountTwoWeeks, {delay :data.typingDelay})
        cy.get('#input-discount3').clear().type(data.randomDiscountMonth, {delay :data.typingDelay})
        cy.get('#btn-save-discounts').click()
        cy.get('#enGeneral').click()
    })

})