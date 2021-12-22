export function saveUserData(data) {
  sessionStorage.setItem('email', data.email);
  sessionStorage.setItem('authToken', data.accessToken);
  sessionStorage.setItem('id', data._id);

  return {
    'id': data._id,
    'email': data.email,
    'authToken': data.accessToken,
  }
}

export function removeUserData() {
  sessionStorage.removeItem('email');
  sessionStorage.removeItem('authToken');
  sessionStorage.removeItem('id');
}
/* 
function isAuthenticated() {
  return Boolean(sessionStorage.getItem('email'));
} */