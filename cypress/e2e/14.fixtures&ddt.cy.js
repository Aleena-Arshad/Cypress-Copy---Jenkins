describe("MyTestSuite",()=> {

    // Direct Access
    it('Fixture Demo Test', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        cy.fixture('orangehrm').then((data)=>{// getting entire data from file is a variable

            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);
            cy.get("button[type='submit']").click();
    
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
            .should('have.text',data.expected);

        })
    })


    // Access through Hook - for multiple it blocks
    // below is hook
    // let userdata;
    // before( ()=>{
    //     cy.fixture("orangehrm").then( (data)=>{
    //         userdata = data;
    //     })
    // })

    it('Fixture Demo Test', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

            cy.get("input[placeholder='Username']").type(userdata.username);
            cy.get("input[placeholder='Password']").type(userdata.password);
            cy.get("button[type='submit']").click();
    
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
            .should('have.text',userdata.expected);
       
    })   

    

    // Data driven testing
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it.only('Data Driven Testing',()=>{
        cy.fixture("orangehrm2").then( (data)=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            //  each set of json to userdata
            
            data.forEach((userdata)=>{ 
                cy.get("input[placeholder='Username']").type(userdata.username);
                cy.get("input[placeholder='Password']").type(userdata.password);
                cy.get("button[type='submit']").click();
                
   
            
                if(userdata.username=='Admin' && userdata.password=="admin123")
                {
                cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                .should('have.text',userdata.expected); // Dashboard

                // logout
                cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
                cy.get(':nth-child(4) > .oxd-userdropdown-link').click();

                }

                else{
                    cy.get('.oxd-alert-content > .oxd-text')
                    .should("have.text",userdata.expected);
                }
            })
        })
    })


})