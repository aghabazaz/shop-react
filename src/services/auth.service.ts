import http from "../http-common";
import Login from "../types/login.type"
class AuthDataService {
  login(data: Login) {
    console.log('data',data)
    return http.post("/auth/login",data);
  }
  
}
export default new AuthDataService();
