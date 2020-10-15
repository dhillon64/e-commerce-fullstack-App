import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../actions";
import Loader from "../components/Loader";
import CarouselProducts from "../components/Carousel";

function HomeScreen() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsList.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      <CarouselProducts />
      {products.length === 0 ? (
        <Loader />
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default HomeScreen;
