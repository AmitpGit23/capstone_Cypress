describe(' Product Details', ()=>{
   it(' Validate that product detail pages display accurate information',()=>{
 
      cy.visit('https://demo.x-cart.com/demo')
 
      cy.get(':nth-child(2) > .icon-link').should('be.visible').click()
      cy.get('h1').should('contain', 'Apparel')
 
      cy.get('.dialog > .content').should('be.visible');
 
      cy.get('.first > .item-box > .details > .product-title').should('contain','Binary');
 
      cy.get('.first > .item-box > .details > .price-cell > .price-row > .price-value > .currency').should('contain','$17.99')
 
      cy.get('.first > .item-box > .details > .buttons-cell > .buy-now > form > .buttons-row > .main-button > .button-right > .button-left').click()
 
      cy.get(':nth-child(4) > .item-box > .details > .buttons-cell > .buy-now > form > .buttons-row > .main-button > .button-right > .button-left > .fa').should('be.visible').click()
 
      cy.get(':nth-child(2) > .item-box > .image > .image-wrapper > a > img').should('be.visible');
     
      cy.xpath("//a[normalize-space()='Caffeine Molecule']").click();
 
      cy.xpath("//span[contains(text(),'Add to cart')]").click();
      
      cy.xpath("//a[normalize-space()='View cart']").click()
 
   })
})  