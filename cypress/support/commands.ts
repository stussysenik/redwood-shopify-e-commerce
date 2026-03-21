// Custom commands for Redwood Diner E2E tests

declare global {
  namespace Cypress {
    interface Chainable {
      addToCart(productHandle: string): Chainable<void>
    }
  }
}

Cypress.Commands.add('addToCart', (productHandle: string) => {
  cy.visit(`/menu/breakfast/${productHandle}`)
  cy.contains('button', 'Add to Cart').click()
})

export {}
