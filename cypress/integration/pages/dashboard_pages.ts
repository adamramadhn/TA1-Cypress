export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    sauceLabsBackpackAddToCart(){
        //click add to cart
        cy.get('#inventory_item_container > div > div > div > button').click()
        //click my cart
        cy.get('#shopping_cart_container > a > svg').click()
        //click checkout
        cy.get('#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button').click()
        //input firstname
        cy.get('#first-name').type('Rama')
        //input lastname
        cy.get('#last-name').type('D han')
        //input postalcode
        cy.get('#postal-code').type('101010')
        //click continue
        cy.get('#checkout_info_container > div > form > div.checkout_buttons > input').click()
        //click finish
        cy.get('#checkout_summary_container > div > div.summary_info > div.cart_footer > a.btn_action.cart_button').click()
        //assert success order
        cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible')
    }
   
    invalidSauceLabsBackpackAddToCart(){
        //click add to cart
        cy.get('#inventory_item_container > div > div > div > button').click()
        //click my cart
        cy.get('#shopping_cart_container > a > svg').click()
        //click checkout
        cy.get('#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button').click()
        //click continue
        cy.get('#checkout_info_container > div > form > div.checkout_buttons > input').click()
        //assert error message
        cy.contains('Error: First Name is required').should('be.visible')
    }


}