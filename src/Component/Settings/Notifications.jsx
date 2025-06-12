import React from "react";

// Libraries
import Form from "react-bootstrap/Form";
import { ListGroup } from "react-bootstrap";

function Notifications({ checked, onChange }) {
  return (
    <div className="notifications">
      <div className="mt-2 p-3">
        <h5>Orders Notifications</h5>
        <div className="toggles">
          <ListGroup>
            <ListGroup.Item className="d-flex gap-3 align-items-center">
              <Form.Check
                type="switch"
                id="custom-switch"
                checked={checked}
                onChange={(e) => onChange?.(e.target.checked)}
              />
              <span>Order Failed Updates</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex gap-3 align-items-center">
              <Form.Check
                type="switch"
                id="custom-switch"
                checked={checked}
                onChange={(e) => onChange?.(e.target.checked)}
              />
              <span>Tracking Number Updates</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex gap-3 align-items-center">
              <Form.Check
                type="switch"
                id="custom-switch"
                checked={checked}
                onChange={(e) => onChange?.(e.target.checked)}
              />
              <span>Order Successfull Updates</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex gap-3 align-items-center">
              <Form.Check
                type="switch"
                id="custom-switch"
                checked={checked}
                onChange={(e) => onChange?.(e.target.checked)}
              />
              <span>Order Successfull Updates</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex gap-3 align-items-center">
              <Form.Check
                type="switch"
                id="custom-switch"
                checked={checked}
                onChange={(e) => onChange?.(e.target.checked)}
              />
              <span>New Order Updates</span>
            </ListGroup.Item>
          </ListGroup>
        </div>

        <div className="my-3">
          <h5>Monitoring Notification</h5>
          <div className="toggles">
            <ListGroup>
              <ListGroup.Item className="d-flex gap-3 align-items-center">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  checked={checked}
                  onChange={(e) => onChange?.(e.target.checked)}
                />
                <span>Stock Monitoring Updates</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex gap-3 align-items-center">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  checked={checked}
                  onChange={(e) => onChange?.(e.target.checked)}
                />
                <span>Price Monitoring Updates</span>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>

        <div className="my-2 d-flex align-items-center justify-content-between">
          <Form>
            <label>Notify to email</label> <br />
            <input
              type="text"
              placeholder="example@gmail.com"
              className="px-2 py-1 rounded border bg-transparent"
            />
          </Form>
          <div className="btn btn-outline-primary ms-auto">Save Changes</div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
