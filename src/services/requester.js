async function request(method, url, data) {
  try {
    let response = await fetch(url, getOptions(method, data));

    if (response.ok) {
      try {
        let result = await response.json();
        return result;
      } catch (error) {
        return response;
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}

function getOptions(method, data) {
  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers = {
      'Content-type': 'application/json',
    };
    options.body = JSON.stringify(data);
  }

  return options;
}
const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const update = request.bind(null, 'UPDATE');
const del = request.bind(null, 'DELETE');

export default {
  get,
  post,
  update,
  del,
};
