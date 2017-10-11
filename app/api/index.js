export function login(data) {
  return fetch('http://localhost:1337/auth/login', {
    method: 'POST',
    body: {
      email: data.username,
      password: data.password,
    },
  });
}
