describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });


  it("should navigate to Events", () => {
    // const { container, debug } = <Application />;
    cy.visit("/");
  });

  it("should select an event", () => {
    // const { container, debug } = <Application />;

    cy.wait(3000);
    cy.visit("/events");
    cy.get(".ui.grid");
    // cy.get(".ui clearing segment");
    cy.get(".ui.purple.button");
    cy.get("a.ui.purple.floated.right.button:first").click();
    cy.get("div.ui.segments");
    cy.get("div.ui.basic.top.attached.segment").should("be.visible");
  });
});
