import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Product({ product }) {
  return (
    <>
      <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
        <Card className="my-3 p-3">
          <Card.Img src={product.image} variant="top" />
          <Card.Body>
            <Card.Title>
              <strong>{product.name}</strong>
            </Card.Title>
            <Card.Text>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </Card.Text>
            <Card.Text as="h3">£{product.price}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}

export default Product;
