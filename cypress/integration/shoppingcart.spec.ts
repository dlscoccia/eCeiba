/// <reference types="Cypress" />

describe('Shopping cart', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('La pagina carga', () => {
    cy.contains('eCeiba');
  });

  it('El botón agrega un producto', () => {
    cy.contains('Add To Cart').click();
  });
});
