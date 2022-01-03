import { EstadoProducto } from 'app/core/redux/modelo/EstadoProducto';
import { Producto } from 'app/feature/Producto/models/Producto';
import {
  addToCart,
  adjustItemQty,
  loadCurrentItem,
  removeFromCart,
} from 'app/core/redux/acciones/productos/ProductosAcciones';

describe('Reductor productos', () => {
  it('Verifica las acciones', () => {
    const nuevoProducto: Producto = {
      id: 1,
      title: 'PREMNA 6 AÑOS',
      description:
        'Esta especie es muy apetecida en el bonsai, usada en muchas partes del mundo es un árbol de mediana altura, de madera muy densa y de gran manipulación de sus ramas. Es un árbol de exterior, requiriendo grandes cantidades de radiación solar. Igualmente el agua es muy importante en esta especie. ',
      price: 140000,
      image:
        'https://static.wixstatic.com/media/dcb053_54d4f642967740b09a3611287149c19c~mv2.jpg/v1/fill/w_474,h_316,al_c,q_80,usm_0.66_1.00_0.01/dcb053_54d4f642967740b09a3611287149c19c~mv2.webp',
      qty: 0,
      species: 'arbolito de navidad',
      age: 6,
    };

    let nuevoEstado = addToCart(nuevoProducto.id);
    expect(nuevoEstado.type).toBe('AGREGAR_PRODUCTO_AL_CARRO');

    nuevoEstado = removeFromCart(nuevoProducto.id);
    expect(nuevoEstado.type).toBe('BORRAR_PRODUCTO_DEL_CARRO');

    nuevoEstado = adjustItemQty(nuevoProducto.id, 6);
    expect(nuevoEstado.type).toBe('AJUSTAR_CANTIDAD');

    nuevoEstado = loadCurrentItem(nuevoProducto);
    expect(nuevoEstado.type).toBe('CARGAR_PRODUCTO');
  });
});
