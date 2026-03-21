describe('Navigation', () => {
  it('renders the home page with hero and featured items', () => {
    cy.visit('/')
    cy.contains('Welcome to Redwood Diner').should('be.visible')
    cy.contains('Our Favourites').should('be.visible')
    cy.get('[aria-labelledby="featured-items-title"]').should('exist')
  })

  it('navigates to the menu page via CTA', () => {
    cy.visit('/')
    cy.contains('a', 'View Our Menu').click()
    cy.url().should('include', '/menu')
    cy.contains('Our Menu').should('be.visible')
    // Verify all 6 category sections exist
    cy.get('section[id]').should('have.length.at.least', 6)
  })

  it('navigates to a category page via category tab', () => {
    cy.visit('/menu')
    cy.contains('a', 'Burgers').first().click()
    cy.url().should('include', '/menu/burgers')
    cy.contains('h1', 'Burgers').should('be.visible')
  })

  it('navigates to a product detail page', () => {
    cy.visit('/menu/burgers')
    cy.contains('Classic Cheeseburger').click()
    cy.url().should('include', '/menu/burgers/classic-cheeseburger')
    cy.contains('h1', 'Classic Cheeseburger').should('be.visible')
  })

  it('shows 404 page for invalid routes', () => {
    cy.visit('/this-does-not-exist', { failOnStatusCode: false })
    cy.contains('Page not found').should('be.visible')
  })
})
