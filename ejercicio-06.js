// Variable con la lista de la compra
let listaDeLaCompra = ["Leche", "Pan", "Manzanas", "Cebolla", "Arroz"];

// Añadir "Aceite de Girasol" a la lista
listaDeLaCompra.push("Aceite de Girasol");
console.log(listaDeLaCompra); // ["Leche", "Pan", "Manzanas", "Cebolla", "Arroz", "Aceite de Girasol"]

// Eliminar "Aceite de Girasol" de la lista
listaDeLaCompra.splice(listaDeLaCompra.indexOf("Aceite de Girasol"), 1);
console.log(listaDeLaCompra); // ["Leche", "Pan", "Manzanas", "Cebolla", "Arroz"]

// Lista de películas favoritas
let peliculasFavoritas = [
  {
    titulo: "The Shawshank Redemption",
    director: "Frank Darabont",
    fecha: 1994,
  },
  { titulo: "The Godfather", director: "Francis Ford Coppola", fecha: 1972 },
  {
    titulo: "The Godfather: Part II",
    director: "Francis Ford Coppola",
    fecha: 1974,
  },
];

// Películas posteriores a 1 de enero de 2010
let peliculasPosteriores2010 = peliculasFavoritas.filter(
  (pelicula) => pelicula.fecha > 2010
);
console.log(peliculasPosteriores2010); // [] (no hay películas posteriores a 2010 en la lista)

// Lista de directores de la lista original de películas
let directores = peliculasFavoritas.map((pelicula) => pelicula.director);
console.log(directores); // ["Frank Darabont", "Francis Ford Coppola", "Francis Ford Coppola"]

// Lista de títulos de la lista original de películas
let titulos = peliculasFavoritas.map((pelicula) => pelicula.titulo);
console.log(titulos); // ["The Shawshank Redemption", "The Godfather", "The Godfather: Part II"]

// Concatenar lista de directores y lista de títulos (utilizando concat)
let directoresYTitulos = directores.concat(titulos);
console.log(directoresYTitulos); // ["Frank Darabont", "Francis Ford Coppola", "Francis Ford Coppola", "The Shawshank Redemption", "The Godfather", "The Godfather: Part II"]

// Concatenar lista de directores y lista de títulos (utilizando el factor de propagación)
let directoresYTitulos2 = [...directores, ...titulos];
console.log(directoresYTitulos2); // ["Frank Darabont", "Francis Ford Coppola", "Francis Ford Coppola", "The Shawshank Redemption", "The Godfather",
