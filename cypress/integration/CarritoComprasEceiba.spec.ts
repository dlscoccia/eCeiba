/// <reference types="Cypress" />

describe('Shopping cart', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('La pagina carga', () => {
    cy.contains('eCeiba');
  });

  it('El Carrito carga', () => {
    cy.get('a[href="/carrito"]').click();
    cy.contains('No tienes ningun producto');
  });

  it('Productos carga', () => {
    cy.get('a[href="/productos"]').click();
    cy.contains('Productos Destacados');
  });

  it('El logo redirecciona a home', () => {
    cy.contains('eCeiba').click();
    cy.contains('Nuestros servicios');
  });

  it('El botón agrega un producto desde la pagina del producto', () => {
    cy.contains('Nuestros productos').click();
    cy.contains('Ver Bonsai').click();
    cy.contains('Añadir al Carrito').click();
    cy.contains('#cart-total', '1');
  });

  it('El botón elimina el producto del carrito', () => {
    cy.contains('Nuestros productos').click();
    cy.contains('Ver Bonsai').click();
    cy.contains('Añadir al Carrito').click();
    cy.get('a[href="/carrito"]').click();
    cy.get('#delete-button').click();
    cy.contains('#cart-total', '0');
  });

  it('Pasa a la pagina de checkout', () => {
    cy.contains('Nuestros productos').click();
    cy.contains('Ver Bonsai').click();
    cy.contains('Añadir al Carrito').click();
    cy.get('a[href="/carrito"]').click();
    cy.contains('Realizar pedido').click();
    cy.contains('Confirmar');
  });

  it('Recibe el pedido', () => {
    cy.contains('Nuestros productos').click();
    cy.contains('Ver Bonsai').click();
    cy.contains('Añadir al Carrito').click();
    cy.get('a[href="/carrito"]').click();
    cy.contains('Realizar pedido').click();
    cy.contains('Confirmar');
    cy.get('input[placeholder="nombre"]').type('Alfonso');
    cy.get('input[placeholder="apellido"]').type('El Gato');
    cy.get('input[placeholder="email"]').type('alfonso@gmail.com');
    cy.get('input[placeholder="direccion"]').type('La casa de la esquina');
    cy.get('input[type="date"]').type('2022-01-07');
    cy.contains('148000');
    cy.contains('Confirmar').click();
  });
});
