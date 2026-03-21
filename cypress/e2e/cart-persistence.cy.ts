describe('Cart Persistence', () => {
  it('persists cart across page reload', () => {
    // Add an item
    cy.visit('/menu/burgers/classic-cheeseburger')
    cy.contains('button', 'Add to Cart').click()
    cy.get('[aria-label="Close cart"]').click()

    // Reload the page
    cy.reload()

    // Cart badge should still show 1
    cy.get('[aria-label*="Open cart"]').within(() => {
      cy.get('span').contains('1').should('be.visible')
    })

    // Navigate to cart page and verify item is there
    cy.visit('/cart')
    cy.contains('Classic Cheeseburger').should('be.visible')
    cy.contains('$12.99').should('be.visible')
  })
})
