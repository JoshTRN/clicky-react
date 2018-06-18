import React from 'react';
import Wrapper from './components/Wrapper'
import Nav from './components/Nav'
import Card from './components/Card'
import cards from './Cards.json'


class App extends React.Component {

  state = {
    message: 'Memory Game: Click A card to Begin.',
    highScore: 0,
    currentScore: 0,
    cards: cards,
    unselectedCards: cards
  }

  shuffleCards = array => {
    for (let i = 0; i < array.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({
      cards: array
    })
  }

  selectCard = cardID => {
    const found = this.state.unselectedCards.find(item => cardID === item.id)
    console.log(found)

    if (found === undefined) {
      this.setState({ 
        message: "Incorrect! Try Again!",
        highScore: (this.state.currentScore > this.state.highScore) ? this.state.currentScore : this.state.highScore,
        currentScore: 0,
        cards: cards,
        unselectedCards:cards
    });
} else {
    const newCards = this.state.unselectedCards.filter(item => item.id !== cardID);
    
    this.setState({ 
        message: "Great! Keep going!",
        currentScore: this.state.currentScore + 1,
        cards: cards,
        unselectedCards: newCards
    });
    }
    this.shuffleCards(this.state.cards)
  }


  render() {
    return (
      <Wrapper >
        <Nav
          highScore={this.state.highScore}
          currentScore={this.state.currentScore}
          message={this.state.message}
        />
        <div class="container">
          {this.state.cards.map(card => (
            <Card
              id={card.id}
              image={card.image}
              selectCards={this.selectCard}
            />
          ))}
        </div>
      </Wrapper>

    )
  }

}

export default App;
