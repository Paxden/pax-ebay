import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RevisedListing() {
  const [revisedListings, setRevisedListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("https://api.ebaydropshipping.com/v1/listings/revised", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setRevisedListings(res.data.data || []);
      })
      .catch((err) => {
        console.error("Error fetching revised listings", err);
      });
  }, []);

  // Filter listings based on selected category
  useEffect(() => {
    if (categoryFilter) {
      const filtered = revisedListings.filter(
        (item) => item.category?.toLowerCase() === categoryFilter
      );
      setFilteredListings(filtered);
    } else {
      setFilteredListings(revisedListings);
    }
  }, [categoryFilter, revisedListings]);

  // Mocked Action Handlers
  const handleEdit = (item) => {
    console.log("Edit clicked for:", item);
    alert(`Editing: ${item.title}`);
  };

  const handleSwap = (item) => {
    console.log("Swapping:", item);
    alert(`Swapping product: ${item.title}`);
  };

  const handleUnswap = (item) => {
    console.log("Unswapping:", item);
    alert(`Unswapping product: ${item.title}`);
  };

  return (
    <div className="revised-listing">
      {/* Category Filter */}
      <div className="filter d-flex gap-5 align-items-center">
        <Form.Group controlId="categorySelect">
          <Form.Select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home & Living</option>
            <option value="toys">Toys</option>
            <option value="beauty">Beauty & Health</option>
            <option value="sports">Sports</option>
          </Form.Select>
        </Form.Group>

        <Button variant="secondary">Affected Listing</Button>
      </div>

      {/* Tabs */}
      <div className="tabs mt-4 d-flex gap-3 align-items-center">
        <Button size="sm" onClick={() => alert("Edit tab clicked")}>
          Edit
        </Button>
        <Button size="sm" onClick={() => alert("Preview tab clicked")}>
          Preview
        </Button>
        <Button size="sm" onClick={() => alert("Stop Swapping clicked")}>
          Stop Swapping
        </Button>
        <Button size="sm" onClick={() => alert("Unswapping clicked")}>
          Unswapping Products
        </Button>
      </div>

      {/* Table */}
      <div className="revised-listing-table text-truncate">
        <Table className="mt-3" striped bordered hover responsive>
          <thead>
            <tr>
              <th>
                <Form.Check />
              </th>
              <th>Product Name</th>
              <th>SKU</th>
              <th>Item ID</th>
              <th>Sold Quantity</th>
              <th>Last / Next Revision</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredListings.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center">
                  No revised listings found.
                </td>
              </tr>
            ) : (
              filteredListings.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Form.Check />
                  </td>
                  <td>
                    <div className="d-flex gap-3 align-items-center">
                      <img
                        src={item.thumbnail || "https://via.placeholder.com/40"}
                        alt="Product thumbnail"
                        width="40"
                        height="40"
                        className="rounded"
                      />
                      <div>
                        <h6 className="mb-0">{item.title}</h6>
                        <small>{item.description}</small>
                      </div>
                    </div>
                  </td>
                  <td>{item.sku}</td>
                  <td>{item.item_id}</td>
                  <td>{item.sold_quantity}</td>
                  <td>
                    {item.last_revision} / {item.next_revision}
                  </td>
                  <td>{item.description}</td>
                  <td>
                    <div className="d-flex gap-2 flex-wrap">
                      <Button
                        size="sm"
                        variant="outline-primary"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline-success"
                        onClick={() => handleSwap(item)}
                      >
                        Swap
                      </Button>
                      <Button
                        size="sm"
                        variant="outline-danger"
                        onClick={() => handleUnswap(item)}
                      >
                        Unswap
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default RevisedListing;
