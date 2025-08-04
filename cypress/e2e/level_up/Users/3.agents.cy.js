
// describe('Login and Impersonate Test', () => {

//     it('Agent Screen Test', () => {
//     // Steps
//         cy.login();  // ✅ Custom command call

//         cy.xpath("//*[@id='17']/td[5]/div/a").click() // more icon 
//         cy.xpath("//*[@id='17']/td[5]/div/div/a[2]").click() // Impersonate

//     // i got error as display property was none    
//     // Click the sidebar toggle if it's hidden on smaller screens
//     cy.xpath('//*[@id="sidenav-main"]/div/div[1]/div[1]/div/div/div').click({force:true})
//     cy.contains('Users').click({ force: true });
//     cy.contains('Agents').click({ force: true });

//     cy.get('a.btn.btn-neutral').contains('Add New').click(); // Add New (Agent) click ()
    
//     // Fill Coach Details 
//     cy.get("input#user_license_number").type("77788945")
//     cy.get("input#user_name").type("Automated Agent")
//     cy.get("input#user_email").type("a1@example.com")
//     cy.get("input#user_password").type("12345678") 
//     cy.get("input#user_password_confirmation").type("12345678")

//     // Open the Manager dropdown
//     cy.get("span#select2-user_manager_id-container").click({ force: true });
//     cy.get('input.select2-search__field').should('be.visible').last().type("Aleena Manger 2{enter}");
//     cy.wait(1000); // waits 1 second
    
//     cy.get("span#select2-user_office_id-container.select2-selection__rendered").click({force: true})   
//     cy.get('input.select2-search__field').filter(':visible').first().type("BrainX Technologies{enter}");

//     cy.get("input.btn.btn-primary").contains("Create Agent").click()   

//     })
//   })


// // NOTE: I was getting error as:
// // You're targeting the first dropdown’s input, which is for Office, not Manager —
// // even though you just opened the Manager dropdown.


// // Example 1
// /* <div class="container">
//   <span>First</span>   <!-- eq(0) -->
//   <span>Second</span>  <!-- eq(1) -->
//   <span>Third</span>   <!-- eq(2) -->
// </div> */

// // ---------------- Solution:
// // cy.get('span').eq(1) // -- Selects "Second" globally
// // // or
// // cy.get('.container').find('span').eq(1) // -- Scoped selection


// // Example 2
// /* <div> <!-- main div -->
//   <div class="container"> <!-- 1st child div -->
//     <span>First</span>   <!-- eq(0) -->
//     <span>Second</span>  <!-- eq(1) ✅ YOU WANT THIS -->
//     <span>Third</span>   <!-- eq(2) -->
//   </div>

//   <div> <!-- second div --> </div>
// </div> */

// // ---------------- Solution:
// // cy.get('div.container').find('span').eq(1)



// // Example 3
// // <div> <!-- main div -->
// //   <a>
// //     <div class="container"> <!-- 1st child div -->
// //       <span>First</span>    <!-- eq(0) -->
// //       <span>Second</span>   <!-- eq(1) ✅ YOU WANT THIS -->
// //       <span>Third</span>    <!-- eq(2) -->
// //     </div>
// //   </a>

// //   <div> <!-- second sibling div -->
// //     <!-- Other content -->
// //   </div>
// // </div>

// // ---------------- Solution:
// // cy.get('a').find('div.container').find('span').eq(1) OR
// // cy.get('div')                      // Selects main parent
// //   .find('a')                       // Step into the <a>
// //   .find('div.container')          // Then into div.container
// //   .find('span')                   // Find all spans
// //   .eq(1)



