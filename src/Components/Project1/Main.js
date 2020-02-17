import React from "react";

const Main = props => (
  <div id="project1">
    <header id="header">
      <nav className="navbar fixed-top bg-dark">
        <div class="nav-item">
          <a href="#features" className="nav-link">
            Features
          </a>
        </div>
        <div className="nav-item">
          <a href="#how-it-works" className="nav-link">
            How it works
          </a>
        </div>
        <div className="nav-item">
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
        </div>
      </nav>
    </header>

    <main className="container">
      <div id="logo">
        <img
          className="mw-100"
          id="header-img"
          src="https://www.gopresto.com/i/1525439629236/n/images/presto-logo2.png"
          alt="Presto Logo"
        />
      </div>

      <img
        src="https://imgix.bustle.com/uploads/image/2018/5/22/864631f4-77d7-44a6-8093-2771da573f63-wafflemaker.jpeg?w=500&h=365&fit=crop&crop=faces&auto=format&q=70"
        alt="amazing waffle maker"
        className="mw-100"
      />

      <div id="features">
        <h2>Features</h2>
        <p>It makes waffle bowls</p>
        <p>That's pretty much it</p>
      </div>

      <div id="how-it-works">
        <h2>How it works</h2>
        <iframe
          id="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_vsSm3ocMn8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="mw-100"
        ></iframe>
      </div>

      <div id="pricing">
        <h1>Pricing</h1>
        <h3>$24,57</h3>
      </div>

      <form id="form" action="https://www.freecodecamp.com/email-submit">
        <label for="email">Sign up for our newsletter</label>
        <input
          type="email"
          name="email"
          i
          d="email"
          placeholder="kati@kapou.gr"
        />
        <input id="submit" type="submit" />
      </form>
    </main>
  </div>
);

export default Main;
