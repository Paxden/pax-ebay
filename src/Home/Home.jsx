import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";

import ScrollReveal from "scrollreveal";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faChartLine,
  faShieldAlt,
  faPlug,
  faLink,
  faBoxOpen,
  faCogs,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Bottom
    ScrollReveal().reveal(".reveal-bottom", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      reset: false,
    });

    // Top
    ScrollReveal().reveal(".reveal-top", {
      origin: "top",
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      reset: false,
    });

    // Left
    ScrollReveal().reveal(".reveal-left", {
      origin: "left",
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      reset: false,
    });

    // Right
    ScrollReveal().reveal(".reveal-right", {
      origin: "right",
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const testimonials = [
    {
      name: "Jessica I.",
      title: "Online Seller",
      quote:
        "AutoSync has saved me hours every week. My listings update automatically, and I never oversell anymore.",
      img: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Musa K.",
      title: "Amazon Dropshipper",
      quote:
        "The profit tracking and revise rules are a game changer. It’s like having a virtual assistant on autopilot.",
      img: "https://i.pravatar.cc/100?img=3",
    },
    {
      name: "Clara M.",
      title: "TechShop Owner",
      quote:
        "I manage multiple stores with AutoSync and it’s seamless. No more spreadsheets or guesswork.",
      img: "https://i.pravatar.cc/100?img=5",
    },
  ];

  const plans = [
    {
      name: "Free",
      price: "$0/mo",
      features: ["1 Connected Store", "Up to 10 Products", "Basic Support"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29/mo",
      features: [
        "3 Stores",
        "Up to 500 Products",
        "Auto Pricing & Stock",
        "Priority Support",
      ],
      highlight: true,
    },
    {
      name: "Business",
      price: "$59/mo",
      features: [
        "Unlimited Stores",
        "Unlimited Products",
        "Custom Rules Engine",
        "Dedicated Support",
      ],
      highlight: false,
    },
  ];

  const steps = [
    {
      icon: faLink,
      title: "Connect Your Store",
      text: "Link your eBay, Amazon or TikTok shop securely in seconds.",
    },
    {
      icon: faBoxOpen,
      title: "Import Products",
      text: "Add items from suppliers or use bulk import tools.",
    },
    {
      icon: faCogs,
      title: "Apply Rules & Automate",
      text: "Set your price rules, revise settings and let AutoSync run.",
    },
    {
      icon: faChartBar,
      title: "Track Sales & Profits",
      text: "See live order data, profits and restock alerts in one dashboard.",
    },
  ];

  return (
    <div className="home">
      {/* Navigation */}
      <nav className="container p-3 d-flex justify-content-between align-items-center flex-wrap">
        <div className="brand h3 m-0 text-primary">AutoSync</div>

        <button
          className="d-md-none btn btn-outline-primary"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>

        <div
          className={`nav-links d-flex gap-4 align-items-center ${
            isMobileMenuOpen ? "d-flex flex-column mt-3 w-100" : "d-none"
          } d-md-flex flex-md-row justify-content-md-center`}
        >
          <Link to="/" className="text-decoration-none text-light">
            <p className="m-0">Home</p>
          </Link>
          <Link to="pricing" className="text-decoration-none text-light">
            <p className="m-0">Pricing</p>
          </Link>
          <Link to="testimonial" className="text-decoration-none text-light">
            <p className="m-0">Testimonial</p>
          </Link>
        </div>

        <div to="/auth/login" className="cta d-none d-md-block">
          <button
            onClick={() => navigate("/auth/login")}
            className="cssbuttons-io-button"
          >
            Get started
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section section container p-3">
        <div className="row justify-content-between h-100 w-100">
          <div className="hero-content reveal-left col-12 col-md-5 ">
            <h1 className="display-4">
              Unlock Your Possibilities with AutoSync
            </h1>
            <p className="lead">
              Automate your e-commerce business with ease. Sync products, manage
              orders, and streamline your workflow.
            </p>
            <div className="btns d-flex gap-3">
              <button
                onClick={() => navigate("/auth/login")}
                className="btn btn-primary btn-lg mt-3"
              >
                Get Started Now
              </button>
              <button className="btn btn-secondary btn-lg mt-3">
                Explore Solution
              </button>
            </div>

            <div className="d-flex mt-3 align-items-center gap-5">
              <div>
                <div className="text-secondary text-sm">
                  Trusted Excellence on
                </div>
                <h2 className="fs-2">Ebay</h2>
              </div>
              <div>
                <div className="text-secondary text-sm">Members</div>
                <h2 className="fs-2">1000+</h2>
              </div>
            </div>
          </div>

          <div className="lottifiles col-12 col-md-7">
            <DotLottieReact
              className="w-100 play"
              src="https://lottie.host/a0bcc034-adff-40ab-aad5-31b6d0e4e67a/xzi1XJeeZD.lottie"
              loop
              autoplay
              style={{ height: "400px", width: "700px" }}
            />
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="py-5">
        <Container>
          <h2 className="text-center reveal-top mb-5 fs-3">
            ✨ Benefits of Using AutoSync
          </h2>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="h-100 reveal-left glass-card text-center shadow-sm border-0">
                <Card.Body>
                  <FontAwesomeIcon
                    icon={faClock}
                    size="2x"
                    className="mb-3 text-primary"
                  />
                  <Card.Title>Save Time</Card.Title>
                  <Card.Text>
                    Automate listings, pricing, and order fulfillment — no
                    manual work.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="h-100 reveal-left glass-card text-center shadow-sm border-0">
                <Card.Body>
                  <FontAwesomeIcon
                    icon={faChartLine}
                    size="2x"
                    className="mb-3 text-success"
                  />
                  <Card.Title>Grow Faster</Card.Title>
                  <Card.Text>
                    Get real-time insights to optimize your profits and scale
                    effortlessly.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="h-100 reveal-left glass-card text-center shadow-sm border-0">
                <Card.Body>
                  <FontAwesomeIcon
                    icon={faShieldAlt}
                    size="2x"
                    className="mb-3 text-warning"
                  />
                  <Card.Title>Protect Your Store</Card.Title>
                  <Card.Text>
                    Avoid eBay policy violations and duplicate listings across
                    platforms.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="h-100 reveal-left glass-card text-center shadow-sm border-0">
                <Card.Body>
                  <FontAwesomeIcon
                    icon={faPlug}
                    size="2x"
                    className="mb-3 text-danger"
                  />
                  <Card.Title>All-in-One Integration</Card.Title>
                  <Card.Text>
                    Connect Amazon, eBay, TikTok and more — all managed in one
                    place.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section
        id="testimonial"
        style={{ backgroundColor: "#121212", color: "#fff", padding: "4rem 0" }}
      >
        <Container>
          <h2 className="text-center reveal-top text-light mb-5 fs-3">
            ⚙️ How AutoSync Works
          </h2>
          <Row className="g-4">
            {steps.map((step, i) => (
              <Col key={i} md={6} lg={3}>
                <div
                  className="glass-card reveal-left text-center h-100"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "1rem",
                    padding: "2rem",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <FontAwesomeIcon
                    icon={step.icon}
                    size="2x"
                    className="mb-3 text-info"
                  />
                  <h5>{step.title}</h5>
                  <p className="small">{step.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Pricing plans */}
      <section
        id="pricing"
        style={{ backgroundColor: "#000", color: "#fff", padding: "4rem 0" }}
      >
        <Container>
          <h2 className="text-center reveal-top fs-2 mb-5 text-light">
            💰 Pricing Plans
          </h2>
          <Row className="g-4">
            {plans.map((plan, i) => (
              <Col key={i} md={4}>
                <Card
                  className={`text-center reveal-left h-100 glass-card ${
                    plan.highlight ? "border border-info shadow-lg" : "border-0"
                  }`}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    color: "#fff",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                  }}
                >
                  <Card.Body>
                    <h4 className="fs-3">{plan.name}</h4>
                    <h2 className="my-3">{plan.price}</h2>
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((f, idx) => (
                        <li key={idx} className="mb-2">
                          ✅ {f}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline-light">Choose Plan</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section
        style={{ backgroundColor: "#121212", color: "#fff", padding: "4rem 0" }}
      >
        <Container>
          <h2 className="text-center reveal-top fs-2 mb-5 text-light">
            🗣 What Users Are Saying
          </h2>
          <Row className="g-4">
            {testimonials.map((user, i) => (
              <Col key={i} md={4}>
                <Card
                  className="h-100 reveal-left glass-card text-light"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                  }}
                >
                  <Card.Body className="text-center">
                    <img
                      src={user.img}
                      alt={user.name}
                      className="rounded-circle mb-3"
                    />
                    <h5 className="fs-4">{user.name}</h5>
                    <small className="text-secondary">{user.title}</small>
                    <p className="mt-3 small">“{user.quote}”</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to action */}
      <section
        className="text-center text-light"
        style={{
          backgroundColor: "#000",
          padding: "4rem 2rem",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
        }}
      >
        <Container className="reveal-bottom">
          <h2 className="mb-3">🚀 Ready to Automate Your eCommerce?</h2>
          <p className="mb-4 fs-5">
            Start your free trial and experience how AutoSync can scale your
            online business.
          </p>
          <Button
            onClick={() => navigate("/auth/login")}
            size="lg"
            variant="outline-light"
          >
            Get Started Free
          </Button>
        </Container>
      </section>

      {/*Footer  */}
      <footer
        style={{ backgroundColor: "#111", color: "#ccc", padding: "2rem 0" }}
      >
        <Container>
          <Row className="text-center text-md-start">
            <Col md={4}>
              <h5 className="text-light">AutoSync</h5>
              <p>
                Powering automation for modern eCommerce sellers across eBay,
                Amazon, TikTok & more.
              </p>
            </Col>

            <Col md={4}>
              <h6 className="text-light">Quick Links</h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#features"
                    className="text-decoration-none text-secondary"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-decoration-none text-secondary"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-decoration-none text-secondary"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={4}>
              <h6 className="text-light">Contact</h6>
              <p>Email: support@autosync.ai</p>
              <p>Twitter: @autosync</p>
              <p>&copy; {new Date().getFullYear()} AutoSync</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Home;
