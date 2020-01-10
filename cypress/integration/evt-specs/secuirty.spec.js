describe("Test Secuirty Feature for the APP if trying to access restricted pages without Auth", () => {
  it("Creat Event Page'", () => {
    cy.visit('/createEvent')
    cy.get('.description').contains('Please either login or register to see this page')
  })

  it("Access Existing User Profile", () => {
    cy.visit('/profile/drIA4SuRs3UMzpBiEPrOfMYzWFN2')
    cy.get('.description').contains('Please either login or register to see this page')
  })
  it("Access Existing User Setting Dashboard", () => {
    cy.visit('/settings/basic')
    cy.get('.description').contains('Please either login or register to see this page')
  })
  it("Access Exsiting User about me Page", () => {
    cy.visit('/settings/about')
    cy.get('.description').contains('Please either login or register to see this page')
  })
  it("Access Exsiting User Photo Setting Page", () => {
    cy.visit('/settings/photos')
    cy.get('.description').contains('Please either login or register to see this page')
  })
  it("Access Exsiting User Account Page", () => {
    cy.visit('/settings/account')
    cy.get('.description').contains('Please either login or register to see this page')
  })
 it('Access Exsitting Event and trying to join without signing in', () => {
   cy.visit('/events/tldmJHjSOowEUZY5nLY7')
   cy.get('.ui.purple.button').contains('JOIN THIS EVENT').click()
   cy.get('.toastr.animated.rrt-error:visible').contains('Please login to signup for the event')
 
 })
})
