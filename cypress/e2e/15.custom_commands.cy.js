// 1.	Click on link using labels.
// 2.	Over writing existing contains() command.
// 3.	Re-usable custom command.

// beforeEach('Login',()=>{
//     cy.visit('https://demo3x.opencartreports.com/admin/');
//     // cy.get('#input-username').type('demo');
//     // cy.get('#input-password').type('demo');
//     // cy.get('button[type="submit"]').click();
// })

describe('Custom commands', ()=>{

    it("Handling links", ()=>{
        cy.clickLink("div[class='page-header'] li:nth-child(2) a:nth-child(1)");
        cy.get("div[class='container-fluid'] h1").should('have.text','Dashboard');

    })


    it("Overwriting existing command", ()=>{
        cy.clickLink("Dashboard");
        cy.get('h1').should("have.text", "Dashboard");

        cy.get("div[class='page-header'] li:nth-child(2) a:nth-child(1)").should('have.text', 'Dashboard')

    })

    
    it.only("Login command", ()=>{
        cy.visit('https://demo3x.opencartreports.com/admin/');
        cy.loginapp("demo","demo");
        cy.get("div.container-fluid h1").should('have.text', 'Dashboard');
    });
})