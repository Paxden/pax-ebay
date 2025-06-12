import React from "react";

// Libraries
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UntrackedProducts() {
  return (
    <div className="untracked-products">
      <h2 className="mt">Untracked Products</h2>
      <div className="bulk-action d-flex align-items-center gap-3">
        <div className="form-check d-flex align-items-center gap-3">
            <Form.Check />
            <p>1 Item Selected </p>
        </div>
        <div className="btn btn-sm">Bulk Edit</div>
        <div className="btn btn-sm">Bulk Delete</div>
      </div>

      {/* Product Monitoring */}
      <div className="products-monitor   mt-3">
        <div className="details border border-3">
          <div className="head p-2">
            <h4>Product</h4>
          </div>
          <table className="monitor  text-truncate border table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th className="text-center"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Form.Check />
                </td>
                <td>
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
                  <div className="text-center">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Check />
                </td>
                <td>
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
                  <div className="text-center">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="variations">
          <div className="head border p-2">
            <h4>Variations</h4>
          </div>
          <div className="variation">
            <table class="table border table-striped-columns text-center text-truncate">
              <thead>
                <tr>
                  <th scope="col">Available</th>
                  <th scope="col">Hold on</th>
                  <th scope="col">Out of Stock</th>
                  <th scope="col">Total</th>
                  <th scope="col">OOS Days</th>
                  <th scope="col">Price</th>
                  <th scope="col">Profit</th>
                  <th scope="col">Item Id</th>
                  <th scope="col">Sold</th>
                  <th scope="col">DWS</th>
                  <th scope="col">Store</th>
                  <th scope="col">Asin</th>
                  <th scope="col">Views</th>
                  <th scope="col">Watchers</th>
                  <th scope="col">Days left</th>
                  <th scope="col">Tags</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="badge text-bg-success">34</div>
                  </td>
                  <td>
                    <div className="badge text-bg-warning">0</div>
                  </td>
                  <td>
                    <div className="badge text-bg-danger">2</div>
                  </td>
                  <td>36</td>
                  <td>0</td>
                  <td>$29.99</td>
                  <td>$7.50</td>
                  <td>123456789</td>
                  <td>150</td>
                  <td>12</td>
                  <td>eBay Store A</td>
                  <td>B07XJ8C8F5</td>
                  <td>1,230</td>
                  <td>14</td>
                  <td>10</td>
                  <td>electronics, gadgets</td>
                </tr>

                <tr>
                  <td>
                    <div className="badge text-bg-success">0</div>
                  </td>
                  <td>
                    <div className="badge text-bg-warning">0</div>
                  </td>
                  <td>
                    <div className="badge text-bg-danger">12</div>
                  </td>
                  <td>12</td>
                  <td>8</td>
                  <td>$15.00</td>
                  <td>$3.20</td>
                  <td>987654321</td>
                  <td>89</td>
                  <td>4</td>
                  <td>eBay Store B</td>
                  <td>B08Y93ZXYZ</td>
                  <td>980</td>
                  <td>6</td>
                  <td>3</td>
                  <td>home, kitchen</td>
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

export default UntrackedProducts;
