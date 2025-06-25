import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

// Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faBoxes,
  faBoxOpen,
  faCartShopping,
  faCircleNodes,
  faFile,
  faFileArchive,
  faGears,
  faHouse,
  faList,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Dropdown, ButtonGroup, DropdownButton } from "react-bootstrap";

import AddStoreModal from "../Modal/AddStoreModal";
import SingleProduct from "../Modal/SingleProduct";
import MultipleProduct from "../Modal/MultipleProduct";

function SideBar({ isOpen }) {
  // State for modals
  const [showAddStore, setShowAddStore] = useState(false);
  const [showSingleProduct, setShowSingleProduct] = useState(false);
  const [showMultipleProduct, setShowMultipleProduct] = useState(false);

  const [storeName, setStoreName] = useState(null);

  const handleStoreConnected = (name) => {
    setStoreName(name);
    setShowAddStore(false);
  };

  const token = localStorage.getItem("token");
  // Add store
  const handleShowAddStore = () => setShowAddStore(true);
  const handleCloseAddStore = () => setShowAddStore(false);

  // Add single product
  const handleShowSingleProduct = () => setShowSingleProduct(true);
  const handleCloseSingleProduct = () => setShowSingleProduct(false);

  // Add multiple product
  const handleShowMultipleProduct = () => setShowMultipleProduct(true);
  const handleCloseMultipleProduct = () => setShowMultipleProduct(false);

  return (
    <div className={`side-bar ${isOpen ? "open" : "close"}`}>
      <div className="brand">
        <div className="logo d-flex align-items-center justify-content-center">
          <div className="circle bg-primary"></div>
          <Link to="/" className="glass p-1 text-dark text-center h5">
            AutoSync{" "}
          </Link>
        </div>
        <Button variant="primary" onClick={handleShowAddStore}>
          {storeName ? storeName : "Add Store"}
        </Button>

        <AddStoreModal
          show={showAddStore}
          handleClose={handleCloseAddStore}
          token={token}
          onStoreConnected={handleStoreConnected}
        />
      </div>

      <div className="links">
        {/* Modals */}
        <SingleProduct
          show={showSingleProduct}
          handleClose={handleCloseSingleProduct}
        />
        <MultipleProduct
          show={showMultipleProduct}
          handleClose={handleCloseMultipleProduct}
        />
        <NavLink
          to="/"
          className={({ isActive }) =>
            `link d-flex gap-3 align-items-center ${isActive ? "active" : ""}`
          }
        >
          <FontAwesomeIcon icon={faHouse} />
          <h6 className=" m-0 p-0">Dashboard</h6>
        </NavLink>
        <DropdownButton
          as={ButtonGroup}
          title="Add Product"
          id="dropdown-button-drop-end"
          variant="primary"
          drop="down" // You can use "down", "end", or "start"
        >
          <Dropdown.Item eventKey="1">
            <Link
              onClick={handleShowSingleProduct}
              className="d-flex gap-3 align-items-center"
            >
              <FontAwesomeIcon icon={faBoxOpen} />
              <div>
                <span className="text-bold">Single Product</span>
                <p className="text-secondary">
                  Import one product to one store
                </p>
              </div>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
            <Link
              onClick={handleShowMultipleProduct}
              className="d-flex gap-3 align-items-center"
            >
              <FontAwesomeIcon icon={faBoxes} />
              <div>
                <span className="">Multiple Product/Stores</span>
                <p className="text-secondary">
                  Import multiple product together
                </p>
              </div>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item eventKey="3">
            <Link
              to="physical-product"
              className="d-flex gap-3 align-items-center"
            >
              <FontAwesomeIcon icon={faBoxArchive} />
              <div>
                <span className="">Physical Products </span>
                <p className="text-secondary">Manage warehouse products</p>
              </div>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item eventKey="4">
            <Link
              to="add-untracked-products"
              className="d-flex gap-3 align-items-center"
            >
              <FontAwesomeIcon icon={faBoxOpen} />
              <div>
                <span className="">Untracked Products</span>
                <p className="text-secondary">
                  Product that dosnt exit in AutoSync data
                </p>
              </div>
            </Link>
          </Dropdown.Item>
        </DropdownButton>

        <NavLink
          to="/trending-product"
          className={({ isActive }) =>
            `link d-flex gap-3 align-items-center ${isActive ? "active" : ""}`
          }
        >
          <FontAwesomeIcon icon={faList} />
          <h6 className="m-0 p-0">Trending Product</h6>
        </NavLink>
        <NavLink
          to="/drafts"
          className={({ isActive }) =>
            `link d-flex gap-3 align-items-center ${isActive ? "active" : ""}`
          }
        >
          <FontAwesomeIcon icon={faFile} />
          <h6 className="m-0 p-0">Drafts</h6>
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `link d-flex gap-3 align-items-center ${isActive ? "active" : ""}`
          }
        >
          <FontAwesomeIcon icon={faBoxOpen} />
          <h6 className="m-0 p-0">Products Monitor</h6>
        </NavLink>
        <NavLink
          to="/untracked-products"
          className={({ isActive }) =>
            `link d-flex gap-3 align-items-center ${isActive ? "active" : ""}`
          }
        >
          <FontAwesomeIcon icon={faBoxArchive} />
          <h6 className="m-0 p-0">Untracked Products</h6>
        </NavLink>
        <NavLink
          to="/revised-listing"
          className={({ isActive }) =>
            `link d-flex gap-3 align-items-center ${isActive ? "active" : ""}`
          }
        >
          <FontAwesomeIcon icon={faCircleNodes} />
          <h6 className="m-0 p-0">Revised Listing</h6>
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `link d-flex gap-3 align-items-center ${isActive ? "active" : ""}`
          }
        >
          <FontAwesomeIcon icon={faCartShopping} />
          <h6 className="m-0 p-0">Orders</h6>
        </NavLink>
        <NavLink
          to="/sales-report"
          className={({ isActive }) =>
            `link d-flex gap-3 align-items-center ${isActive ? "active" : ""}`
          }
        >
          <FontAwesomeIcon icon={faFileArchive} />
          <h6 className="m-0 p-0">Sales Report</h6>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `link d-flex gap-3 align-items-center ${isActive ? "active" : ""}`
          }
        >
          <FontAwesomeIcon icon={faGears} />
          <h6 className="m-0 p-0">Management</h6>
        </NavLink>
      </div>

      <div className="logout btn btn-sm btn-outline danger">
        <NavLink to="/auth/login" className="text-decoration-none text-danger">
          <FontAwesomeIcon icon={faRightFromBracket} className="me-2" />
          Logout
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
