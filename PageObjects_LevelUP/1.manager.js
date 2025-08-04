class ManagerPage {

  clickAddManagerBtn() {
    cy.get("a.btn.btn-neutral").click(); // Add New Manager button
  }

  fillManagerForm(data) {
    cy.get("input#user_license_number").type(data.user_license_number);
    cy.get("input#user_name").type(data.user_name);
    cy.get("input#user_email").type(data.email);
    cy.get("input#user_password").type(data.user_password);
    cy.get("input#user_password_confirmation").type(data.user_password_confirmation);

    cy.get("span#select2-user_office_id-container.select2-selection__rendered").click({ force: true });
    cy.get('input.select2-search__field').filter(':visible').first().type(`${data["select2-user_office_id-container"]}{enter}`);
  }

  submitManagerForm() {
    cy.get("input.btn.btn-primary").click(); // Submit form
  }
}
export default ManagerPage;
