import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductDataService from "../../../services/products.service";
import Product from "../../../types/product.type";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteSweep } from "react-icons/md";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import Loading from "../../../components/default/Loading";
import {useAllProducts} from "../../../hooks/products.query"
const List = () => {
  const navigate=useNavigate();
  const {data,isLoading}=useAllProducts()
  const renderList: JSX.Element | JSX.Element[] | undefined = data && data.map((product:any) => (
    <tr key={product.id}>
      <td> {product.id}</td>
      <td>{product.title}</td>
      <td>$ {product.price} </td>
      <td>{product.category}</td>
      <td>
        <BiEditAlt className="btn btn-primary btn-circle mr-2" size={70} />
        <MdDeleteSweep className="btn btn-danger btn-circle" size={70} />
      </td>
    </tr>
  ));
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container-fluid">
          <div className="card-header py-3">
            <button className="btn btn-primary btn-icon-split" onClick={() => navigate('/admin/products/add')}>
              <span className="icon text-white-50">
                <VscGitPullRequestCreate  />
              </span>
              <span className="text">Create Product</span>
            </button>
          </div>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Products</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                >
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Category</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Id</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Category</th>
                      <th>Actions</th>
                    </tr>
                  </tfoot>
                  <tbody>{renderList}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default List;
