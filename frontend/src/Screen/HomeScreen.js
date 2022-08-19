import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../Product/Product.js";
// import products from "../products.js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ListProduct } from "../actions/productAction.js";
const HomeScreen = () => {
  //   const [error, setError] = useState("");

  //   useEffect(() => {
  //     const fetchProducts = async () => {
  //       await axios
  //         .get("/d")
  //         .then((res) => setProducts(res.data))
  //         .catch((err) => {
  //           setError(err.message);
  //         });
  //     };
  //     fetchProducts();
  //   }, []);
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ListProduct);
  }, [dispatch]);
  return (
    <>
      <h1>{error}</h1>
      <Row>
        {/* <div>sdf</div> */}
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
