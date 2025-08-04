
describe('Assertions Demo', ()=>{

    it('Implicit Assertions', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     
        // Implicit - should & and 
        cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrmlive')
        
        // or
        // cy.url().should('include','orangehrmlive.com')
        // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain','orangehrmlive')

        //  same above can be written as
        // cy.url().should('include','orangehrmlive.com')
        // .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .and('not.contain','orangehrmlive')

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain',"HRM")

        // check element is present on page - check logo
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        cy.get('.orangehrm-login-branding > img').should('exist')

        // or
        // cy.get('.orangehrm-login-branding > img').should('be.visible')
        // .and('exist')

        // return all the links
        cy.xpath("//a").should("have.length",'5')

        // provide value to input field
        cy.get("input[placeholder='Username'").type("Admin")
        cy.get("input[placeholder='Username'").should("have.value","Admin")
       
    })




    it('Explicit Assertions', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.get("input[placeholder='Username'").type("Admin")
        cy.get("input[placeholder='Password'").type("admin123")
        cy.get("button[type='submit']").click()
       
        let expName = "xyz"

        cy.get(".oxd-userdropdown-name").then( (x)=>{
            let actName = x.text()

            // BDD Style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)


            // TDD Style
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)
        })
    })

})

