describe("Edinburgh Castle post page", () => {
  it("renders elements of the post", () => {
    cy.visit("localhost:3000/blog/6318928b4a95544c5eb15d2f");
    cy.get("h1").should("exist").contains("Edinburgh Castle");
    cy.get("img[alt='Edinburgh Castle']").should("exist");
    cy.get("article")
      .should("exist")
      .contains("Nestled amidst the charming cobblestone streets");
  });
});
