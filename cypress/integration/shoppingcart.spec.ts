/// <reference types="Cypress" />

describe('Shopping cart', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('La pagina carga', () => {
    cy.contains('eCeiba');
  });

  it('El logo redirecciona a home', () => {
    cy.contains('eCeiba').click();
    cy.contains('PREMNA 6 AÑOS');
  });

  it('El botón agrega un producto', () => {
    cy.contains('Add To Cart').click();
    cy.contains('Add To Cart').click();
    cy.contains('Add To Cart').click();
    cy.contains('#cart-total', '3');
  });

  it('El botón agrega un producto desde la pagina del producto', () => {
    cy.contains('View Item').click();
    cy.contains('Add To Cart').click();
    cy.contains('#cart-total', '1');
  });

  it('El botón elimina el producto del carrito', () => {
    cy.contains('View Item').click();
    cy.contains('Add To Cart').click();
    cy.get('a[href="/cart"]').click();
    cy.get('#delete-button').click();
    cy.contains('#cart-total', '0');
  });
});
