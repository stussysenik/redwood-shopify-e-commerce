describe('Responsive Layout', () => {
  describe('Mobile (375x667)', () => {
    beforeEach(() => {
      cy.viewport(375, 667)
    })

    it('shows hamburger menu on mobile', () => {
      cy.visit('/')
      cy.get('[aria-label="Open menu"]').should('be.visible')
      // Desktop nav should be hidden
      cy.get('nav[aria-label="Main navigation"]').should('not.be.visible')
    })

    it('opens mobile nav on hamburger click', () => {
      cy.visit('/')
      cy.get('[aria-label="Open menu"]').click()
      cy.get('#mobile-nav').should('be.visible')
      cy.get('#mobile-nav').contains('Menu').should('be.visible')
      cy.get('#mobile-nav').contains('Cart').should('be.visible')
    })

    it('shows 1-column grid on mobile', () => {
      cy.visit('/menu/burgers')
      cy.get('.grid').first().should('have.css', 'grid-template-columns').and('match', /^\d+(\.\d+)?px$/)
    })
  })

  describe('Tablet (768x1024)', () => {
    beforeEach(() => {
      cy.viewport(768, 1024)
    })

    it('shows desktop nav on tablet', () => {
      cy.visit('/')
      cy.get('nav[aria-label="Main navigation"]').should('be.visible')
    })

    it('shows 2-column grid on tablet', () => {
      cy.visit('/menu/burgers')
      cy.get('.grid').first().invoke('css', 'grid-template-columns').then((cols) => {
        const colCount = (cols as string).split(' ').length
        expect(colCount).to.be.at.least(2)
      })
    })
  })

  describe('Desktop (1280x720)', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
    })

    it('shows desktop nav with links', () => {
      cy.visit('/')
      cy.get('nav[aria-label="Main navigation"]').should('be.visible')
      cy.get('nav[aria-label="Main navigation"]').contains('Menu').should('be.visible')
      cy.get('nav[aria-label="Main navigation"]').contains('Cart').should('be.visible')
    })

    it('shows 3-4 column grid on desktop', () => {
      cy.visit('/menu/burgers')
      cy.get('.grid').first().invoke('css', 'grid-template-columns').then((cols) => {
        const colCount = (cols as string).split(' ').length
        expect(colCount).to.be.at.least(3)
      })
    })
  })
})
