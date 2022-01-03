import { EstadoProducto } from 'app/core/redux/modelo/EstadoProducto';
import { Producto } from 'app/feature/Producto/models/Producto';
import { agregarNuevoProducto } from 'app/core/redux/acciones/productos/ProductosAcciones';
import reductorProductos from './productosReductor';

describe('Reductor productos', () => {
  it('debería agregar productos', () => {
    // Arrange
    const estadoInicial: EstadoProducto = {
      productos: [],
      carrito: [],
      currentItem: {
        id: 0,
        title: '',
        description: '',
        price: 0,
        image: '',
        qty: 0,
        species: '',
      },
    };
    const nuevoProducto: Producto = {
      id: 1,
      title: 'PREMNA 6 AÑOS',
      description:
        'Esta especie es muy apetecida en el bonsai, usada en muchas partes del mundo es un árbol de mediana altura, de madera muy densa y de gran manipulación de sus ramas. Es un árbol de exterior, requiriendo grandes cantidades de radiación solar. Igualmente el agua es muy importante en esta especie. ',
      price: 140000,
      image:
        'https://casadelbonsai.com/wp-content/uploads/2021/05/casadelbonsai_PRENMA_-250x250.jpg',
      qty: 0,
      species: 'arbolito de navidad',
    };
    const estadoEsperado: EstadoProducto = {
      ...estadoInicial,
      productos: [nuevoProducto],
    };

    // Act
    const nuevoEstado = reductorProductos(
      estadoInicial,
      agregarNuevoProducto(nuevoProducto)
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });
});
