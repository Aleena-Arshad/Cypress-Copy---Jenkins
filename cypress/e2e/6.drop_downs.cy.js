// const {it} = require("mocha")

describe("Handle dropdowns", ()=>{
    
    it.skip("Drop down with select", ()=>{
        cy.visit("https://testautomationpractice.blogspot.com")
       
        cy.get("input#male").should('be.visible')
        
        cy.get("select#country").select("France").should("have.value","france")

    })
    
    // bootstrap drop down - without select tag
    // it("Drop down without select", ()=>{
    //     cy.visit("https://testautomationpractice.blogspot.com")
       
    //     cy.get("#select-2-billing_country-container").click()
    //     cy.get(".select2-search_field").type('Itlay').type('{enter}')
    //     cy.get("#select-2-billing_country-container").should("have.text",'Itlay')
    
    // })


    it.skip("Auto suggest drop down", ()=>{
        cy.visit("https://www.wikipedia.org")
        cy.get("#searchInput").type('Dehli')
        cy.get('.suggestion-title').contains('Delhi').click()
       
     // 22:00
    })

    it.skip("Dynamic drop down", ()=>{
        cy.visit("https://www.google.com")

        cy.get("input[name='q']").type('cypress automation')

        cy.get('.suggestion-title').contains('Delhi').click()
    //    38:00
    })


})