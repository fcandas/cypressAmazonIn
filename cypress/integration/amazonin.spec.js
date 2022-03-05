import Objects from '../integration/pageObjects/objects'

let rowsLength;

describe ('Amazon.in Test', () =>{

    const objects = new Objects()

    before(() => { // here we take data from excell to json file
       cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {
          rowsLength = rows.length;
          cy.writeFile("cypress/fixtures/xlsxData.json", {rows})
        })
          cy.clearCookies();
          cy.visit('/');
        })

      it ('Click cart detail', () => {

          objects.clickCart().should('be.visible').click();
        
           
          })
                
        

      it ('Check if cart is empty or not', () => {

          objects.checkCart().should('be.visible');
                  
        })
    

      it ('Search item', () => {
        cy.fixture('xlsxData').then((data) => {
           for ( let i = 0; i < rowsLength; i++) {
            
              objects.checkUrl().then(()=>{
              objects.searchBox().type(data.rows[i].searchItems);
              objects.searchButton().click();
              
            })
          }
        })     
       })

       it ('Click third item', () => {

        cy.wait(5000)
        objects.clickThirdItem().eq(3).invoke('attr', 'target', ' _self').click();
                
      })

      it ('Click add to cart button', () => {

        objects.clickAddToCart().click();
        cy.wait(2000);
       
        cy.get('body').then(($a) => { 
          if ($a.text().includes('Skip')) {
              objects.clickSkip().click();
              cy.log('Skip area');
              cy.wait(3000);
          } else if ($a.get('span[id=a-autoid-0-announce]').length>0) { 
              objects.clickLastCart().click();
              cy.log('Add to cart area');
          } else {
              return true;
          }
      })
                
      })

      
})