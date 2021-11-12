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
  const [selectedCards, setSelectedCards] = useState<PlayCard[]>([])

  const shuffleCards = (array: PlayCard[]) => {
    for (let i = 0; i < array.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setCards(array)
  }

  const doSomething = () => {
    console.log('hi')
  }
  const selectCard = (cardID: number) => {
    const found = selectedCards.find(card => cardID === card.id)
    shuffleCards(playCards)

    if (!found) {
      const score = currentScore + 1;
      setMessage("Great! Keep going!")
      setHighScore((score > highScore) ? score : highScore)
      setCurrentScore(score)
      setSelectedCards(playCards.filter(card => card.id === cardID))
      return
    }

    setMessage("Incorrect! Try Again!")
    setHighScore((currentScore > highScore) ? currentScore : highScore)
    setCurrentScore(0)
    setSelectedCards([])
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
