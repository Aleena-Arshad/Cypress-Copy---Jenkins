import 'cypress-file-upload'
describe('File Uploads', (() =>{

    it('Single File Upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile('Entrepreneurship 101.pdf');
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    })


    it('File Upload - Rename',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile({filePath: 'Entrepreneurship 101.pdf', fileName: 'Update 101.pdf'});
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    })


    it('File Upload - Drag and drop',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.wait(5000);
        cy.get("#drag-drop-upload").attachFile('Entrepreneurship 101.pdf', {subjectType: 'drag-n-drop' });
        cy.get("#drag-drop-upload").contains("Entrepreneurship 101.pdf")
        
    })


    it('Multiple files upload',()=>{
       cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
       cy.get("#filesToUpload").attachFile(["Entrepreneurship 101.pdf", "AleenaArshad_Resume.docx"]);
       cy.wait(5000);

       cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected:')
    })


    it.only('File Upload - Shadow Dom',()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get(".smart-browse-input" ,{includeShadowDom:true}).attachFile("Entrepreneurship 101.pdf");
        cy.wait(5000);

        cy.get('.smart-item-name',{includeShadowDom:true}).contains("Entrepreneurship 101.pdf");

    })

    


}))