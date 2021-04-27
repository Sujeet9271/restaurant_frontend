import React from "react";
import { Card, Container, Image } from "react-bootstrap";
import { baseURL2 } from "../axios";

const Cards = ({ product }) => {
  return (
    <Container>
      <Card className="my-3 p-3 rounded">
        <div style={{ display: "flex" }}>
          <Image
            style={{ width: "10%", height: "10%" }}
            src={`${baseURL2}${product.image}`}
            thumbnail
          />
          <Card.Body>
            <Card.Title>
              <div style={{ display: "flex", marginBottom: "2%" }}>
                {product.itemname}
              </div>
            </Card.Title>
            <Card.Text>
              <div style={{ display: "flex", marginBottom: "2%" }}>
                <h5 className="card-text" style={{ marginLeft: "10px" }}>
                  Category:
                </h5>{" "}
                <h6 className="mt-1 ml-1">{product.category_name}</h6>
              </div>
              <div style={{ display: "flex", marginBottom: "2%" }}>
                <h5 className="card-text" style={{ marginLeft: "10px" }}>
                  Sub Category:
                </h5>
                <h6 className="mt-1 ml-1">
                  <i>{product.subcategory_name}</i>
                </h6>
              </div>
              <div style={{ display: "flex", marginBottom: "2%" }}>
                <h5 className="card-text" style={{ marginLeft: "10px" }}>
                  Price:
                </h5>{" "}
                <h6 className="mt-1 ml-1">Rs.{product.price}</h6>
              </div>
              <div style={{ display: "flex", marginBottom: "2%" }}>
                <h5 className="card-text" style={{ marginLeft: "10px" }}>
                  Description:
                </h5>
                <h6 className="mt-1 ml-1">
                  <i>{product.description}</i>
                </h6>
              </div>
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </Container>
  );
};

export default Cards;
