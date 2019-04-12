import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../MainPage/MainPage.css";

export default class MainPage extends Component {
  render() {
    return (
      <div className="MainPageInfo">
        <h2>
          Finding the right puppy can be dog gone hard work. We provide
          convenient and efficient means of selecting and purchasing the perfect
          four-legged friend from the comfort of your home! 24 hours a day, and
          7 days a week. Take advantage of our adoption site, or leisurely
          browse our directory of dog and cat breeds with photos and detailed
          descriptions. With over a bunch of puppies and kittens looking for a
          new home, you're sure to find the perfect pet.
        </h2>
        <img
          alt="dog on mat"
          src="https://user-images.githubusercontent.com/45447942/56050134-e7fc5380-5cff-11e9-88f0-bc9e8c9deb8e.jpg"
        />
        <Link to={`/createDisplayName`} className="LinkToAdoptionPage">
          Let's Adopt!
        </Link>
      </div>
    );
  }
}
