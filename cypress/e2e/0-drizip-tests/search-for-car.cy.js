/// <reference types="cypress" />

const faker = require("faker");

describe('Drizip Website', () => {

    it('Search for a Car', () => {

      cy.visit('https://uat.drizip.com/us')

      cy.get('#input-direccion').type(faker.address.zipCode())
      cy.get('[value="0"] > .medium-13').click() 
 
      //calendar
      cy.get('#input-fechadesde').click()
      cy.wait(1000)
      
      const D= faker.random.number({min:1,max:31})
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

      cy.get('.btn-continuar').click()

  
  
      })
    })

