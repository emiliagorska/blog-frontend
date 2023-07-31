describe("homepage", () => {
  it("renders elements of the first post on homepage", () => {
    cy.visit("localhost:3000");
    cy.get("h2").eq(0).should("exist").contains("Edinburgh Castle");
    cy.get('[data-testid="6318928b4a95544c5eb15d2f"]')
      .find("img")
      .should("exist");
    cy.get("article")
      .eq(0)
      .should("exist")
      .contains("Nestled amidst the charming cobblestone streets");
  });
});
