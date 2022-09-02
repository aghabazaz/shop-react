import http from "../http-common";
import IProduct from "../types/product.type"
import authHeader from "./auth-header";
class ProductDataService {
  getAll() {
    //return http.get<Array<IProduct>>("/products",{'headers':authHeader()});
    return http.get<Array<IProduct>>("/products");
  }
  getLimit(limit: number) {
    return http.get<IProduct>(`/products`,{ params: { limit: limit} });
  }
  get(id: string) {
    return http.get<IProduct>(`/products/${id}`);
  }
  create(data: IProduct) {
    return http.post<IProduct>("/products", data);
  }
  update(data: IProduct, id: any) {
    return http.put<any>(`/products/${id}`, data);
  }
  delete(id: any) {
    return http.delete<any>(`/products/${id}`);
  }
  deleteAll() {
    return http.delete<any>(`/products`);
  }
  findByLimit(limit: string) {
    return http.get<Array<IProduct>>(`/products?limit=${limit}`);
  }
}
export default new ProductDataService();
