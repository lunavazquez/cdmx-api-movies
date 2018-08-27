if (!localStorage.hasOwnProperty('session') && location.pathname.indexOf('login') < 0) {
  location.href = './login.html';
}

const getMovies = (search) => {
  return fetch(`https://www.omdbapi.com/?apikey=a6cb657c&s=${search}`)
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

document.getElementById('signOut').addEventListener('click', () => {
  localStorage.removeItem('session');
  return firebase.auth().signOut().then(function () {
    return location.href = 'login.html';
  }).catch(function (error) {
    alert('Ocurrió un error al cerrar sesión.')
    return console.error(error);
  });
});

// Función que regresa las peliculas
renderCards = (movies) => {
  return movies.map((movie) => {
    return (
      `<div class="col-sm-2">
        <div class="card movie">
          <img class="card-img-top" src="${movie.Poster}" alt="Card image cap" onerror="loadimgonfail(event)"/>
          <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <a href="#" class="btn btn-primary btn-movie" data-toggle="modal" data-target=".bd-example-modal-lg" onclick="openModal('${movie.imdbID}')">Go to the Movie</a>
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

const openModal = (imdbID) => {
  // aqui poner fetch igula que postman
  return fetch(`https://www.omdbapi.com/?apikey=a6cb657c&i=${imdbID}`)
    .then(response => response.json())
    .then((movie) => {
      console.log(movie);
      document.getElementById('modal-dialog').innerHTML = (`
          <div class="modal-content ">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">${movie.Title}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
              <div class="row">
                <div class="modal-body col-md-6">
                  <img class="card-img-top modal-poster" src="${movie.Poster}" alt="Card image cap" onerror="loadimgonfail(event)"/>
                </div>
                <div class="modal-body col-md-6">
                  <p class="movie-parrafo">Año: </p><p>${movie.Year}</p>
                  <p class="movie-parrafo">Duración: </p><p>${movie.Runtime}</p>
                  <p class="movie-parrafo">Actores: </p><p>${movie.Actors}</p>
                  <p class="movie-parrafo">Director: </p><p>${movie.Director}</p>
                  <p class="movie-parrafo">Lenguaje: </p><p>${movie.Language}</p>
                  <p class="movie-parrafo">Sinopsis: </p><p>${movie.Plot}</p>
                </div>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-primary">Watch Movie</button>
              </div>
          </div>
      `);
      return true;
    });
};

