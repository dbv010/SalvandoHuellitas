import caballo1 from '../assets/images/Caballo/Ampicilina-Caballo.JPG';
import caballo2 from '../assets/images/Caballo/Ceftiofur-Caballo.png';
import caballo3 from '../assets/images/Caballo/Diripona-Caballo.jpg';
import caballo4 from '../assets/images/Caballo/Firocoxib-Caballo.jpg';
import caballo5 from '../assets/images/Caballo/Ivermectina-Caballo.png';
import caballo6 from '../assets/images/Caballo/Ketamina-Caballo.png';
import caballo7 from '../assets/images/Caballo/Ketosan-Caballo.Jpg';
import caballo8 from '../assets/images/Caballo/NeosinT-Caballo.JPG';
import caballo9 from '../assets/images/Caballo/Xilazina-Caballo.JPG';
import caballo10 from '../assets/images/Caballo/Cloranfivet-Caballo.JPG';

import perro1 from '../assets/images/Perro/Cama-Perro.jpg';
import perro2 from '../assets/images/Perro/Comedero-Perro.jpg';
import perro3 from '../assets/images/Perro/Arnes-Perro.jpg';
import perro4 from '../assets/images/Perro/Bebedero-Perro.jpg';
import perro5 from '../assets/images/Perro/Bolsas-Perro.jpg';
import perro6 from '../assets/images/Perro/Cepillo-Pero.jpg';
import perro7 from '../assets/images/Perro/Correa-Perro.jpg';
import perro8 from '../assets/images/Perro/Corta pelos-Perro.jpg';
import perro9 from '../assets/images/Perro/Identificacion-Perro.jpg';
import perro10 from '../assets/images/Perro/Juguete molar-Perro.jpg';

