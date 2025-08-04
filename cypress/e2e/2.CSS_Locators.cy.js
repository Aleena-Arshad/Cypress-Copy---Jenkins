
describe('CSS Locators', () => {

    it('css_locators', () => {
    // Steps
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        
        // locator
        cy.get("input#search_query_top").type("T-Shirts") //id

        cy.get('[name="submit_search]').click()

        cy.get(".lighter").contains("T-Shirts") // Asertion
        
    })

  })


