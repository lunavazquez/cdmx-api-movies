const getMovies = (search) => {
  return fetch(`http://www.omdbapi.com/?apikey=a6cb657c&s=${search}`)
    .then(response => response.json());
};
// TODO: al terminar esta iteracion hacer un git tag
// investigar git checkout - regresar al pasado en el codigo y hacer un tag

// TODO: explicar por que se hizo esta app y los retos que se encontraron ; tecnicamente y mercadotecnicamente

// TODO: afregar un proceso de instalacion

// Primer botón
document.getElementById('btn-batman').addEventListener('click', () => getMovies('batman').then(data => {
  // Renderizar o pintar en el HTML
  // console.log(data);
  document.getElementById('peliculas').innerHTML = renderCards(data.Search);
}));

// prueba 1
// document.getElementById('btn-batman').addEventListener('click', getMovies('batman').then(data => {
//   // Renderizar o pintar en el HTML
//   console.log(data);
//   document.getElementById('peliculas').innerHTML = data.Search[0].Title;
// }));

// Segundo botón

document.getElementById('btn-spiderman').addEventListener('click', () => getMovies('spiderman').then(data => {
  // Renderizar o pintar en el HTML
  // console.log(data);
  document.getElementById('peliculas').innerHTML = renderCards(data.Search);
}));

// Tercer botón

document.getElementById('btn-crow').addEventListener('click', () => getMovies('crow').then(data => {
  // Renderizar o pintar en el HTML
  // console.log(data);
  document.getElementById('peliculas').innerHTML = renderCards(data.Search);
}));

// Cuarto botón

document.getElementById('btn-wonderwoman').addEventListener('click', () => getMovies('superman').then(data => {
  // Renderizar o pintar en el HTML
  // console.log(data);
  document.getElementById('peliculas').innerHTML = renderCards(data.Search);
}));

// Función que regresa las peliculas
renderCards = (movies) => {
  return movies.map((movie) => {
    return (
      `<div class="col-sm-3">
        <div class="card movie">
          <img class="card-img-top" src="${movie.Poster}" alt="Card image cap" onerror="loadimgonfail(event)"/>
          <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <a href="#" class="btn btn-primary btn-movie">Go to the Movie</a>
          </div>
          </div>
      </div>`
    );

    // `<img class="card-img-top" src="${movie.Poster}" alt="Card image cap" onerror="loadimgonfail(event)">
    {/* <div class="card-body ">
        <p class="card-text">${movie.Title}</p>
      </div>`; */}

  }).join('');
};

const loadimgonfail = (event) => {
  console.log('No hay imagen');
  return event.target.src = '../img/camara.jpg';
};
