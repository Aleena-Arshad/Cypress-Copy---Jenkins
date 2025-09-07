
describe('My First Test', () => {

    it('test1 - verify title-positive', () => {
    // Steps
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
    })


    it('test2 - verify title-negative', () => {
        // Steps
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            cy.title().should('eq','Orangehrm')
        })


  })