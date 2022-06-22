import * as data from "../../support/drizip-faker-data";

describe('Drizip Testing list a data',()=>{

  it('list a data',()=>{
      //login
      cy.login(data.E_mail)
      //list a car page
      cy.get('.active-hide').contains('List your car').click()
      cy.wait(2000)
      cy.get('#select-marca').should('have.value', 'Select make')
      cy.get('#select-modelo').should('have.value', 'Select model')
      cy.get('#select-anho').should('have.value', 'Select Year')
      cy.get('#select-kilometraje').should('have.value', 'Select Mileage')
      cy.selectRandomItem1('#select-marca>option','#select-marca',1)
      cy.selectRandomItem1('#select-modelo>option','#select-modelo',1)
      cy.selectRandomItem2('#select-anho>option','#select-anho',1,9)
      cy.selectRandomItem2('#select-kilometraje>option','#select-kilometraje',1,5)
      cy.get('#btn-anuncio-enabled').should('be.visible').click()
      //1features page
      cy.get('#vehiculo-patente').type(data.randomLicencePlate ,{ delay: data.typingDelay })
      cy.get('#vehiculo-numerochasis').type(data.randomVin ,{ delay: data.typingDelay })
      cy.selectRandomItem1('#vehiculo-numeroplazas>option','#vehiculo-numeroplazas',1)
      cy.selectRandomItem1('#vehiculo-numeropuertas>option','#vehiculo-numeropuertas',1)
      cy.selectRandomItem1('#vehiculo-combustible>option','#vehiculo-combustible',1)
      cy.selectRandomItem1('#vehiculo-cajacambios>option','#vehiculo-cajacambios',1)
      cy.checkRandomFeatures('.opcion-checkbox [type="checkbox"]')
      cy.get('#vehiculo-descripcion').type(data.randomDescription,{ delay: data.typingDelay })
      cy.get('#vehiculo-certifico').not('[disabled]').check().should('be.checked')
      cy.get('#btn-guardar-datos').click()
      //2 contact and price
      cy.get('#input-direccionestacionamiento').type(data.InChile,{ delay: data.typingDelay })
      cy.get('.buscador-direccion > .flex-start').click({multiple:true , force:true})
      cy.wait(1000)
      cy.get('#input-preciodiario').clear().type(data.randomRatePerDay,{ delay: data.typingDelay })
      cy.get('#input-precioestimado').clear().type(data.randomEstimatedValue,{ delay: data.typingDelay })
      cy.get('[style="margin-top: 1em; display: block"] > .fila > .right-100 > #btn-guardar-datos').click({multiple:true  , force:true})
      //3 photos
      cy.get(':nth-child(6) > :nth-child(1) > .vehiculo-fotografia > img').click();
      cy.get(':nth-child(11) > .right-100 > .btn').click({force:true});
      //4 calendar
      cy.get('#D-5 > .resumen > .flex-end > #btn-editar').click({force:true});
      cy.get('#select-dia-5').select('ND',{force:true});
      cy.get('#btn-guardar').click({force:true});
      cy.get(':nth-child(4) > .fila > .right-100 > .btn').click({force:true});
      cy.get('#btn-automovilinscrito-ok').click();
      // manage car list
      cy.get('[href="/us/mis-autos"]').click();
      // pindding cars page
      cy.get('#\\32 ').click();
  })
})