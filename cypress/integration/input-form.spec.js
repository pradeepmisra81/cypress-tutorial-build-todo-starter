const hostUrl = "http://localhost:3030";
describe("Input form", () => {
    beforeEach(() => {
        cy.visit(hostUrl);
    });

    it("focuses input on load", () => {
        cy.focused()
        .should('have.class', 'new-todo');
    });

    it("focuses input on load", () => {
        const typedText = "Buy Milk";
        cy.get('.new-todo')
        .type(typedText)
        .should('have.value', typedText);
    });
});