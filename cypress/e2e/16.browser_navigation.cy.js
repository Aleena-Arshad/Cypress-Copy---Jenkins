describe("Browser Navigation", ()=>{
    it('Navigation Test', () =>{
        cy.visit('https://demo3x.opencartreports.com/admin/');
        cy.loginapp("demo","demo");
        cy.title().should('eq',"Dashboard");

        cy.get('.breadcrumb > :nth-child(2) > a').click();

        cy.go("back"); // go back to home

        cy.go('forward');

        cy.reload();

    })
})