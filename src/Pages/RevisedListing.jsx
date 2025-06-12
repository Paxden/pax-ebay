import React from "react";

// Libraries / Module
import { Form, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function RevisedListing() {
  return (
    <div className="revised-listing">
      <div className="filter d-flex gap-5 align-items-center">
        {/* Category */}
        <Form.Group controlId="categorySelect">
          <Form.Select>
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home & Living</option>
            <option value="toys">Toys</option>
            <option value="beauty">Beauty & Health</option>
            <option value="sports">Sports</option>
          </Form.Select>
        </Form.Group>

        <div className="btn btn-md btn-secondary">Affected Listing</div>
      </div>
      <div className="tabs mt-4 d-flex gap-3 align-items-center">
        <a className="text-secondary" href="#Edit">
          Edit
        </a>
        <a className="text-secondary" href="#preview">
          Preview
        </a>
        <a className="text-secondary" href="#stop-swapping">
          Stop Swapping
        </a>
        <a className="text-secondary" href="#unswapping">
          Unswapping Products
        </a>
      </div>
      {/* Revised Listings */}
      <div className="revised-listing-table text-truncate">
        {" "}
        <Table className="mt-3 " striped bordered hover>
          <thead>
            <tr>
              <th>
                <Form.Check />
              </th>
              <th>Product Name</th>
              <th>SKU</th>
              <th>Item ID</th>
              <th>Sold Quantity</th>
              <th>Lat and Next Revision Time</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Check />
              </td>
              <td>
                {" "}
                <div className="d-flex gap-3 align-items-center">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Product thumbnail"
                    width="40"
                    height="40"
                    className="rounded"
                  />
                  <div>
                    <h6 className="mb-0">Product Name</h6>
                    <small>Description goes here</small>
                  </div>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
              </td>
              <td>WM-230</td>
              <td>548912</td>
              <td>120</td>
              <td>2025-05-01 / 2025-06-01</td>
              <td>Ergonomic mouse with 2.4GHz connectivity</td>
            </tr>
            <tr>
              <td>
                <Form.Check />
              </td>
              <td>
                {" "}
                <div className="d-flex gap-3 align-items-center">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Product thumbnail"
                    width="40"
                    height="40"
                    className="rounded"
                  />
                  <div>
                    <h6 className="mb-0">Product Name</h6>
                    <small>Description goes here</small>
                  </div>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
              </td>
              <td>BS-910</td>
              <td>452167</td>
              <td>85</td>
              <td>2025-04-20 / 2025-05-20</td>
              <td>Portable speaker with HD sound and bass boost</td>
            </tr>
            <tr>
              <td>
                <Form.Check />
              </td>
              <td>
                {" "}
                <div className="d-flex gap-3 align-items-center">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Product thumbnail"
                    width="40"
                    height="40"
                    className="rounded"
                  />
                  <div>
                    <h6 className="mb-0">Product Name</h6>
                    <small>Description goes here</small>
                  </div>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
              </td>
              <td>DL-778</td>
              <td>665432</td>
              <td>47</td>
              <td>2025-04-10 / 2025-05-10</td>
              <td>Adjustable brightness with touch control</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default RevisedListing;
