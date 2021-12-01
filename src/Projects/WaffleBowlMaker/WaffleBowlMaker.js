import React, { Component } from "react";
import "./Waffles.scss";
import "bootstrap/dist/css/bootstrap.css";
import { getWaffles } from "./waffleData.js";

class WaffleBowlMaker extends Component {
  state = {
    waffles: getWaffles(),
  };
  render() {
    return (
      <div className="container">
        <header className="d-flex justify-content-between align-items-center mb-2 mt-3">
          <img
            src="https://www.gopresto.com/i/1525439629236/n/images/presto-logo2.png"
            alt="Presto Logo"
          />
          <nav class="nav-bar">
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

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="bigTitle">Waffle. Bowl. Maker.</h1>

              <div className="container">
                <h2 className="row">Features</h2>
                <div className="row">
                  <p className="col">
                    <h4>Waffle</h4> Like, you've probably seen a waffle. It's a
                    kind of food that is nice to eat.
                  </p>
                  <p className="col">
                    <h4>Bowl</h4> Bowls are convenient for holding food. Now
                    imagine the bowl is edible as well.
                  </p>
                  <p className="col">
                    <h4>Maker</h4> A device that can make something. Something
                    refers to a waffle bowl in this instance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.savvysavingcouple.net/wp-content/uploads/2019/06/Waffle-cone-cup-fruit-snacks-1.jpg"
                alt="amazing waffle maker, img credit savvy saving couple"
              />
            </div>
          </div>
        </div>

        <div className="how-it-works container">
          <h2>How it works</h2>
          <div className="row justify-content-center mt-2">
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

        <div className="container">
          <h2 className="row">Pricing</h2>
          <div className="row">
            {this.state.waffles.pricing.map((waffle) => (
              <div className="priceBox text-center col-4 mb-2">
                <img
                  src={waffle.iconSrc}
                  onMouseOver={(e) =>
                    (e.currentTarget.src = waffle.iconWhiteSrc)
                  }
                  onMouseOut={(e) => (e.currentTarget.src = waffle.iconSrc)}
                ></img>
                <h5>{waffle.title}</h5>
                <p>{waffle.description}</p>
                <h6>{waffle.included}</h6>
                <h3>{waffle.price}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="newsletter">
          <form action="https://www.freecodecamp.com/email-submit">
            <label for="email">
              Get notified for sales by signing up for our newsletter
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="dont@thisistotally.fake"
            ></input>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default WaffleBowlMaker;
