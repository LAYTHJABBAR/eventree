describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });

  it("should navigate to Events", () => {
    cy.visit("/");
  });

  it("should select an event", () => {
    cy.wait(1000);
    cy.visit("/events");
    cy.get(".ui.grid");

    cy.get(".ui.purple.button");
    cy.get("a.ui.purple.floated.right.button:first").click();
    cy.get("div.ui.segments");
    cy.get("div.ui.basic.top.attached.segment").should("be.visible");
  });
});

