describe('MyTestSuite', ()=>{

    before(() => {
        cy.log("*** Launch App ***");
    })

    after(() => {
        cy.log("*** Close App ***");
    })

    beforeEach(() => {
        cy.log("*** Before Each ***");
    })

    afterEach(() => {
        cy.log("*** After Each ***");
    })


    it('Search', ()=>{
        cy.log("*** Searching ***");
    })


    
    it('Advanced Search', ()=>{
        cy.log("*** Advanced Searching ***");
    })


    it('Listing Products', ()=>{
        cy.log("*** Listing Products ***");
    })
})