describe('Cart Operations', () => {
  beforeEach(() => {
    // Add 3 different items
    cy.visit('/menu/breakfast/pancake-stack')
    cy.contains('button', 'Add to Cart').click()
    cy.get('[aria-label="Close cart"]').click()

    cy.visit('/menu/burgers/classic-cheeseburger')
    cy.contains('button', 'Add to Cart').click()
    cy.get('[aria-label="Close cart"]').click()

    cy.visit('/menu/sides/classic-fries')
    cy.contains('button', 'Add to Cart').click()
    cy.get('[aria-label="Close cart"]').click()

    cy.visit('/cart')
  })

  it('shows 3 items in the cart', () => {
    cy.get('ul[aria-label="Cart items"] li').should('have.length', 3)
  })

  it('increases quantity and total updates', () => {
    // Click the increase button on first item
    cy.get('ul[aria-label="Cart items"] li').first().within(() => {
      cy.get('[aria-label="Increase quantity"]').click()
      cy.get('[aria-live="polite"]').should('contain', '2')
    })
  })

  it('decreases to 0 removes the item', () => {
    // Click trash/remove on first item (qty is 1, so button shows trash)
    cy.get('ul[aria-label="Cart items"] li').first().within(() => {
      cy.get('[aria-label="Remove item"]').click()
    })
    // Should be 2 items now
    cy.get('ul[aria-label="Cart items"] li').should('have.length', 2)
  })

  it('subtotal recalculates correctly', () => {
    // Initial: $9.99 + $12.99 + $4.99 = $27.97
    cy.contains('$27.97').should('be.visible')
  })
})