import gato1 from '../assets/images/Gato/Cama-Gato.jpg';
import gato2 from '../assets/images/Gato/Cepillo-Gato.jpg';
import gato3 from '../assets/images/Gato/Rascador-Gato.jpg';
import gato4 from '../assets/images/Gato/Arenero-Gato.jpg';
import gato5 from '../assets/images/Gato/Bebedero-Gato.jpg';
import gato6 from '../assets/images/Gato/Comedero-Gato.jpg';
import gato7 from '../assets/images/Gato/Corta uñas-Gato.jpg';
import gato8 from '../assets/images/Gato/Peluza-Gato.jpg';
import gato9 from '../assets/images/Gato/Pez arrugado-Gato.jpg';
import gato10 from '../assets/images/Gato/Transportin-Gato.jpg';
// Nuestra base de datos ahora tiene más productos y un campo de "description".
export const allProducts = [
    // --- 10 Productos de Mujer ---
    { id: 101, name: 'Body Básico Gris', category: 'Medicinas', subCategory: 'Bodies', color: 'Gris', price: 99.00, imageUrl: caballo1, description: 'Confeccionado en algodón pima para una suavidad inigualable.' },
    { id: 102, name: 'Camiseta Gráfica "Nature"', category: 'Medicinas', subCategory: 'Camisetas', color: 'Negro', price: 75.00, imageUrl: caballo2, description: 'Estampado ecológico sobre tejido orgánico.' },
    { id: 103, name: 'Crop Top Blanco', category: 'Medicinas', subCategory: 'Tops', color: 'Blanco', price: 79.00, imageUrl: caballo3, description: 'El básico perfecto para cualquier look de verano.' },
    { id: 104, name: 'Joggers Negros', category: 'Medicinas', subCategory: 'Pantalones', color: 'Negro', price: 159.00, imageUrl: caballo4, description: 'Comodidad y estilo para tu día a día.' },
    { id: 105, name: 'Vestido Floral', category: 'Medicinas', subCategory: 'Vestidos', color: 'Multicolor', price: 189.00, imageUrl: caballo5, description: 'Silueta fluida y estampado vibrante.' },
    { id: 106, name: 'Falda-Short Crema', category: 'Medicinas', subCategory: 'Faldas', color: 'Blanco', price: 119.00, imageUrl: caballo6, description: 'La versatilidad de una falda, la comodidad de un short.' },
    { id: 107, name: 'Blusa de Seda', category: 'Medicinas', subCategory: 'Camisas', color: 'Rosa', price: 165.00, imageUrl: caballo7, description: 'Elegancia y sofisticación en una sola prenda.' },
    { id: 108, name: 'Jeans Mom Fit', category: 'Medicinas', subCategory: 'Pantalones', color: 'Azul', price: 199.00, imageUrl: caballo8, description: 'Corte retro que nunca pasa de moda.' },
    { id: 109, name: 'Top Deportivo', category: 'Medicinas', subCategory: 'Tops', color: 'Negro', price: 89.00, imageUrl: caballo9, description: 'Soporte y estilo para tus entrenamientos.' },
    { id: 110, name: 'Short de Lino', category: 'Medicinas', subCategory: 'Shorts', color: 'Blanco', price: 95.00, imageUrl: caballo10, description: 'Frescura y comodidad para los días más cálidos.' },

    // --- 10 Productos de Hombre ---
    { id: 201, name: 'Polo Clásico Marino', category: 'Animales', subCategory: 'Polos', color: 'Azul', price: 85.00, imageUrl: perro1, description: 'Un clásico atemporal en piqué de algodón.' },
    { id: 202, name: 'Jeans Slim Fit', category: 'Animales', subCategory: 'Pantalones', color: 'Azul', price: 179.00, imageUrl: perro2, description: 'Corte moderno que se adapta a tu silueta.' },
    { id: 203, name: 'Camisa Lino Blanca', category: 'Animales', subCategory: 'Camisas', color: 'Blanco', price: 110.00, imageUrl: perro3, description: 'Ligera y transpirable, ideal para el clima cálido.' },
    { id: 204, name: 'Sudadera Urbana Gris', category: 'Animales', subCategory: 'Buzos', color: 'Gris', price: 140.00, imageUrl: perro4, description: 'Algodón perchado para máxima comodidad.' },
    { id: 205, name: 'Bermuda Cargo', category: 'Animales', subCategory: 'Shorts', color: 'Verde', price: 125.00, imageUrl: perro5, description: 'Diseño funcional con múltiples bolsillos.' },
    { id: 206, name: 'Camiseta Básica Negra', category: 'Animales', subCategory: 'Camisetas', color: 'Negro', price: 55.00, imageUrl: perro6, description: 'El esencial que no puede faltar en tu armario.' },
    { id: 207, name: 'Chaqueta Rompevientos', category: 'Animales', subCategory: 'Chaquetas', color: 'Negro', price: 195.00, imageUrl: perro7, description: 'Protección ligera contra el viento y la lluvia.' },
    { id: 208, name: 'Pantalón Chino Beige', category: 'Animales', subCategory: 'Pantalones', color: 'Blanco', price: 160.00, imageUrl: perro8, description: 'Versatilidad y elegancia para cualquier ocasión.' },
    { id: 209, name: 'Camisa de Rayas', category: 'Animales', subCategory: 'Camisas', color: 'Azul', price: 115.00, imageUrl: perro9, description: 'Estilo clásico con un toque moderno.' },
    { id: 210, name: 'Buzo con Capucha', category: 'Animales', subCategory: 'Buzos', color: 'Negro', price: 150.00, imageUrl: perro10, description: 'Comodidad y calidez para los días fríos.' },
    { id: 211, name: 'Buzo con Capucha', category: 'Animales', subCategory: 'Buzos', color: 'Negro', price: 150.00, imageUrl: gato1, description: 'Comodidad y calidez para los días fríos.' },
    { id: 212, name: 'Buzo con Capucha', category: 'Animales', subCategory: 'Buzos', color: 'Negro', price: 150.00, imageUrl: gato2, description: 'Comodidad y calidez para los días fríos.' },
    { id: 213, name: 'Buzo con Capucha', category: 'Animales', subCategory: 'Buzos', color: 'Negro', price: 150.00, imageUrl: gato3, description: 'Comodidad y calidez para los días fríos.' },
    { id: 214, name: 'Buzo con Capucha', category: 'Animales', subCategory: 'Buzos', color: 'Negro', price: 150.00, imageUrl: gato4, description: 'Comodidad y calidez para los días fríos.' },
    { id: 215, name: 'Buzo con Capucha', category: 'Animales', subCategory: 'Buzos', color: 'Negro', price: 150.00, imageUrl: gato5, description: 'Comodidad y calidez para los días fríos.' },
    { id: 216, name: 'Buzo con Capucha', category: 'Animales', subCategory: 'Buzos', color: 'Negro', price: 150.00, imageUrl: gato6, description: 'Comodidad y calidez para los días fríos.' },
    { id: 217, name: 'Buzo con Capucha', category: 'Animales', subCategory: 'Buzos', color: 'Negro', price: 150.00, imageUrl: gato7, description: 'Comodidad y calidez para los días fríos.' },
    { id: 218, name: 'Buzo con Capucha', category: 'Animales', subCategory: 'Buzos', color: 'Negro', price: 150.00, imageUrl: gato8, description: 'Comodidad y calidez para los días fríos.' },
    { id: 219, name: 'Buzo con Capucha', category: 'Animales', subCategory: 'Buzos', color: 'Negro', price: 150.00, imageUrl: gato9, description: 'Comodidad y calidez para los días fríos.' },
    { id: 220, name: 'Buzo con Capucha', category: 'Animales', subCategory: 'Buzos', color: 'Negro', price: 150.00, imageUrl: gato10, description: 'Comodidad y calidez para los días fríos.' },
 
];
                        