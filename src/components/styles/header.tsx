import styled, { css } from 'styled-components';

export const PokeMonCard = styled.div`
  background: #000;
  color: #fff;
  font-size: 24px;
  padding: 16px;
  margin: 16px;
`
export const NavLink = styled.a`
  text-decoration: none;
`

export const PageLayout = styled.div`
  max-width: 80vw;
  margin: auto;
`
export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  border: none;
  background: #000;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`
export const HeaderImage = styled.img`
  height: 60px;
`

export const HeaderTitle = styled.h2`
  color: #000;
  margin: 0;
  margin-left: 70px;
  padding-bottom: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
`

export const HeaderNav = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`

export const HeaderItem = styled.li<{ isActive: boolean }>`
  font-size: 14px;
  color: #000;
  width: 200px;
  padding-bottom: 12px;
  text-align: center;
  &:hover {
    border-bottom: 2px solid #1569E0;
  }
  a {
    text-decoration: none;
    font-family: "Inter", sans-serif;
    background-color: #f3ec78;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }
  ${props => props.isActive && css`
    border-bottom: 2px solid #1569E0;
    color: #1569E0;
  `}
`