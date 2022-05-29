export const login = (user_name, password) => {
  return new Promise((resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      user_name,
      password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8081/users/login", requestOptions)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject("error", error));
  });
};
export const signup = (user_name, full_name, password) => {
  return new Promise((resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      user_name,
      password,
      full_name,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8082/users/register", requestOptions)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};
