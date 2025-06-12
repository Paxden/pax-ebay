import React from "react";

// Libraries
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faBarsStaggered,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Orders() {
  return (
    <div className="products orders">
      <div className="filter d-flex mb-3 align-items-center gap-5">
        <div className="add-filter d-flex gap-2 align-items-center btn">
          <FontAwesomeIcon icon={faBarsStaggered} />
          <p>Add Filter</p>
        </div>
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

        {/* Status */}
        {/* Category */}
        <Form.Group controlId="statusSelect">
          <Form.Select>
            <option value="">Filter by status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className="bulk-action d-flex align-items-center gap-3">
        <div className="btn btn-sm">Bulk Edit</div>
        <div className="btn btn-sm">Bulk Relist</div>
        <div className="btn btn-sm">Bulk Delete</div>
      </div>

      {/* Product Monitoring */}
      <div className="products-monitor mt-3">
        <div className="details revised-listing-table border border-3">
          <table className="monitor table-striped text-truncate border table">
            <thead>
              <tr>
                <th>
                  <Form.Check />
                </th>
                <th>Name</th>
                <th className="text-center">Date</th>
                <th className="text-center">Order Status</th>
                <th className="text-center">Estimated Arrival</th>
                <th className="text-center"></th>
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
                <td className="text-center">2025-06-03</td>
                <td className="text-center">
                  <div className="text-bg-success">Shipped</div>
                </td>
                <td className="text-center">2025-06-10</td>
                <td className="text-center">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </td>
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
                <td className="text-center">2025-06-02</td>
                <td className="text-center">
                  <div className="text-bg-warning">Processing</div>
                </td>
                <td className="text-center">2025-06-09</td>
                <td className="text-center">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </td>
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
                <td className="text-center">2025-06-01</td>
                <td className="text-center">
                  <div className="text-bg-danger">Cancelled</div>
                </td>
                <td className="text-center">—</td>
                <td className="text-center">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="variations">
          <div className="variation">
            <table className="table table-bordered text-center text-truncate table-striped">
              <thead>
                <tr>
                  <th scope="col">Sourcing Request</th>
                  <th scope="col">Tracking No</th>
                  <th scope="col">Item ID</th>
                  <th scope="col">Buyer Username</th>
                  <th scope="col">QTY</th>
                  <th scope="col">DAS</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Address</th>
                  <th scope="col">Store</th>
                  <th scope="col">Price</th>
                  <th scope="col">Profit</th>
                  <th scope="col">Fee/Tax</th>
                  <th scope="col">Order ID</th>
                  <th scope="col">Tags</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#SR-30125</td>
                  <td>TRK78451239US</td>
                  <td>ITEM82341</td>
                  <td>shopper_king</td>
                  <td>2</td>
                  <td>5</td>
                  <td>Sarah Johnson</td>
                  <td>123 Elm Street, NY</td>
                  <td>Amazon</td>
                  <td>$45.00</td>
                  <td>$7.50</td>
                  <td>$3.25</td>
                  <td>ORD783002</td>
                  <td>
                    <span className="badge bg-primary">Urgent</span>
                  </td>
                </tr>
                <tr>
                  <td>#SR-30126</td>
                  <td>TRK89345678UK</td>
                  <td>ITEM98322</td>
                  <td>dealfinder22</td>
                  <td>1</td>
                  <td>2</td>
                  <td>Michael Reed</td>
                  <td>456 Oak Avenue, London</td>
                  <td>eBay</td>
                  <td>$29.99</td>
                  <td>$4.00</td>
                  <td>$2.10</td>
                  <td>ORD783003</td>
                  <td>
                    <span className="badge bg-success">Normal</span>
                  </td>
                </tr>
                <tr>
                  <td>#SR-30127</td>
                  <td>TRK90234123CA</td>
                  <td>ITEM11203</td>
                  <td>gadgetgal</td>
                  <td>3</td>
                  <td>8</td>
                  <td>Anna Smith</td>
                  <td>789 Pine Blvd, Toronto</td>
                  <td>AliExpress</td>
                  <td>$90.00</td>
                  <td>$12.00</td>
                  <td>$5.40</td>
                  <td>ORD783004</td>
                  <td>
                    <span className="badge bg-warning text-dark">Delayed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="variation"></div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
