"use client";

import { UserRound, Wheat, Factory, ShoppingBag, HardHat, Fuel, Shirt, Settings2,
  ShieldCheck,
  Zap,
  Droplets,
  Wrench,
  Package } from "lucide-react";
import { useEffect, useRef, useState } from "react";
// import { UserRound } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <main>
      <section className="hero">

        <nav className="navbar">

          <div className="logo">
            <div className="logo-mark">Z</div>

            <div className="logo-text">
              <strong>ZARVON</strong>
              <span>GLOBAL VENTURES</span>
            </div>
          </div>

          <div className="nav-links">
            <a href="#About">About</a>
            <a href="#Services">Services</a>
            <a href="#Products">Products</a>
            <a href="#Markets">Markets</a>
            <a href="#Contact">Contact</a>
          </div>

          <div className="nav-right">
            <button className="quote-button">
              <a href="#quote">
              Request a Quote
              </a>
            </button>
          

            {/* <div className="account-links">
              <a href="#" className="login-link">
                Login
              </a>

              <a href="#" className="register-link">
                <UserRound size={17} />
                Register
              </a>
            </div> */}
          </div>

          <button
            ref={menuButtonRef}
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            ☰
          </button>

        </nav>

        {menuOpen && (
          <div ref={menuRef} className="mobile-menu">
            <a href="#About">About</a>
            <a href="#Services">Services</a>
            <a href="#Products">Products</a>
            <a href="#Markets">Markets</a>
            <a href="#Contact">Contact</a>

            <hr />

            <a href="#">Login</a>
            <a href="#">Register</a>

            {/* <button>Request a Quote</button> */}

            <button>
              <a href="#quote">
              Request a Quote
              </a>
            </button>
          </div>
        )}

        <video
  className="hero-video hero-video-desktop"
  autoPlay
  muted
  loop
  playsInline
  src="/dsv-hero.mp4"
/>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-eyebrow">
            GLOBAL SOURCING • TRADE • LOGISTICS
          </p>

          <h1>
            Connecting Markets.
            <br />
            Delivering Value.
          </h1>

          <p className="hero-description">
            Sourcing, trade, logistics and business solutions connecting
            Uganda with regional and international markets.
          </p>

          <div className="hero-buttons">
            <button className="Sercices-Button"><a href="#Services" >Explore Our Services</a></button>

            {/* <button className="secondary-button">
              Request a Quote
            </button> */}

            <button className="secondary-button">
              <a href="#quote">
              Request a Quote
              </a>
            </button>
          </div>
        </div>

      </section>

      {/* Business Services Strip */}
{/* 
      <section className="business-strip">

        <div className="business-item">
          <span className="business-number">01</span>
          <div>
            <h3>Sourcing</h3>
            <p>Reliable products from trusted suppliers.</p>
          </div>
        </div>

        <div className="business-item">
          <span className="business-number">02</span>
          <div>
            <h3>Import & Export</h3>
            <p>Connecting goods with global markets.</p>
          </div>
        </div>

        <div className="business-item">
          <span className="business-number">03</span>
          <div>
            <h3>Logistics</h3>
            <p>Coordinated movement and delivery.</p>
          </div>
        </div>

        <div className="business-item">
          <span className="business-number">04</span>
          <div>
            <h3>Consultancy</h3>
            <p>Practical solutions for your business.</p>
          </div>
        </div>

      </section> */}


      {/* Services Section */}

<section className="services-section" id="Services">

  <div className="services-header">

    <div>
      <p className="section-eyebrow">
        WHAT WE DO
      </p>

      <h2>
        Solutions that move
        <br />
        business forward.
      </h2>
    </div>

    <div className="services-intro">
      <p>
        From sourcing and procurement to trade, logistics and
        consultancy, ZARVON connects businesses with practical
        solutions across Uganda and international markets.
      </p>

      <a href="#" className="text-link">
        Explore all services →
      </a>
    </div>

  </div>


  <div className="services-grid">

    <div className="service-card">

      <span className="service-number">01</span>

      <div className="service-icon">
        S
      </div>

      <h3>Sourcing</h3>

      <p>
        Finding suitable products and reliable suppliers
        based on your business requirements.
      </p>

      <a href="#">Learn more →</a>

    </div>


    <div className="service-card">

      <span className="service-number">02</span>

      <div className="service-icon">
        T
      </div>

      <h3>Import & Export</h3>

      <p>
        Supporting the movement and supply of goods
        between Uganda and international markets.
      </p>

      <a href="#">Learn more →</a>

    </div>


    <div className="service-card">

      <span className="service-number">03</span>

      <div className="service-icon">
        L
      </div>

      <h3>Logistics</h3>

      <p>
        Coordinating transportation, delivery and
        related logistics solutions.
      </p>

      <a href="#">Learn more →</a>

    </div>


    <div className="service-card">

      <span className="service-number">04</span>

      <div className="service-icon">
        C
      </div>

      <h3>Consultancy</h3>

      <p>
        Practical business, procurement and operational
        support for organizations and institutions.
      </p>

      <a href="#">Learn more →</a>

    </div>

  </div>

