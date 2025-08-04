describe('Handle Tabs',(()=>{

    it('Approach 1',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')  // parent window
        // Instead of clicking element directly we Remove target attribute target="_blank"
        // so it will open the target link in the same tab so cypress can do operations
        cy.get('.example >a').invoke('removeAttr','target').click();    // clicking on link
        
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')  

        cy.wait(5000);
        
        cy.go('back'); // back to parent tab 

    })


    it.only('Approach 2',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')  // parent window

        cy.get('.example >a').then((e)=>{
           let url = e.prop('href'); // property of href stored in e

           cy.visit(url);

        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')  

        cy.wait(5000);

        cy.go('back'); // back to parent tab 
        
 


    })


}))