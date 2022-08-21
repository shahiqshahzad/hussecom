import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../component/RatingReviews/Rating";
import axios from "axios";
import { productDetail } from "../actions/productDetail";
import { useSelector ,useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";
const ProductScreen = () => {
  const { id } = useParams();
  // const [product, setProduct] = useState({});

  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(productDetail(id))
  },[dispatch])
  const productdata = useSelector(state => state.productDetail)
  const product = productdata.product

  const addedToCartHandler = (id) =>{
dispatch(addToCart(id))
  }

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.screen} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Price : ${product.price}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Description : ${product.description}</h2>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      ${product.countInStock > 0 ? "InStock" : "Out Of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                  onClick={() =>addedToCartHandler(product._id)}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
