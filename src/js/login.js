const login = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
    localStorage.setItem('session', JSON.stringify(response));
    return location.href = '/';
  }).catch((error) => {
    alert('Email o contraseña inváldos.');
    return console.error(error);
  });
};

const loginGoogle = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider).then((response) => {
    localStorage.setItem('session', JSON.stringify(response));
    return location.href = '/';
  }).catch((error) => {
    alert('Email o contraseña inváldos.');
    return console.error(error);
  });
};

document.getElementById('loginForm').addEventListener('submit', (event) => {
  event.preventDefault();
  event.stopPropagation();

  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;

  return login(email, password);
});

document.getElementById('loginGoogle').addEventListener('click', loginGoogle);
