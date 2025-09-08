describe('Alerts', ()=>{
    
    // 1. Simple Javascript Alert: It will have some text and an "Ok" button  (Normal Alert)

    it.skip('Js alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();

        // event: Store event in t
        // expecting alert message in t
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })

        // alert window automatically closed by cypress
        cy.get("#result").should("have.text", "You successfully clicked an alert")
 
    })

    // 2. Javascript Confirmation Alert: It will have some text with "Ok" and "Cancel" buttons

    it('Js confirm alert - OK',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        // Confirmation alert
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })

        // Cypress auto closed alert window by using ok button
        cy.get('#result').should('have.text', 'You clicked: Ok')
        
    })


    it('Js confirm alert - Cancel',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        // Confirmation alert
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })

        // Cypress close window using cancel button 
        cy.on('window:confirm',()=> false); // by defualt it is true which means OK button

        // Cypress auto closed alert window by using ok button
        cy.get('#result').should('have.text', 'You clicked: Cancel')
        
    })

    // 3. Javascript Prompt Alert: It will have some text with a text box for user input along with "OK"

    it('Js prompt alert - OK',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
      
        // .window because it should be trigerred before opening the window
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome');
        })

        cy.get('button[onclick="jsPrompt()"]').click();

        // cypress will automatically close prompted alert - it will use OK button - by defult
        //cy.on('window:prompt',()=>false);
        cy.get("#result").should('have.text','You entered: welcome');

    })
 

    // 4. Authenticated Alert:    

    // 1 Approach
    it.only('Js prompt alert - OK',()=>{
        // cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{username:"admin",password:"admin"}});  
        
        // cy.get("div[class='example'] p").should('have.contain','Congratulations')

    // 2 Approach
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')

    })


})




 