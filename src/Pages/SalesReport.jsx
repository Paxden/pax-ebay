import React from "react";

import { Form, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faEdit,
  faFontAwesome,
  faInbox,
  faTrashArrowUp,
} from "@fortawesome/free-solid-svg-icons";

function SalesReport() {
  return (
    <div className="sales-report ">
      <div className="head d-flex flex-wrap gap-3 align-items-center justify-content-between">
        <div className="buttons d-flex gap-4 align-items-center">
          <div className="btn btn-md btn-secondary">Sales Report</div>
          <div className="btn btn-md btn-outline-secondary">Error Log</div>
          <div className="btn btn-md btn-outline-secondary">Balance Sheet</div>
        </div>
        <div className="download d-flex gap-3 align-items-center">
          <div className="btn btn-sm text-truncate btn-warning">Manual Control</div>
          <div className="btn btn-sm text-truncate btn-info">Update Control</div>
          <div className="btn btn-sm btn-secondary">Customize</div>
          <div className="btn btn-sm btn-success">Download</div>
        </div>
      </div>

      <div className="filters d-flex align-items-center gap-4 mt-4">
        {/* Category */}
        <Form.Group controlId="categorySelect">
          <Form.Select>
            <option value="">Platform</option>
            <option value="electronics">Amazon</option>
            <option value="fashion">Ebay</option>
            <option value="home">Tiktok</option>
          </Form.Select>
        </Form.Group>

        {/* Category */}
        <Form.Group controlId="categorySelect">
          <Form.Select>
            <option value="">Period</option>
            <option value="electronics">Early Year</option>
            <option value="fashion">Mid Year</option>
            <option value="home">Endy Year</option>
          </Form.Select>
        </Form.Group>

        {/* Category */}
        <Form.Group controlId="categorySelect">
          <Form.Select>
            <option value="">Status</option>
            <option value="electronics">Active</option>
            <option value="fashion">Pending</option>
            <option value="home">Error</option>
          </Form.Select>
        </Form.Group>

        <div className="btn btn-primary">Archive</div>
      </div>

      <div className="bulk my-3 d-flex gap-3">
        <div className="btn btn-sm d-flex gap-2 align-items-center btn-outline-secondary">
          <FontAwesomeIcon icon={faEdit} />
          Edit
        </div>
        <div className="btn btn-sm d-flex gap-2 align-items-center btn-outline-secondary">
          <FontAwesomeIcon icon={faTrashArrowUp} />
          Remove
        </div>
        <div className="btn btn-sm d-flex gap-2 align-items-center btn-outline-secondary">
          <FontAwesomeIcon icon={faFontAwesome} />
          Flag
        </div>
        <div className="btn btn-sm d-flex gap-2 align-items-center btn-outline-secondary">
          <FontAwesomeIcon icon={faArchive} />
          Archive
        </div>
        <div className="btn btn-sm d-flex gap-2 align-items-center btn-outline-secondary">
          <FontAwesomeIcon icon={faInbox} />
          Override
        </div>
      </div>

      <div className="revised-listing-table text-truncate">
        {" "}
        <Table className="text-center" striped bordered hover>
          <thead>
            <tr>
              <th>
                <Form.Check />
              </th>
              <th>Product Name</th>
              <th>Order Status</th>
              <th>Item Id</th>
              <th>Item Link</th>
              <th>Price</th>
              <th>Fee /Tax</th>
              <th>Profit</th>
              <th>Store</th>
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
                </div>
              </td>
              <td>
                <div className="text-bg-success text-center">Shipped</div>
              </td>
              <td>123456789</td>
              <td>
                <a
                  href="https://example.com/product/123456789"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Item
                </a>
              </td>
              <td>$29.99</td>
              <td>$3.45</td>
              <td>$5.50</td>
              <td>eBay</td>
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
                </div>
              </td>
              <td>
                <div className="text-bg-warning text-center">Processing</div>
              </td>
              <td>987654321</td>
              <td>
                <a
                  href="https://example.com/product/987654321"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Item
                </a>
              </td>
              <td>$12.99</td>
              <td>$1.25</td>
              <td>$2.00</td>
              <td>Amazon</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default SalesReport;
