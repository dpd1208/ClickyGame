import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Footer from "./components/Footer";
import zodiacs from "./zodiacs.json";
import "./App.css";

//starting state of app
class App extends Component {
  state = {
    zodiacs,
    clickedZodiacs: [],
    score: 0
  };

//function triggered by each card's onClick event
  cardClick = event => {
    //takes the name from the image's alt property and sets as current 
    const currentZodiac = event.target.alt;
    //true-false no see if the selected zodiac sign has already been selected
    const previouslySelected =
      //indexOf returns -1 if a value is not in an array
      this.state.clickedZodiacs.indexOf(currentZodiac) > -1;

//if you select a zodiac sign that has already been selected, game over
    if (previouslySelected) {
      this.setState({
        //reshuffles zodiac cards and resets rest of state
        zodiacs: this.state.zodiacs.sort(function() {
          return Math.random() - 0.5;
        }),
        clickedZodiacs: [],
        score: 0
      });
        alert("You lose. You already picked that sign.");

//if the sign you select is not in clickedZodiacs array, +1 point
    } else {
      this.setState(
        {
          //reshuffle
          zodiacs: this.state.zodiacs.sort(function() {
            return Math.random() - 0.5;
          }),
          clickedZodiacs: this.state.clickedZodiacs.concat(
            currentZodiac
          ),
          score: this.state.score + 1
        },
//game is one once all 12 signs are guessed     
        () => {
          if (this.state.score === 12) {
            alert("You got all 12!");
            this.setState({
              //reshuffle
              zodiacs: this.state.zodiacs.sort(function() {
                return Math.random() - 0.5;
              }),
              //reset
              clickedZodiacs: [],
              score: 0
            });
          }
        }
      );
    }
  };

//render each component
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">

          {/*map function to render each car component*/}
          {this.state.zodiacs.map(zodiac => (
            <Card
              cardClick={this.cardClick}
              id={zodiac.id}
              key={zodiac.id}
              image={zodiac.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;