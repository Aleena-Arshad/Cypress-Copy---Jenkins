describe('XPath Locators', ()=>{
    it('Find total no of products', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.xpath("//xpath here/li").should('have.length',7)
    })

    it('chained xpath',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.xpath("//xpath here/li").should('have.length',7).xpath("./li").should('have.length',7)
    })
})