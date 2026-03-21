describe('Describe Your Own', () => {
  beforeEach(() => {
    cy.visit('/menu/breakfast/describe-your-own-breakfast')
  })

  it('shows DYO product with disabled Add to Cart', () => {
    cy.contains('h1', 'Describe Your Own Breakfast').should('be.visible')
    cy.contains('Describe Your Custom Dish').should('be.visible')
    cy.get('button').contains('Add to Cart').should('be.disabled')
  })

  it('keeps Add to Cart disabled with < 10 characters', () => {
    cy.get('#custom-description').type('Short')
    cy.get('button').contains('Add to Cart').should('be.disabled')
  })

  it('enables Add to Cart with >= 10 characters', () => {
    cy.get('#custom-description').type('Scrambled eggs with bacon and toast')
    cy.contains('Looks great!').should('be.visible')
    cy.get('button').contains('Add to Cart').should('not.be.disabled')
  })

  it('adds DYO item and shows custom description in cart', () => {
    const desc = 'Scrambled eggs with bacon and toast'
    cy.get('#custom-description').type(desc)
    cy.contains('button', 'Add to Cart').click()

    // Cart drawer shows the custom description
    cy.get('[role="dialog"]').within(() => {
      cy.contains(desc).should('be.visible')
    })
  })

  it('creates separate line items for different descriptions', () => {
    // Add first DYO item
    cy.get('#custom-description').type('Scrambled eggs with bacon')
    cy.contains('button', 'Add to Cart').click()
    cy.get('[aria-label="Close cart"]').click()

    // Clear the description and type a new one
    cy.get('#custom-description').clear()
    cy.get('#custom-description').type('French toast with maple syrup')
    cy.contains('button', 'Add to Cart').click()

    // Cart drawer should show 2 line items
    cy.get('[role="dialog"]').within(() => {
      cy.get('li').should('have.length', 2)
    })
  })
})
