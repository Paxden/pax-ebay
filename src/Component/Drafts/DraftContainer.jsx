import React from "react";
import { Card, Row, Col, Button, Form, Badge } from "react-bootstrap";

const dummyDrafts = [
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
    image: "https://via.placeholder.com/150",
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
];

function DraftsContainer() {
  return (
    <div className="mt-3 drafts-container">
      {dummyDrafts.map((item) => (
        <Card className="mb-3 shadow-sm" key={item.id}>
          <Card.Body>
            <Row className="align-items-center">
              <Col xd={1}>
                <Form.Check />
              </Col>

              <Col md={9} className="d-flex align-items-center gap-4">
                <img
                  width={"50px"}
                  src={item.image}
                  alt={item.title}
                  className="img-fluid rounded"
                />

                <div>
                  <strong>
                    {item.title}, {item.description}
                  </strong>
                  <div className="text-muted d-flex flex-wrap align-items-center gap-1 gap-md-3">
                    <h6>Destination: <span>Us</span></h6>
                    <h6>Variants: <span>1</span></h6>
                    <h6>Supplier: <span>Amazon</span></h6>
                    <h6>View source product</h6>
                  </div>
                </div>
              </Col>

              <Col md={2} className="text-md-end mt-3 mt-md-0">
                <Button size="sm" variant="outline-secondary" className="me-1">
                  Edit
                </Button>
                <Button size="sm" variant="outline-warning">
                  + Import
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default DraftsContainer;
