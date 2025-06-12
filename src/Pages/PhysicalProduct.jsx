import React from "react";

import { Card, Button } from "react-bootstrap";

function PhysicalProduct() {
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
  return (
    <div className="physical-product">
      <h3>Physical Products</h3>

      <div className="row gap-2">
        {productsData.map((product) => (
          <div className="col-5 col-md-2">
            <Card style={{ height: "18rem" }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Text>{product.description}</Card.Text>
                <h2>${product.price}</h2>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhysicalProduct;
