import React, { useState } from 'react';
import Wrapper from './components/Wrapper'
import Nav from './components/Nav'
import Card from './components/Card'
import cards from './Cards.json'

type PlayCard = {
  id: number,
  image: string,
}

const App = () => {

  const [message, setMessage] = useState('Memory Game: Click A card to Begin.')
  const [highScore, setHighScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [playCards, setCards] = useState<PlayCard[]>(cards)
  const [unselectedCards, setUnselectedCards] = useState(playCards)

  const shuffleCards = (array: PlayCard[]) => {
    for (let i = 0; i < array.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setCards(array)
  }

  const selectCard = (cardID: number) => {
    const found = unselectedCards.find(card => cardID === card.id)

    if (!found === undefined) {
      const newCards = unselectedCards.filter(card => card.id !== cardID);
      setMessage("Great! Keep going!")
      setCurrentScore(currentScore + 1)
      setHighScore((currentScore > highScore) ? currentScore : highScore)
      setUnselectedCards(newCards)
      shuffleCards(playCards)
      return
    }

    setMessage("Incorrect! Try Again!")
    setHighScore((currentScore > highScore) ? currentScore : highScore)
    setCurrentScore(0)
    setCards(playCards)
    setUnselectedCards(playCards)
    shuffleCards(playCards)
  }

  return (
    <Wrapper >
      <Nav
        highScore={highScore}
        currentScore={currentScore}
        message={message}
      />
      <div className="container">
        {playCards.map(card => (
          <Card
            id={card.id}
            image={card.image}
            selectCards={selectCard}
          />
        ))}
      </div>
    </Wrapper>

  )

}

export default App;
