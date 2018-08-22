const getMovies = () => {
  fetch('http://www.omdbapi.com/?apikey=a6cb657c&t=crown')
    .then(res => res.json())
    .then((data) => {
      console.log(data);
    })
}
window.onload = getMovies;