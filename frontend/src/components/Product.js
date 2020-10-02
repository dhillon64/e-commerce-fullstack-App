import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

function Product({ product }) {
  return (
    <>
      <a style={{ textDecoration: "none" }} href={`/product/${product.id}`}>
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
            <Card.Text as="h3">${product.price}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </>
  );
}

export default Product;