</section>

{/* Products & Procurement Section */}

<section className="products-section" id="Products">

  <div className="products-heading">

    <div>
      <p className="section-eyebrow products-eyebrow">
        PRODUCTS & PROCUREMENT
      </p>

      <h2>
        What can we
        <br />
        source for you?
      </h2>
    </div>

    <div className="products-intro">
      <p>
        We source products from suitable suppliers based on
        your business, project and institutional requirements.
      </p>

      <a href="#" className="products-link">
        Explore products →
      </a>
    </div>

  </div>


  <div className="products-grid">

    <div className="product-card">

      <span className="product-number">01</span>

      <div className="product-icon">
        <Settings2 size={27} strokeWidth={1.6} />
      </div>

      <div className="product-content">
        <h3>Industrial Supplies</h3>
        <p>
          Equipment, materials and essential supplies for
          industrial and business operations.
        </p>
      </div>

      <span className="corner corner-top"></span>
      <span className="corner corner-bottom"></span>

    </div>


    <div className="product-card">

      <span className="product-number">02</span>

      <div className="product-icon">
        <ShieldCheck size={27} strokeWidth={1.6} />
      </div>

      <div className="product-content">
        <h3>PPE & HSE</h3>
        <p>
          Safety equipment and workplace protection supplies.
        </p>
      </div>

      <span className="corner corner-top"></span>
      <span className="corner corner-bottom"></span>

    </div>


    <div className="product-card">

      <span className="product-number">03</span>

      <div className="product-icon">
        <Zap size={27} strokeWidth={1.6} />
      </div>

      <div className="product-content">
        <h3>Electrical Materials</h3>
        <p>
          Electrical products and materials for projects
          and operations.
        </p>
      </div>

      <span className="corner corner-top"></span>
      <span className="corner corner-bottom"></span>

    </div>


    <div className="product-card">

      <span className="product-number">04</span>

      <div className="product-icon">
        <Droplets size={27} strokeWidth={1.6} />
      </div>

      <div className="product-content">
        <h3>Pumps & Water Equipment</h3>
        <p>
          Pumps, fittings and equipment for water-related
          applications.
        </p>
      </div>

      <span className="corner corner-top"></span>
      <span className="corner corner-bottom"></span>

    </div>


    <div className="product-card">

      <span className="product-number">05</span>

      <div className="product-icon">
        <Wrench size={27} strokeWidth={1.6} />
      </div>

      <div className="product-content">
        <h3>Tools & Equipment</h3>
        <p>
          Practical tools and equipment for different
          business requirements.
        </p>
      </div>

      <span className="corner corner-top"></span>
      <span className="corner corner-bottom"></span>

    </div>


    <div className="product-card">

      <span className="product-number">06</span>

      <div className="product-icon">
        <Package size={27} strokeWidth={1.6} />
      </div>

      <div className="product-content">
        <h3>General Supplies</h3>
        <p>
          Everyday consumables and institutional supplies.
        </p>
      </div>

      <span className="corner corner-top"></span>
      <span className="corner corner-bottom"></span>

    </div>

  </div>

</section>

      {/* Industries We Serve */}

<section className="industries" id="Markets">
  <div className="industries-header">
    <span className="section-tag">INDUSTRIES</span>
    <h2>Whatever your sector, we move it forward</h2>
    <p>
      From farm to freight, we support the industries driving Uganda's
      trade with regional and global markets.
    </p>
  </div>

  <div className="industries-grid">
    <div className="industry-card">
      <div className="industry-icon">
        <Wheat size={26} />
      </div>
      <h3>Agriculture</h3>
      <p>Sourcing and export of coffee, grains, and produce to global buyers.</p>
    </div>

    <div className="industry-card">
      <div className="industry-icon">
        <Factory size={26} />
      </div>
      <h3>Manufacturing</h3>
      <p>Raw material sourcing and finished goods distribution at scale.</p>
    </div>

    <div className="industry-card">
      <div className="industry-icon">
        <ShoppingBag size={26} />
      </div>
      <h3>Retail & FMCG</h3>
      <p>Reliable supply chains keeping shelves stocked across the region.</p>
    </div>

    <div className="industry-card">
      <div className="industry-icon">
        <HardHat size={26} />
      </div>
      <h3>Construction</h3>
      <p>Import logistics for building materials and heavy equipment.</p>
    </div>

    <div className="industry-card">
      <div className="industry-icon">
        <Fuel size={26} />
      </div>
      <h3>Energy</h3>
      <p>Trade and logistics support for fuel and power sector clients.</p>
    </div>

    <div className="industry-card">
      <div className="industry-icon">
        <Shirt size={26} />
      </div>
      <h3>Textiles & Fashion</h3>
      <p>Sourcing fabric and apparel from trusted regional partners.</p>
    </div>
  </div>
