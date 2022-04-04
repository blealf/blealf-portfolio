import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import '../assets/styles/hero.css'

const Header = styled.div`
  padding: 15px 20px;
  background: linear-gradient(to bottom, #071F3D, #2B3F59);
  height: 70px;
  font-family: Monospace;
  ${'' /* letter-spacing: 0.5rem; */}
`
const HeroWrapper = styled.div`
  padding: 20px;
  margin-left: 5vw;
  background: #333;
  max-width: 500px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`
const Greeting = styled.div`
  font-size: 1.5em;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-family: Monospace;
  display: flex;
`
const Work = styled.div`
  font-size: 1.5em;
  font-weight: 400;
  font-family: Monospace;
  display: flex;
`

const Hero = () => {

  const [greeting, setGreeting] = useState('')
  const [work, setWork] = useState('')
  const [blinkGreeting, setBlinkGreeting] = useState(false)
  const [blinkWork, setBlinkWork] = useState(false)

  useEffect(() => {
    write()
  }, [])

  const Typewriter = ({ words, printer, setBlinker, blinkerTime }) => {
    let i = 0
    // eslint-disable-next-line no-unused-expressions
    setBlinker ? setBlinker(true) : null
    return new Promise((resolve) => {
      setTimeout(() => {
        const interval = setInterval(() => {
          if (i >= words.length) {
            clearInterval(interval)
            setTimeout(() => {
              resolve()
              // eslint-disable-next-line no-unused-expressions
              setBlinker ? setBlinker(false) : null
            }, blinkerTime || 1000)
            return
          }
          printer(words.slice(0, i + 1))
          i++
        }, 200)
      }, 1000)
    })
  }

  const write = () => {
    Typewriter({
      words: 'Hi, my name is Blessing Alfred',
      printer: setGreeting,
      setBlinker: setBlinkGreeting
    })
    .then(() => {
      Typewriter({
        words: 'I am a front-end developer',
        printer: setWork,
        setBlinker: setBlinkWork,
        blinkerTime: 3000
      }) 
    })
  }


  return (
      <div>
        <Header>Blessing Alfred</Header>
        <HeroWrapper className="hero">
          <Greeting>{greeting} <span className="blinker">{ blinkGreeting ? '|' : null }</span> </Greeting>
          <Work>{work} <span className="blinker">{ blinkWork ? '|' : null }</span> </Work>
        </HeroWrapper>
      </div>
  )
}

export default Hero
