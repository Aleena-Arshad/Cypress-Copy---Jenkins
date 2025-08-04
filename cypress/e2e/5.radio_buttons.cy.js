// const {it} = require("mocha")

describe("Check UI Elements", ()=>{
    
    it("Checking Radio Buttons", ()=>{
        cy.visit("https://testautomationpractice.blogspot.com")
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        // selecting radio buttons
        
        cy.get("input#male").check().should("be.checked")
        cy.get("input#female").should('not.be.checked')

    })

    it("Checking Check boxes", ()=>{
        cy.visit("https://testautomationpractice.blogspot.com")
        cy.get("input#monday").should('be.visible')

        // selecting single checkbox monday
        
        cy.get("input#monday").check().should("be.checked")
        cy.get("input#monday").uncheck().should("not.be.checked")

        // first().check() , last().check()
    })

})