</section>
     
     {/* About ZARVON Section */}

<section className="about-section" id="About">

  <div className="about-visual">
    <img
      src="/zarvon-branding.jpeg"
      alt="ZARVON Global Ventures"
    />

    <div className="about-badge">
      <span>UGANDA</span>
      <strong>→</strong>
      <span>THE WORLD</span>
    </div>
  </div>

  <div className="about-content">

    <p className="section-eyebrow">
      ABOUT ZARVON
    </p>

    <h2>
      Connecting Uganda
      <br />
      with opportunity
      <br />
      beyond borders.
    </h2>

    <p className="about-description">
      ZARVON GLOBAL VENTURES LIMITED is a Uganda-based company
      focused on sourcing, trade, logistics and business consultancy.
      We connect businesses with reliable products, suppliers and
      practical solutions across Uganda and international markets.
    </p>

    <div className="about-highlights">

      <div>
        <strong>01</strong>
        <span>Reliable Sourcing</span>
      </div>

      <div>
        <strong>02</strong>
        <span>Regional & International Trade</span>
      </div>

      <div>
        <strong>03</strong>
        <span>Practical Business Solutions</span>
      </div>

    </div>

    <a href="#" className="about-link">
      Discover ZARVON →
    </a>

  </div>

</section>

{/* =========================================================
    REQUEST A QUOTE SECTION
========================================================= */}

<section id="quote" className="quote-section">
  <div className="quote-container">

    <div className="quote-heading">
      <p className="section-label">GET IN TOUCH</p>

      <h2>Request a Quote</h2>

      <p>
        Tell us what you need and our team will get back to you.
      </p>
    </div>

    <form
  className="quote-form"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Thank you! Your request has been sent.");
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  }}
>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone / WhatsApp</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your phone number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company name"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message">How can we help?</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us about your requirements..."
          required
        />
      </div>

      <button type="submit" className="quote-submit">
        Send Request
      </button>

    </form>
  </div>
</section>

{/* Footer */}

<footer className="site-footer" id="Contact">

  <div className="footer-main">

    {/* Company */}

    <div className="footer-company">

      <div className="footer-logo">
        <div className="footer-logo-mark">Z</div>

        <div>
          <strong>ZARVON</strong>
          <span>GLOBAL VENTURES</span>
        </div>
      </div>

      <p className="footer-tagline">
        Connecting markets. Delivering value.
      </p>

      <p className="footer-description">
        Uganda-based sourcing, trade, logistics and consultancy
        solutions connecting businesses with regional and
        international markets.
      </p>

    </div>


    {/* Quick Links */}

    <div className="footer-column">

      <h4>Quick Links</h4>

      <a href="#About">About Us</a>
      <a href="#Services">Services</a>
      <a href="#Products">Products</a>
      <a href="#Markets">Markets</a>
      <a href="#Contact">Contact</a>

    </div>


    {/* Services */}

    <div className="footer-column">

      <h4>Our Services</h4>

      <a href="#">Sourcing</a>
      <a href="#">Import & Export</a>
      <a href="#">Logistics</a>
      <a href="#">Consultancy</a>

    </div>


    {/* Contact */}

    <div className="footer-column footer-contact">

      <h4>Contact</h4>
      <p>+966 58 124 3622</p>

      <p>
        Kampala, Uganda
      </p>

      <a href="mailto:info@zarvonglobal.com">
        info@zarvonglobal.com
      </a>

      <a href="#">
        Request a Quote →
      </a>

    </div>

  </div>


  {/* Bottom Bar */}

  <div className="footer-bottom">

    <p>
      © 2026 ZARVON GLOBAL VENTURES LIMITED. All rights reserved.
    </p>

    <div>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms & Conditions</a>
    </div>

  </div>

</footer>
    </main>
  );
}