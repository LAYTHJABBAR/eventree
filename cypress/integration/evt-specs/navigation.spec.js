describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });

  it("should navigate to Events", () => {
    cy.visit("/");
    cy.visit("/events");
    cy.get(".ui.grid");
  });

  it("should select an event", () => {
    // cy.wait(1000);

    cy.get(".ui.purple.button");
    cy.get("a.ui.purple.floated.right.button:first").click();
    cy.get("div.ui.segments");
    cy.get("div.ui.basic.top.attached.segment").should("be.visible");
    cy.get(".ui.huge.header").should("be.visible");

    cy.get(".info.large.icon").should("be.visible");
    cy.get(".black.calendar.large.icon").should("be.visible");
    cy.get(".black.marker.large.icon").should("be.visible");

    cy.get(".button.ui.tiny.button").should("be.visible");
    cy.get(".button.ui.tiny.button").click();
    cy.get("div.gm-style").should("be.visible");
  });
});
