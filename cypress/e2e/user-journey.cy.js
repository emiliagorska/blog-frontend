describe("user journey", () => {
  it("correctly navigates through the journey", () => {
    cy.visit("localhost:3000");
    cy.get("h2").eq(0).click();
    cy.location("pathname").should("eq", "/blog/6318928b4a95544c5eb15d2f");
  });
});
