class listCarPage{
    element = {
        listCarBtn: ()=>cy.get('.active-hide').click(),
        selectMarca: ()=>cy.get('#select-marca'),
        selectModel: ()=>cy.get('#select-modelo'),
        selectYear: ()=>cy.get('#select-anho'),
        selectMileage: ()=>cy.get('#select-kilometraje'),
        startListingBtn: ()=>cy.get('#btn-anuncio-enabled').click(),
        vehiclePlate: ()=>cy.get('#vehiculo-patente'),
        vehicleVin: ()=>cy.get('#vehiculo-numerochasis'),
        vehicleSeats: ()=>cy.get('#vehiculo-numeroplazas'),
        vehicleDoors: ()=>cy.get('#vehiculo-numeropuertas'),
        vehicleFuel: ()=>cy.get('#vehiculo-combustible'),
        vehicleGearbox: ()=>cy.get('#vehiculo-cajacambios'),
        vehicleFeatures: ()=>cy.get('.opcion-checkbox [type="checkbox"]'),
        vehicleDescription: ()=>cy.get('#vehiculo-descripcion'),
        vehicleCertificate: ()=>cy.get('#vehiculo-certifico').check(),
        saveDataBtn: ()=>cy.get('#btn-guardar-datos').click(),
        address: ()=>cy.get('#input-direccionestacionamiento'),
        clickAddress:()=>cy.get('.buscador-direccion > .flex-start').click({multiple:true , force:true}),
        pricePerDay:()=>cy.get('#input-preciodiario').clear(),
        estimatedValue:()=>cy.get('#input-precioestimado').clear(),
        saveDataBtnTwo:()=>cy.get('[style="margin-top: 1em; display: block"] > .fila > .right-100 > #btn-guardar-datos').click({multiple:true  , force:true}),
        vehicleImage:()=>cy.get(':nth-child(6) > :nth-child(1) > .vehiculo-fotografia > img').click(),
        saveDataBtnThree:()=>cy.get(':nth-child(11) > .right-100 > .btn').click({force:true}),
        editDay:()=>cy.get('#D-5 > .resumen > .flex-end > #btn-editar').click({force:true}),
        selectUnavailableDay:()=>cy.get('#select-dia-5').select('ND',{force:true}),
        saveEditDay:()=>cy.get('#btn-guardar').click({force:true}),
        listBtn:()=>cy.get(':nth-child(4) > .fila > .right-100 > .btn').click({force:true}),
        listVerificationBtn:()=>cy.get('#btn-automovilinscrito-ok').click(),
        manageMyCarsBtn:()=>cy.get('[href="/us/mis-autos"]').click(),
        pinddingCarsList:()=>cy.get('#\\32 ').click()   
    }

    setCarPage(marca, model, year, mileage){
        this.element.listCarBtn();
        cy.wait(6000);
        this.element.selectMarca().select(marca);
        this.element.selectModel().select(model);
        this.element.selectYear().select(year);
        this.element.selectMileage().select(mileage);
        this.element.startListingBtn();
    }
    setFeaturesPage(plate, vin, seats, doors, fuel, gear){
        this.element.vehiclePlate().type(plate);
        this.element.vehicleVin().type(vin);
        this.element.vehicleSeats().select(seats);
        this.element.vehicleDoors().select(doors);
        this.element.vehicleFuel().select(fuel);
        this.element.vehicleGearbox().select(gear);
    }
    setFeatures(){
            this.element.vehicleFeatures().check();
    }
    setDescription(d){
        this.element.vehicleDescription().type(d);
        this.element.vehicleCertificate();
        this.element.saveDataBtn();
    }
    setContactAndPricePage(add, price, estimatedval){
        this.element.address().type(add);
        this.element.clickAddress();
        this.element.pricePerDay().type(price);
        this.element.estimatedValue().type(estimatedval);
        this.element.saveDataBtnTwo();
    }
    last(){
        this.element.vehicleImage();
        this.element.saveDataBtnThree();
        this.element.editDay();
        this.element.selectUnavailableDay();
        this.element.saveEditDay();
        this.element.listBtn();
        this.element.listVerificationBtn();
        this.element.manageMyCarsBtn();
        this.element.pinddingCarsList();
    }
}
module.exports= new listCarPage();