describe('Add to Cart', () => {
  it('adds a product to the cart from the detail page', () => {
    cy.visit('/menu/burgers/classic-cheeseburger')
    cy.contains('h1', 'Classic Cheeseburger').should('be.visible')
    cy.contains('$12.99').should('be.visible')

    // Click Add to Cart
    cy.contains('button', 'Add to Cart').click()

    // Verify "Added!" flash
    cy.contains('button', 'Added!').should('be.visible')

    // Cart drawer opens
    cy.get('[role="dialog"][aria-label="Shopping cart"]').should('be.visible')
    cy.contains('Classic Cheeseburger').should('be.visible')

    // Badge shows 1
    cy.get('[aria-label*="Open cart"]').find('span').contains('1')
  })

  it('adds same item again and quantity increases', () => {
    cy.visit('/menu/burgers/classic-cheeseburger')
    cy.contains('button', 'Add to Cart').click()

    // Close drawer
    cy.get('[aria-label="Close cart"]').click()

    // Add again
    cy.contains('button', 'Add to Cart').click()

    // Drawer should show qty 2
    cy.get('[role="dialog"]').within(() => {
      cy.get('[aria-live="polite"]').should('contain', '2')
    })
  })

  it('shows correct total on cart page', () => {
    cy.visit('/menu/burgers/classic-cheeseburger')
    cy.contains('button', 'Add to Cart').click()
    cy.get('[aria-label="Close cart"]').click()
    cy.contains('button', 'Add to Cart').click()
    cy.get('[aria-label="Close cart"]').click()

    // Navigate to /cart
    cy.visit('/cart')
    cy.contains('Your Cart').should('be.visible')
    // 2 x $12.99 = $25.98
    cy.contains('$25.98').should('be.visible')
  })
})
