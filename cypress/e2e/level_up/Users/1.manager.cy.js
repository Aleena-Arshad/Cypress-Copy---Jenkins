import ManagerPage from '../../../../PageObjects_LevelUP/1.manager';

describe('Login and Impersonate Test', () => {
  const managerPage = new ManagerPage();

  it('Manager Screen Test - Fixtures', () => {
    cy.login();

    cy.xpath("//*[@id='17']/td[5]/div/a").click(); // more icon
    cy.xpath("//*[@id='17']/td[5]/div/div/a[2]").click(); // Impersonate

    cy.fixture('level_up/users/manager').then((dataArray) => {
      dataArray.forEach((data) => {
        cy.wait(1000);
        managerPage.clickAddManagerBtn();
        managerPage.fillManagerForm(data);
        managerPage.submitManagerForm();

        cy.url().should('include', '/admin/managers');
      });
    });
  });
});





// describe('Login and Impersonate Test', () => {
//   it('Manager Screen Test - Fixtures', () => {

//     cy.login(); // ✅ Login
//     cy.xpath("//*[@id='17']/td[5]/div/a").click(); // more icon
//     cy.xpath("//*[@id='17']/td[5]/div/div/a[2]").click(); // Impersonate

//     // Now loop through each fixture entry
//     cy.fixture('level_up/users/manager').then((dataArray) => {
//       dataArray.forEach((data, index) => {

//         // Wait for previous manager to be created before continuing (optional but useful in UI-heavy apps)
//         cy.wait(1000);

//         cy.get("a.btn.btn-neutral").click(); // Add New Manager button

//         cy.get("input#user_license_number").type(data.user_license_number);
//         cy.get("input#user_name").type(data.user_name);
//         cy.get("input#user_email").type(data.email);
//         cy.get("input#user_password").type(data.user_password); 
//         cy.get("input#user_password_confirmation").type(data.user_password_confirmation);        

//         cy.get("span#select2-user_office_id-container.select2-selection__rendered").click({ force: true });
//         cy.get('input.select2-search__field').filter(':visible').first()
//           .type(`${data["select2-user_office_id-container"]}{enter}`);

//         cy.get("input.btn.btn-primary").click(); // Submit form

//         // Optional: wait until redirect back to Manager list before starting next loop
//         cy.url().should('include', '/admin/managers'); // adjust path if needed
//       });
//     });

//   });
// });


