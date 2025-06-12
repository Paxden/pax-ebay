import React from "react";

// Libraries
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchFilter() {
  return (
    <div className="search-filter">
      <div className="search d-flex flex-wrap flex-md-nowrap gap-md-5 justify-content-center gap-3">
        <InputGroup className="w-50 rounded-3 shadow">
          <Form.Control
            placeholder="Search by title or SKU"
            type="text"
            aria-label="Search"
            aria-describedby="search"
          />
          <InputGroup.Text id="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </InputGroup.Text>
        </InputGroup>

        <div className="filters  d-flex justify-content-center gap-3 ">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Platform
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Amazon</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Ebay</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Tiktok</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Electronics</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Fashion</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Home & Garden</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Status
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" className="text-success">Active</Dropdown.Item>
              <Dropdown.Item href="#/action-2" className="text-info">Out of Stock</Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="text-warning">Updates</Dropdown.Item>
              <Dropdown.Item href="#/action-4" className="text-danger">Errors</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
