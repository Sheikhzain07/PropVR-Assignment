import { toast } from "react-toastify";

export const showAlert = (message) => {
  toast(message, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export const checkRated = (arr, id) => {
  if (!arr) {
    return false;
  }
  let found = false;
  arr.forEach((ele) => {
    if (ele.movieId == id) {
      found = true;
      return;
    }
  });
  return found;
};
