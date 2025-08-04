import 'cypress-iframe'
require('@4tw/cypress-drag-drop')

describe("Mouse Operations",() => {
    
    it('Mouse Hover', ()=>{
        // before mouse hover it should not be visible
        // cy.get("li[class='nav-item dropdown col-6 col-md-auto'] li:nth-child(1) a:nth-child(1)").should('not.be.visible');

        cy.visit("https://practice.expandtesting.com");
        cy.get("#examples-dropdown").trigger('mouseover').click();
        cy.get("li[class='nav-item dropdown col-6 col-md-auto'] li:nth-child(1) a:nth-child(1)").should('be.visible');
    });


    it('Right Click', ()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        
        // Approach 1
        // cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu");
        // cy.get('.context-menu-icon-copy').should("be.visible")
        
        // Approach 2
        cy.get(".context-menu-one.btn.btn-neutral").rightclick();

    });


    it('Double Click', ()=>{
        cy.get("https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml5_ev_ondblclick");
        cy.frameLoaded('#iframeResult');

        // Approach 1 - trigger()
        
        // cy.iframe('#iframeResult').find("button[andclick='myFunction()']").trigger('dblclick');
        // cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');

        // Approach 2 - dblclick()
        cy.iframe('#iframeResult').find("button[andclick='myFunction()']").dblclick();
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');

    });


    it('Drag and Drop using plugin', ()=>{
        cy.visit('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
        cy.get('#box6').drag('#box106');
    });


    it.only('Scrolling Page', ()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu//demo/input.html");
        cy.get('#example-html').scrollIntoView({duration:2000});
        cy.get('#example-html').should('be.visible');
    });

});