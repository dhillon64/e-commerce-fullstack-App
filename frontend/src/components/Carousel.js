import React, { useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTopProducts } from "../actions";
import Loader from "./Loader";

function CarouselProducts() {
  const dispatch = useDispatch();

  const topProducts = useSelector((state) => state.topProducts);
  const { products } = topProducts;

  useEffect(() => {
    dispatch(getTopProducts());
  }, [dispatch]);

  return !products ? (
    <Loader />
  ) : (
    <Carousel pause="hover" className="bg-light">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image fluid src={product.image} alt={product.name} />
            <Carousel.Caption style={{ color: "black" }}>
              <h3>
                {product.name} £{product.price}
              </h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselProducts;
