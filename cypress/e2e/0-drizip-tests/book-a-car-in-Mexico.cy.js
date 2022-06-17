/// <reference types="cypress" />
import * as data from "../../support/drizip-faker-data";
const faker = require("faker");

describe('Drizip Website', () => {

    it('LogIn', () => { 

     cy.LoginOnce(data.E_mail ,{ delay: data.typingDelay })
       
    
        })
    it('Book car in mexico', () => {

      cy.get('#input-direccion').type(faker.address.city('Mexico'))
      cy.get('[value="0"] > .medium-13').click() 
 
      //calendar
      cy.get('#input-fechadesde').click()
      
      
      const D= faker.random.number({min:10,max:31})
      const M= ['06','07','08','09','10','11','12']
      const MM= faker.random.arrayElement(M)

      cy.get('['+'fecha='+'"'+D+'/'+MM+'/'+'2022'+'"'+']').click()

      cy.get('#input-fechahasta').click()

      const MM2= faker.random.arrayElement(M)

      cy.get('['+'fecha='+'"'+D+'/'+MM2+'/'+'2022'+'"'+']').click()

      cy.wait(6000)

      //Time
      const hour=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"]
      const min=["00","30"]

      cy.get('#horas-desde').select(faker.random.arrayElement(hour))
      cy.get('#min-desde').select(faker.random.arrayElement(min))

      cy.get('#horas-hasta').select(faker.random.arrayElement(hour))
      cy.get('#min-hasta').select(faker.random.arrayElement(min))

      cy.get('.btn-buscar').click()

      cy.wait(1000)
      
      cy.clickRandomId('div.autos-busqueda-grid>div.busqueda-autos>div.auto-detalle-busqueda',('div'))
  
      cy.wait(6000)
      cy.get('#input-fechadesde > .bold-14').click()
      const MM3= faker.random.arrayElement(M)
      cy.get('['+'fecha='+'"'+D+'/'+MM3+'/'+'2022'+'"'+']').click()

      cy.get('#input-fechahasta > .bold-14')
      const MM4= faker.random.arrayElement(M)
      cy.get('['+'fecha='+'"'+D+'/'+MM4+'/'+'2022'+'"'+']').click()

      cy.get('#horas-desde').select(faker.random.arrayElement(hour))
      cy.get('#min-desde').select(faker.random.arrayElement(min))

      cy.get('#horas-hasta').select(faker.random.arrayElement(hour))
      cy.get('#min-hasta').select(faker.random.arrayElement(min))

      cy.get('.btn-continuar').click()
      cy.get('.busqueda-cobrar-solicitud__layout > :nth-child(2) > .btn').click()

      cy.get('#input-titular').type('juan perez')
      cy.get('#input-numeroTarjeta').type('4111111111111111')
      cy.get('#input-fechaExp').type('12/24')
      cy.contains('CVC').type('123')
      cy.contains('Add card').click()

      cy.get('#btn-reserva-continuar').click()

  
  
      })
    })

