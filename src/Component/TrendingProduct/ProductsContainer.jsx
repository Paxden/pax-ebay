import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Row,
  Spinner,
  Alert,
  Form,
  Container,
} from "react-bootstrap";
import axios from "axios";

function ProductsContainer() {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [draftStatus, setDraftStatus] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [platform, setPlatform] = useState("");
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");
  const productsPerPage = 4;

  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);
      setError("");
      console.log("Fetching listings...");
      try {
        const res = await axios.get("https://autosync.site/api/listings", {
          headers: { Authorization: `Bearer ${token}` },
          params: { platform, status, search },
        });
        console.log("Listings fetched", res.data.data.listings.length);
        setListings(res.data.data.listings);
        setFilteredListings(res.data.data.listings);
      } catch (e) {
        console.error("Fetch error", e.response?.data || e.message);
        setError("Failed to load listings.");
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchListings();
    else {
      setError("Not logged in");
      setLoading(false);
    }
  }, [platform, status, token]);

  const totalPages = Math.ceil(filteredListings.length / productsPerPage);
  const indexOfFirst = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredListings.slice(
    indexOfFirst,
    indexOfFirst + productsPerPage
  );

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  const handleSaveDraft = async (listing) => {
    setDraftStatus((s) => ({ ...s, [listing.id]: "loading" }));
    try {
      const check = await axios.post(
        "https://autosync.site/api/listings/check-policy",
        {
          platform: listing.platform,
          title: listing.title,
          description: listing.description,
          category_id: listing.category_id,
          specifics: listing.specifics || {},
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (check.data.data.passed) {
        setDraftStatus((s) => ({ ...s, [listing.id]: "saved" }));
      } else {
        setDraftStatus((s) => ({
          ...s,
          [listing.id]: "violation",
        }));
      }
    } catch {
      setDraftStatus((s) => ({ ...s, [listing.id]: "error" }));
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  if (loading)
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );

  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="mt-3">
      {/* Filters */}
      <Form className="mb-4">
        <Row className="gap-3">
          <Col md={3}>
            <Form.Select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
            >
              <option value="">All Platforms</option>
              <option value="ebay">eBay</option>
              <option value="shopify">Shopify</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="pending">Pending</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Control
              placeholder="Search title..."
              value={search}
              onChange={handleSearchChange}
            />
          </Col>
        </Row>
      </Form>

      <div className="mb-2 text-muted">
        Showing {filteredListings.length} products
      </div>

      {/* Listings */}
      <Row className="gap-3 justify-content-center">
        {currentProducts.map((product) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={product.id}
            className="product p-3 shadow bg-light rounded-3"
            style={{ width: "250px" }}
          >
            <div className="img d-flex justify-content-center">
              <img
                width="150px"
                src={product.images?.[0] || "https://via.placeholder.com/150"}
                alt={product.title}
              />
            </div>
            <div className="product-content mt-2">
              <div className="d-flex gap-3 align-items-center justify-content-between">
                <h5>{product.title}</h5>
                <h6>${product.price}</h6>
              </div>
              <p className="text-truncate">{product.description}</p>
              <small>Qty: {product.quantity}</small>
              <div className="d-flex justify-content-center mt-3">
                <Button
                  variant="outline-warning"
                  size="sm"
                  disabled={draftStatus[product.id] === "loading"}
                  onClick={() => handleSaveDraft(product)}
                >
                  {draftStatus[product.id] === "loading"
                    ? "Checking..."
                    : draftStatus[product.id] === "saved"
                    ? "Saved"
                    : draftStatus[product.id] === "violation"
                    ? "Policy Violation"
                    : "Save to draft"}
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
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
    </Container>
  );
}

export default ProductsContainer;
