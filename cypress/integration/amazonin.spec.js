let rowsLength;

describe ('Amazon.in Test', () =>{
    before(() => {
       cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {
          rowsLength = rows.length;
          cy.writeFile("cypress/fixtures/xlsxData.json", {rows})
        })
          cy.visit('/');
        })

      it ('Click cart detail', () => {

          cy.get('a[id=nav-cart]').should('be.visible').click();
                
        })

      it ('Check if cart is empty or not', () => {

            cy.contains('Your Amazon Basket is empty').should('be.visible');
                  
        })
    

      it ('Search item', () => {
        cy.fixture('xlsxData').then((data) => {
           for ( let i = 0; i < rowsLength; i++) {
            
              cy.url().should('include', 'nav_cart').then(()=>{
              cy.get('input[id=twotabsearchtextbox]').type(data.rows[i].searchItems);
              cy.get('input[id=nav-search-submit-button]').click();
              
            })
          }
        })     
       })
      })