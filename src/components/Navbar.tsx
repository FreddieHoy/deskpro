import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  align-items: center;
`
const Heading = styled.h1`
  margin: 0 20px;
`
const NavContainer = styled.div`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid black;
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

interface NavProps {
  appData: Array<dataType>
}

interface dataType {
  path: string
  linkTitle: string
}

const Navbar = (props: NavProps) => (
  <Container>
    <Heading>DeskPro Codetest</Heading>
    <NavContainer>
      {props.appData.map(({ path, linkTitle }) => (
        <StyledLink key={path} to={path}>
          {linkTitle}
        </StyledLink>
      ))}
    </NavContainer>
  </Container>
)

export default Navbar
