class Login{

    txtUserName = "input[placeholder='Username']";
    txtPasswordName = "input[placeholder='Password']";
    buttonSubmit = "button[type='submit']";
    verifyLoginMsg = '.oxd-topbar-header-breadcrumb > .oxd-text';


    setUserName(username){
        cy.get(this.txtUserName).type('Admin');
    }

    setPassword(password){
        cy.get(this.txtPasswordName).type('admin123');
    }

    clickSubmit(){
        cy.get(this.buttonSubmit).click();
    }

    verifyLogin(){
        cy.get(this.verifyLoginMsg)
        .should('have.text','Dashboard');
    }

}

export default Login;


