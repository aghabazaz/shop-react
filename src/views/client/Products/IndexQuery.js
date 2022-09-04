import Layout from "../../../components/layout/layout";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import ProductDataService from "../../../services/products.service";
import Product from "../../../components/views/products/ProductComponent";
import Loading from "../../../components/default/Loading";

const Index = () => {
  const [count, setCount] = useState(5);
 
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const showMore = () => {
    setCount(count + 5);
  };
  return (
    <>
      <Layout>
        <div className="blue_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Featured Products</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="project" className="project">
          <div className="container">
            <div className="row">
              <div className="product_main">
                {products.length >0 ?products.map((item, index) => (
                    <Product product={item} index={index} key={index}/>
                )):<Loading/>}
                { products.length>0 &&
                <div className="col-md-12" >
                  <button className="btn btn-primary read_more" onClick={showMore} disabled={isLoading}>
                    See More
                  </button>
                </div>
}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Index;
