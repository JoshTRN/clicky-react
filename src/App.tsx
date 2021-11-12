import { useState } from 'react';
import Wrapper from './components/Wrapper'
import Nav from './components/Nav'
import Card from './components/Card'
import cards from './Cards.json'
import { PlayCard } from './types/types';
import "./components/Wrapper.css"

const startCards: any[] = cards
const App = () => {

  const [message, setMessage] = useState('Memory Game: Click A card to Begin.')
  const [highScore, setHighScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [playCards, setCards] = useState<PlayCard[]>(startCards)
  const [unselectedCards, setUnselectedCards] = useState<PlayCard[]>(startCards)

  const shuffleCards = (array: PlayCard[]) => {
    for (let i = 0; i < array.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setCards(array)
  }

  const selectCard = (cardID: number) => {
    const match = unselectedCards.find(card => cardID === card.id)
    shuffleCards(playCards)

    if (match) {
      const score = currentScore + 1;
      setMessage("Great! Keep going!")
      setHighScore((score > highScore) ? score : highScore)
      setCurrentScore(score)
      setUnselectedCards(unselectedCards.filter(card => card.id !== cardID))
      return
    }

    setMessage("Incorrect! Try Again!")
    setHighScore((currentScore > highScore) ? currentScore : highScore)
    setCurrentScore(0)
    setUnselectedCards(playCards)
  }

  return (
    <>
      <Nav
        highScore={highScore}
        currentScore={currentScore}
        message={message}
      />
      <Wrapper >
        <div className="container">
          {playCards.map(card => (
            <Card
              key={card.id}
              id={card.id}
              image={card.image}
              onClick={() => selectCard(card.id)}
            />
          ))}
        </div>
      </ Wrapper>
    </>
  )
}

export default App;
