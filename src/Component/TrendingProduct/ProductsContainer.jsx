import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

const productsData = [
  // Add as many products as you want
  {
    id: 1,
    title: "Wireless Mouse",
    description: "A nice wireless mouse",
    price: 100.09,
    shipping: "19 Business days",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQR1rqXe1yLkuTnhA9hyjXql0Qayg4LxloscbOEGb8SuRVYHuUdppZSWHcLdBXpx1qg_4&usqp=CAU",
  },
  {
    id: 2,
    title: "Laptop Stand",
    description: "Ergonomic laptop stand",
    price: 79.99,
    shipping: "12 Business days",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsSgMAtDi9XtNJxlbqapwoYDybd7BHT8ui3A&s",
  },
  {
    id: 3,
    title: "Bluetooth Headphones",
    description: "Over-ear wireless headphones",
    price: 149.99,
    shipping: "14 Business days",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2AfN2_50QrRQ6p-tMVzjgody1aAFBZu7Qw&s",
  },
  {
    id: 4,
    title: "USB-C Hub",
    description: "Multi-port adapter",
    price: 49.99,
    shipping: "7 Business days",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 5,
    title: "Notebook Cooler",
    description: "Cooling pad for laptops",
    price: 39.95,
    shipping: "8 Business days",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "Wireless Charger",
    description: "Fast charging pad",
    price: 25.99,
    shipping: "5 Business days",
    image: "https://via.placeholder.com/150",
  },
  // Add more...
];

function ProductsContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = productsData.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(productsData.length / productsPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="products-container mt-3">
      <Row className=" gap-3 justify-content-center">
        {currentProducts.map((product) => (
          <Col xs={12} sm={6} md={4} lg={3}
            key={product.id}
            className="product p-3 shadow bg-light rounded-3"
            style={{ width: "250px" }}
          >
            <div className="img d-flex justify-content-center">
              <img
                width={"150px"}
                className="mx-auto"
                src={product.image}
                alt=""
              />
            </div>
            <div className="product-content mt-2">
              <div className="d-flex gap-3 align-items-center justify-content-between">
                <h5>{product.title}</h5>
                <h3>${product.price}</h3>
              </div>
              <p>{product.description}</p>
              <small>Shipping Time: {product.shipping}</small>
              <div className="d-flex justify-content-center mt-3">
                <div className="btn  btn-sm btn-outline-warning ">
                  Save to draft
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center gap-2 mt-4">
        <Button
          onClick={handlePrev}
          disabled={currentPage === 1}
          variant="outline-secondary"
          size="sm"
        >
          Prev
        </Button>
        <span className="align-self-center">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          variant="outline-secondary"
          size="sm"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default ProductsContainer;
