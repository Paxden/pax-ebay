import React from "react";
import { Outlet } from "react-router-dom";

function AddProduct() {
  return (
    <div>
      {/* <div className="mb-3 d-flex algn-items-center justify-content-end gap-3">
        <div className="btn btn-sm btn-secondary">Save Sample Order</div>
        <div className="btn btn-sm btn-warning">Save</div>
        <div className="btn btn-sm btn-warning">Save & Import</div>
      </div>

      <div className="product-links">
        <div className="btn btn-link text-warning text-secondary"> Product</div>
        <div className="btn btn-link">Description</div>
        <div className="btn btn-link">Variants</div>
        <div className="btn btn-link">Image</div>
        <div className="btn btn-link">Item specifications</div>
        <div className="btn btn-link">Listing Rule</div>
        <div className="btn btn-link">Revised Rule</div>
      </div> */}
      <Outlet />
    </div>
  );
}

export default AddProduct;
