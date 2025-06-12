import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Pages
// Auth
import Auth from "./Auth/Auth";
import Overview from "./Pages/Overview";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
// Main Application
import Dashboard from "./Pages/Dashboard";
import TrendingProduct from "./Pages/TrendingProduct";
import Drafts from "./Pages/Drafts";
import DraftsContainer from "./Component/Drafts/DraftContainer";
import ScheduledContainer from "./Component/Drafts/ScheduledContainer";
import RecurringContainer from "./Component/Drafts/RecurringContainer";
import Products from "./Pages/Products";
import UntrackedProducts from "./Pages/UntrackedProducts";
import RevisedListing from "./Pages/RevisedListing";
import Orders from "./Pages/Orders";
import SalesReport from "./Pages/SalesReport";
import AddProduct from "./Pages/AddProduct";
import PhysicalProduct from "./Pages/PhysicalProduct";
import AddUntrackedProducts from "./Pages/AddUntrackedProducts";
import Settings from "./Pages/Settings";
import Supplier from "./Component/Settings/Supplier";
import Automation from "./Component/Settings/Automation";
import Keywords from "./Component/Settings/Keywords";
import Notifications from "./Component/Settings/Notifications";
import Store from "./Component/Settings/Store";

function App() {
  return (
    <>
      <Routes>
        {/* Authentication */}
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Main Application */}
        <Route path="/" element={<Overview />}>
          <Route index element={<Dashboard />} />
          <Route path="trending-product" element={<TrendingProduct />} />
          <Route path="drafts" element={<Drafts />}>
            <Route index element={<DraftsContainer />} />
            <Route path="scheduled" element={<ScheduledContainer />} />
            <Route path="recurring" element={<RecurringContainer />} />
          </Route>
          <Route path="products" element={<Products />} />
          <Route path="untracked-products" element={<UntrackedProducts />} />
          <Route path="revised-listing" element={<RevisedListing />} />
          <Route path="orders" element={<Orders />} />
          <Route path="sales-report" element={<SalesReport />} />
          <Route path="physical-product" element={<AddProduct />}>
            <Route index element={<PhysicalProduct />} />
          </Route>
          <Route
            path="add-untracked-products"
            element={<AddUntrackedProducts />}
          />
          <Route path="settings" element={<Settings />}>
            <Route index element={<Supplier />} />
            <Route path="automation" element={<Automation />} />
            <Route path="keyword" element={<Keywords />} />
            <Route path="notification" element={<Notifications />} />
            <Route path="store" element={<Store />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
