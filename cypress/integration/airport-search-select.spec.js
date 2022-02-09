/// <reference types="cypress" />

describe('Empty TestSearch Test', () => {
    

    //beforeEach(() => {
        //cy.viewport(1280,720)
        //cy.visit('http://react-tsa-microservice.dev.odos-tc.demoriva.com/login')

    //})

    it('test one',   () => {  
        cy.on('uncaught exception', (err, runnable) => { 
         expect(err.message).to.include('Unexpected token <')   
         done()
         return false})
        
        
        cy.visit('http://react-tsa-microservice.dev.odos-tc.demoriva.com/home?search=')
        

        //cy.contains('login').should('exist')
        
        //cy.get('[data-testid=textInput]').should('exist')
        //cy.contains('developers and QA engineers').click()

        //cy.get('[data-testid=textInput]').type('Nick')

        //cy.get('[type="submit"]').click()

        //cy.pause

        cy.get('[data-testid=textInput]').should('exist')

        cy.get('[name=search]').type('Dulles')

        cy.get('[class=usa-button]').click()

        cy.get('[data-testid="CardBody"]').click()

        cy.get('[data-testid="CardHeader"] > div > button > .usa-icon').click()

        cy.get('[data-testid="CardBody"] > :nth-child(1) > div > button > .usa-icon').click()

        cy.get('.usa-card__heading').click()

        //cy.log('wait time is 20 mins')

        //cy.contains('O').click()

        //cy.url().then((value) => {
            //cy.log('The current real URL is: ', value)
        })
        //cy.go('back')
    

    
    })
