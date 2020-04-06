import styled from 'styled-components'
import { Colors, UnderlineText } from 'constants/Styles'

export const SocialLinks$ = styled.nav`
  display: flex;
  flex-direction: row;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -112px;
    top: 1px;
    width: 80px;
    height: 16px;
    background: ${Colors.Blue(8)}
  }
`

export const SocialLink$ = styled.a`
  font-size: 12px;
  line-height: 1.2;
  font-weight: 1;
  margin-right: 32px;
  position: relative;

  &:hover {
    ${UnderlineText({ color: Colors.Blue(30), position: 1.15 })}
  }

  &::after {
    content: '•';
    position: absolute;
    display: inline;
    right: -18px;
    color: ${Colors.Blue(25)};
    pointer-events: none;
  }

  &:last-child::after {
    display: none;
  }
`