import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background: rgba(202, 232, 234, 0.1);
  max-width: 500px;
  margin: 0 auto;
  margin-top: 50px;
  ${'' /* padding: 10px; */}
  border-radius: 5px;
  backdrop-filter: blur(4px);
  box-shadow: 0px 0px 10px 5px rgba(202, 232, 234, 0.1);
`


const UserCard = () => {
  return (
    <Card>
      <img src={require('../assets/images/code-matte.jpg')} width="250" height="210" alt="code-matte"/>
    </Card>
  )
}

export default UserCard