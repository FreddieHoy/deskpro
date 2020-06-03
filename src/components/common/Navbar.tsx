import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  align-items: center;
`
const Heading = styled.h1`
  margin: 0 20px;
`

const StyledLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  margin: 0 20px;
  color: black;

  :hover {
    color: grey;
    cursor: pointer;
  }
`

const Navbar = () => (
  <Container>
    <Heading>DeskPro Codetest</Heading>
    <StyledLink to="/PageOne">PageOne</StyledLink>
    <StyledLink to="/PageTwo">PageTwo</StyledLink>
  </Container>
)

export default Navbar
