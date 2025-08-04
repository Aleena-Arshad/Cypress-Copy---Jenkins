describe("Screenshots & Videos", ()=>{

    it('Capture screenshots & videos', ()=>{
        cy.visit('https://demo3x.opencartreports.com/admin/');
        cy.loginapp("demo","demo");
        // cy.screenshot("home_page");

        // cy.wait(5000);
        // cy.get("div.container-fluid h1").screenshot("Dashboard");

        // Automatically capture screenshots & video on failure -
        // only execute through CLI

        cy.get("div[class='page-header'] li:nth-child(2) a:nth-child(1)").click(); // Dashboard
        cy.get("div[class='container-fluid'] h1").should("have.text","Dashboard" )



    })

})