
// describe('Login and Impersonate Test', () => {

//     it('Coaches Screen Test', () => {
//         // Steps
//         cy.login();  // ✅ Custom command call

//         cy.xpath("//*[@id='17']/td[5]/div/a").click() // more icon 
//         cy.xpath("//*[@id='17']/td[5]/div/div/a[2]").click() // Impersonate

//         // i got error as display property was none    
//         // Click the sidebar toggle if it's hidden on smaller screens

//         // cy.xpath('//*[@id="sidenav-main"]/div/div[1]/div[1]/div/div/div').click({force:true})
//         // cy.contains('Users').click({ force: true });
//         // cy.contains('Coaches').click({ force: true });


//         // Force reveal the sidebar if hidden due to CSS
//         cy.get('#sidenav-main').then($el => {
//             $el[0].style.cssText = 'position: relative; display: block !important; visibility: visible !important;';
//         });

//         // Scroll and click on 'Users' link
//         cy.contains('Users', { matchCase: false })
//             .scrollIntoView()
//             .should('exist')         // Just ensure element exists in DOM
//             .click({ force: true });

//         // Then click on 'Coaches'
//         cy.contains('Coaches', { matchCase: false })
//             .scrollIntoView()
//             .should('exist')
//             .click({ force: true });

//         cy.get("a.btn.btn-neutral").click() // Add New (Manager) click

//         // Fill Coach Details 
//         cy.get("input#user_license_number").type("777889")
//         cy.get("input#user_name").type("Automated Coach")
//         cy.get("input#user_email").type("a@example.com")
//         cy.get("input#user_password").type("12345678")
//         cy.get("input#user_password_confirmation").type("12345678")
//         cy.get("span#select2-user_office_id-container.select2-selection__rendered").click({ force: true })
//         cy.get('input.select2-search__field').filter(':visible').first().type("BrainX Technologies{enter}");

//         cy.get("input.btn.btn-primary").contains("Create Coach").click()

//     })
// })



