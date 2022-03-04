class Objects{
    clickCart(){
        return cy.get('a[id=nav-cart]')
    }
    checkCart(){
        return cy.get('div[class="a-row sc-your-amazon-cart-is-empty"]')
    }
    checkUrl(){
        return cy.url().should('include', 'nav_cart')
    }
    searchBox(){
        return cy.get('input[id=twotabsearchtextbox]')
    }
    searchButton(){
        return cy.get('input[id=nav-search-submit-button]')
    }
    clickThirdItem(){
        return cy.get('span[class="a-size-medium a-color-base a-text-normal"]')
    }

    clickAddToCart(){
        return cy.get('input[id="add-to-cart-button"]')
    }
    clickInnerAddToCart(){
        return cy.get('input[aria-labelledby="attachSiAddCoverage-announce"]')
    }


    
}

export default Objects