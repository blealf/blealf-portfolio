import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import '../assets/styles/hero.css'

const Header = styled.div`
  padding: 15px 20px;
  background: linear-gradient(to bottom, #071F3D, #2B3F59);
  height: 70px;
  font-family: Monospace;
  ${'' /* letter-spacing: 0.5rem; */}
`
const Pointer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid green;
  background: transparent;
  animation:  zoom-n-shine 1s linear infinite;

  @keyframes zoom-n-shine {
    0% { border-color: green; transform: scale(1); }
    50% { border-color: teal; transform: scale(1.5); }
    100% { border-color: green; transform: scale(1); }
  }
`
const HeroWrapper = styled.div`
  padding: 20px;
  margin-left: 5vw;
  background: #333;
  max-width: 500px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
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
  const pointer = useRef(null) 
  
  useEffect(() => {
    write()
    document.addEventListener("pointermove", e => {
      pointer.current.style.top = e.pageY - 30 + 'px'
      pointer.current.style.left = e.pageX - 30 +  'px'
    });
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
        <HeroWrapper>
          <Greeting>{greeting} <span className="blinker">{ blinkGreeting ? '|' : null }</span> </Greeting>
          <Work>{work} <span className="blinker">{ blinkWork ? '|' : null }</span> </Work>
      </HeroWrapper>
      <Pointer ref={pointer} className="pointer" />
      </div>
  )
}

export default Hero
