import http from "../http-common";
import Login from "../types/login.type"
class AuthDataService {
  login(data: Login) {
    return http.post("/auth/login",data);
  }
  logout() {
    //return http.post("/auth/logout");
    localStorage.removeItem('user');
  }
}
export default new AuthDataService();
