/// <reference types="cypress" />
// Login command
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://uat.drizip.com/us')

    cy.get('.toggle-login').click()
    
    cy.get('#input-email').type(email,{ delay: 25 })
    cy.get('#input-password').type(password,{ delay: 25 })
    cy.get('.btn-login-email').click() 
})
// login randomly

Cypress.Commands.add('LoginOnce', (email, delayTime) => {
    cy.visit('https://uat.drizip.com/us')
    cy.get('.toggle-login').click() 
        cy.get('#input-email').type(email, delayTime)
        cy.get('#input-password').type('123456')
        cy.get('#btn-login').click()
        cy.get('.logo').click()

})
// force run Exception Error
Cypress.Commands.add('forceRunExceptionErr', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
  })
})
// click random id from a list
Cypress.Commands.add('clickRandomId',(parentList,childList)=>{
    var faker = require("faker");
    const ids=[];
    cy.get(parentList).each( (car,i,list)=>{
        ids[i]="#"+list[i].id;
    })
    cy.then(()=>{
        console.log(ids);
        const randomId= faker.random.arrayElement(ids);
        console.log(randomId);
        cy.get(childList+randomId).click()
    })
})
// Select random item from dropDownList (mrca, model, seat#, door#, fuel, gearbox)
Cypress.Commands.add('selectRandomItem1',(parentList,childList,start)=>{
    var faker = require("faker");
    let arrItems=[],arrList=[];
    cy.wait(2000)
    cy.get(parentList).each((item,i,list)=>{
        cy.then(()=>{
            arrList= Array.from(list);
            arrItems= arrList.slice(start);
            for (let j = 0; j < arrItems.length; j++) {
                arrItems[j]=arrItems[j].value; 
            }
        })
    })
    cy.then(()=>{
    console.log(arrItems);
    const randomItem= faker.random.arrayElement(arrItems);
    cy.get(childList).select(randomItem);
    })
})
// Select random item from dropDownList (year, mileage)
Cypress.Commands.add('selectRandomItem2',(parentList,childList,start,end)=>{
    var faker = require("faker");
    let arrItems=[],arrList=[];
    cy.wait(1000)
    cy.get(parentList).each((item,i,list)=>{
        cy.then(()=>{
            arrList= Array.from(list);
            arrItems= arrList.slice(start,end);
            for (let j = 0; j < arrItems.length; j++) {
                arrItems[j]=arrItems[j].value; 
            }
        })
    })
    cy.then(()=>{
    console.log(arrItems);
    const randomItem= faker.random.arrayElement(arrItems);
    cy.get(childList).select(randomItem);
    })
})
// check random car features
Cypress.Commands.add('checkRandomFeatures',(element)=>{
    var faker = require("faker");
    const ids=[], features=[];
    cy.get(element).each( (car,i,list)=>{
        ids[i]="#"+list[i].id;
    })
    cy.then(()=>{
        for (let i = 0; i < ids.length; i++) {
            features[i]= faker.random.arrayElement(ids);
        }
        let uniqueFeatures = [...new Set(features)];
        console.log(features);
        console.log(uniqueFeatures);
        for (let i = 0; i < uniqueFeatures.length; i++) {
            cy.get(uniqueFeatures[i]).check();
        }
    })
})

