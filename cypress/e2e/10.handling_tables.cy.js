describe('Handle Tables',()=>{
    // Will be executed before each it block
    beforeEach('Login',()=>{
        cy.visit('https://demo3x.opencartreports.com/admin/');
        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.get('button[type="submit"]').click();

        // Customers --> Customers

        cy.get("#menu-customer>a").click(); //customer main menu
        cy.get("#menu-customer>ul>li:first-child").click();

    })

// 1. 
    it('Check number of Rows & Columns',()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should("have.length","7");
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should("have.length","10");
    })

//2.
    it('Check cell data from specefic Rows & Columns',()=>{
        // 5th row & 3rd column email
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains("test2@test.com");
    })

// 3. 
    // will repeat till we get all the rows and columns from the table
    it('Read all the Rows & Columns data in the first page',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr") // capture all rows from table
        .each(($row, index, $rows)=>{  // all the rows captured from above are represented by this variable
          
            cy.wrap($row).within( ()=>{ // wrap first row
             cy.get("td").each( ($col, index, $cols)=>{ // as td are inside tr
                cy.log($col.text());
             })
           }) 
        })
    })

// 4.
    it.only('Pagination',()=>{

        // find total number of pages
        cy.get(".col-sm-6.text-right").then ( (e)=>{
            let mytext = e.text(); //Showing 1 to 7 of 7 (1 Pages)
            let totalPages =  mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1); // -1 as there is space (we captured 1 here)
            cy.log("Total nuber of pages in a table: "+totalPages);
        })

        // Read data from all pages (In case of multiple pages)
        // let totalPages = 5;

        // for(let p=1; p<=totalPages; p++){
        //     if(totalPages>1){
        //         cy.log("Activity Page is: "+p);
        //         cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
        //         cy.wait(3000);

        //         cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        //         .each(($row, index,$row)=>{ // every row will be stored in this variable
        //             cy.wrap($row).within(()=>{
        //                 cy.get('td:nth-child(3)').then((e)=>{
        //                     cy.log(e.text()); //Email
        //                 })
        //             })
        //         })
        //     }
        // }

    })


})