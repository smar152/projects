import React from "react";
import "./Waffles.css";
import "bootstrap/dist/css/bootstrap.css";

function WaffleBowlMaker() {
  return (
    <div id="waffleMaker">
      <header id="header">
        <img
          id="header-img"
          src="https://www.gopresto.com/i/1525439629236/n/images/presto-logo2.png"
          alt="Presto Logo"
        />
        <nav id="nav-bar">
          <li class="nav-link">
            <a href="#features">Features</a>
          </li>
          <li class="nav-link">
            <a href="#how-it-works">How it works</a>
          </li>
          <li class="nav-link">
            <a href="#pricing">Pricing</a>
          </li>
        </nav>
      </header>

      <div className="row">
        <div id="features" className="col-md-6">
          <h1 className="bigAssTitle">Waffle. Bowl. Maker.</h1>

          <div className="container">
            <h2 className="row">Features</h2>
            <div className="row">
              <p className="col">
                <h4>Waffle</h4> Like, you've probably seen a waffle. It's a kind
                of food that is nice to eat.
              </p>
              <p className="col">
                <h4>Bowl</h4> Bowls are convenient for holding food. Now imagine
                the bowl is edible as well.
              </p>
              <p className="col">
                <h4>Maker</h4> A device that can make something. Something
                refers to a waffle bowl in this instance.
              </p>
            </div>
          </div>
        </div>
        <img
          className="col-md-6 image100"
          //src="https://imgix.bustle.com/uploads/image/2018/5/22/864631f4-77d7-44a6-8093-2771da573f63-wafflemaker.jpeg?w=500&h=365&fit=crop&crop=faces&auto=format&q=70"
          src="https://www.savvysavingcouple.net/wp-content/uploads/2019/06/Waffle-cone-cup-fruit-snacks-1.jpg"
          alt="amazing waffle maker, img credit savvy saving couple"
        />
      </div>

      <h2>How it works</h2>
      <div id="how-it-works">
        <div className="row mx-auto">
          <iframe
            id="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_vsSm3ocMn8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div id="pricing">
        <h2>Pricing</h2>
        <h3>$24,57</h3>
      </div>

      <form id="form" action="https://www.freecodecamp.com/email-submit">
        <label for="email">Sign up for our newsletter</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="dont@thisistotally.fake"
        ></input>
        <input id="submit" type="submit" />
      </form>
    </div>
  );
}

export default WaffleBowlMaker;
