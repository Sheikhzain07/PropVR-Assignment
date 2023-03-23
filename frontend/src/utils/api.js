// const apiURL = process.env.REACT_APP_API_URL;
const apiURL = "https://propvr-assignment-production.up.railway.app/";

export const getMovies = async () => {
  try {
    const response = await fetch(apiURL + "movies");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
export const signUpAPI = async (body) => {
  try {
    const response = await fetch(apiURL + "users/signup", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const loginAPI = async (body) => {
  try {
    const response = await fetch(apiURL + "users/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const movieRating = async (body, userId) => {
  try {
    const response = await fetch(apiURL + `users/ratings/${userId}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteRating = async (body, userId) => {
  try {
    const response = await fetch(apiURL + `users/ratings/${userId}`, {
      method: "DELETE",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
