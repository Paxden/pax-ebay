import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button, Form, Spinner } from "react-bootstrap";
import axios from "axios";

const DraftsContainer = () => {
  const [drafts, setDrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDrafts = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await axios.get(
        "https://api.ebaydropshipping.com/v1/drafts",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDrafts(res.data.data || []); // assuming the API returns { data: [...] }
    } catch (err) {
      console.error("Failed to fetch drafts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrafts();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status" />
        <p>Loading drafts...</p>
      </div>
    );
  }

  return (
    <div className="mt-3 drafts-container">
      {drafts.length === 0 ? (
        <p className="text-center text-muted">No drafts found.</p>
      ) : (
        drafts.map((item) => (
          <Card className="mb-3 shadow-sm" key={item.id}>
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={1}>
                  <Form.Check />
                </Col>

                <Col md={9} className="d-flex align-items-center gap-4">
                  <img
                    width={"50px"}
                    src={item.image || "https://via.placeholder.com/150"}
                    alt={item.title}
                    className="img-fluid rounded"
                  />

                  <div>
                    <strong>
                      {item.title}, {item.description}
                    </strong>
                    <div className="text-muted d-flex flex-wrap align-items-center gap-1 gap-md-3">
                      <h6>
                        Destination: <span>{item.destination || "US"}</span>
                      </h6>
                      <h6>
                        Variants: <span>{item.variants || 1}</span>
                      </h6>
                      <h6>
                        Supplier: <span>{item.supplier || "Amazon"}</span>
                      </h6>
                      <h6 className="text-primary" role="button">
                        View source product
                      </h6>
                    </div>
                  </div>
                </Col>

                <Col md={2} className="text-md-end mt-3 mt-md-0">
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    className="me-1"
                  >
                    Edit
                  </Button>
                  <Button size="sm" variant="outline-warning">
                    + Import
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default DraftsContainer;
