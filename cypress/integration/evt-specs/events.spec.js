describe("Navigation", () => {
  it("should visit events page", () => {
    cy.visit("/events");
  });

  xit("should create an event", () => {
    cy.visit("/events");
    cy.get(".ui.yellow.button")
      .should("be.visible")
      .click();
    cy.get("div.ui.purple.header").contains("Event details");

    cy.get('input[name="title"]').type("Test Event");
    // cy.get('input[name="category"]').type('Drinks')

    cy.get(".ui.selection.dropdown")
      .click()
      .get(".text:first")
      .click();
    cy.get('textarea[name="description"]').type("This is a test event");

    cy.get('input[placeholder="Event city"]').type("Test Event");
    cy.get('input[placeholder="Event venue"]').type("Calgary Tower");
    cy.contains("Calgary Tower").click();

    cy.get('input[placeholder="Event date"]').click();
    cy.get(
      ".react-datepicker__day.react-datepicker__day--011.react-datepicker__day--weekend"
    ).click();

    cy.get('input[name="title"]').click();
    cy.get(".ui.purple.button").click();
  });

  it("should edit an event", () => {
    cy.visit("/events");
    // cy.contains('event 104').scrollIntoView()
    cy.contains('event 104')

    cy.contains("Category:")
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent();
    cy.contains("event 104")
      .scrollIntoView()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .contains("View")
      .click();

    // cy.scrollTo('bottom')

    // .parent().parent().parent().parent().parent().parent().parent()

    // cy.contains("Category:")
    // .children()

    // cy.get("test event 2")
    // .contains("View").click();


    cy.contains("Manage Event").click()
    cy.get(".ui.selection.dropdown")
      .click()
      .get(".text").contains('Film')
      .click();

      cy.get('textarea[name="description"]').type(" Updated");

      cy.get(".ui.purple.button").click();
  });
});
