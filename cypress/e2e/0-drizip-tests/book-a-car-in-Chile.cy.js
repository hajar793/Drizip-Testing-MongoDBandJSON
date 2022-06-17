var faker = require("faker");
import * as data from "../../support/drizip-faker-data";

describe('drizip testing',()=>{
    it('Book a car in Chile', function()
  {
         // -- ** strart Book a car in Chile ** --// 
   // -- THIS STEP FROM THE COMMANDS.js --- //call function LOGINONES
    cy.LoginOnce(data.E_mail ,{ delay: data.typingDelay })
    cy.forceRunExceptionErr()
    // -- START Book a car in Chile -- // 
    cy.get('#input-direccion').type(data.InChile,{ delay: data.typingDelay })
    cy.get('[value="0"] > .medium-13').click({force: true})
     //calendar
     cy.get('#input-fechadesde').click()
        const Day=['08','09','10','11','12','13','14','15','16','17','18','19',
        '20','21','22','23','24','25','26','27','28','29','30','31']
        const D= faker.random.arrayElement(Day)
        const M= ['06','07','08','09','10','11','12']
        const MM= faker.random.arrayElement(M)
        cy.get('['+'fecha='+'"'+D+'/'+MM+'/'+'2022'+'"'+']').click()
        cy.get('#input-fechahasta').click()
        const MM2= faker.random.arrayElement(M)
        cy.get('['+'fecha='+'"'+D+'/'+MM2+'/'+'2022'+'"'+']').click()
        //chose the time
       cy.get('#horas-desde').select(faker.datatype.number({min:1,max:23}))
       const min=["00","30"]
       cy.get('#min-desde').select(faker.random.arrayElement(min))
       cy.get('#horas-hasta').select(faker.datatype.number({min:1,max:23}))
       cy.get('#min-hasta').select(faker.random.arrayElement(min))
       cy.get('.btn-buscar').click()

     cy.wait(6000)
     cy.clickRandomId('div.autos-busqueda-grid>div.busqueda-autos>div.auto-detalle-busqueda','div.auto-detalle-busqueda')
 
     cy.wait(6000)
     cy.contains('Request').click()
     cy.get('#btn-agregarTarjeta').click()//Add card
     cy.get('#input-titular').type('juan perez')
     cy.get('#input-numeroTarjeta').type('4111111111111111')
     cy.get('#input-fechaExp').type('12/24')
     cy.contains('CVC').type('123')
     cy.contains('Add card').click()
     cy.get('#btn-reserva-continuar').click()
  })
  
  

  
})
