const listCarPage= require('./../../pages/listCarPage');
const vehiculo= require('../../fixtures/vehiculos');

describe('Drizip Testing list cars',()=>{
    beforeEach(()=>{
      //login
      cy.login('neemsalem07@hotmail.com','HJK$123')
    })

    vehiculo.forEach(car => {

        it('list a car '+car.marca,()=>{
          listCarPage.setCarPage(car.marca,car.modelo,car.ano,car.kilometraje);
          listCarPage.setFeaturesPage(car.patente,car.numerochasis,car.numeroplazas,car.numeropuertas,
                                      car.combustible,car.cajacambios);
          listCarPage.setFeatures();
          listCarPage.setDescription(car.descripcion);
          listCarPage.setContactAndPricePage(car.direccion,car.preciodiario,car.precioestimado);
          listCarPage.last();
        })
    })

})