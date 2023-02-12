import { decodeToken } from "react-jwt";

const checkUser = () => {
  let token;
  try {
    token = localStorage.getItem("token");
    if (token) {
      const decoded = decodeToken(token);
      let exp = new Date(decoded.exp * 1000);
      if (exp < Date.now()) {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        return "expired";
      }
      if (decoded.id !== localStorage.getItem("id")) {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        return "unauthorized";
      }
      return "success";
    }
  } catch (error) {
    localStorage.removeItem("token");
    console.error(error);
    return "error";
  }
  if (!token) {
    return "not exists";
  }
};

export default checkUser;
