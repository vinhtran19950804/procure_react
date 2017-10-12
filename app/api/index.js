export function login(data) {
  return fetch('http://localhost:1337/auth/login', {
    method: 'POST',
    body: {
      email: data.username,
      password: data.password,
    },
  });
}

function getSession(sessionID) {
  return fetch(`http://localhost:1337/session/check/${sessionID}`,{
    method: 'POST'
  })
}

export function getCode(sessionID) {
  const code = sessionID;
  return code;
}
