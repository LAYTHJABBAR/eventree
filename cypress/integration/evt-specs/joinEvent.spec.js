describe("Login", () => {
  it("should visit root", () => {
    cy.visit("/");
  });

  it("should navigate to the event page", () => {
    cy.visit("/events");
  });

  it("should navigate to the login page", () => {
    cy.get(".ui.basic.inverted.button")
      .contains("Login")
      .click();

    cy.get(".ui.large.form").within($form => {
      cy.get('input[name="email"]').type("david@test.com");
      cy.get('input[name="password"]').type("654321");
      cy.root().submit();
      cy.wait(1000);
    });
  });

  it("should navigate to the going to class Event and join the event", () => {
  cy.get(".description").contains("Hosted by david")
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .children()
      .contains("View")
      .click();
    cy.contains("JOIN THIS EVENT").click();
  
  it("should navigate back to Events page", () => {
    cy.visit("/events");
  });
});
})