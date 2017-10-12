const API_ROOT = 'http://localhost:1337';

export function login(data) {
  return fetch(`${API_ROOT}/auth/login`, {
    method: 'POST',
    body: {
      email: data.username,
      password: data.password,
    },
  });
}

export function checkSession(sessionID) {
  return fetch(`${API_ROOT}/session/check`,{
    method: 'POST',
    body: JSON.stringify ({
      sessionId: sessionID
    })
  })
  .then(response => response.json())
  .then(responseJson => {return responseJson})
  .catch(error => { console.error(error) })
}

export function authLogin(data) {
  return fetch(`${API_ROOT}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({
      email: data.email,
      password: data.password
    })
    .then(response => response.json())
    .then(responseJson => responseJson)
    .catch(error => {console(error)})
  })
}
