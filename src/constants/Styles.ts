import { css } from 'styled-components'

export const SansSerif = css`
  font-family: 'Montserrat', sans-serif;
`

export const Colors = {
  Black: (opaque: number = 100) => `rgba(0, 0, 0, ${opaque * 0.01})`,
  White: (opaque: number = 100) => `rgba(255, 255, 255, ${opaque * 0.01})`,
  Blue:  (opaque: number = 100) => `rgba(0, 166, 200, ${opaque * 0.01})`,
  
  Gray100: '#FAFAFA',

  CSS: {
    gray10: 'var(--colors-gray10)',
    gray20: 'var(--colors-gray20)',
    gray40: 'var(--colors-gray40)',
    gray60: 'var(--colors-gray60)',
    gray80: 'var(--colors-gray80)',

    blue:   'var(--colors-blue)',
    blue20: 'var(--colors-blue20)',
    blue40: 'var(--colors-blue40)',
    blue60: 'var(--colors-blue60)',
    blue80: 'var(--colors-blue80)',

    bg:     'var(--colors-bg)',
    text:   'var(--colors-text)',
    link:   'var(--colors-link)'
  }
}

export const darkMedia = 'prefers-color-scheme: dark'

export const CSSColorSchemes = css`
  --colors-bg:   ${Colors.Gray100};
  --colors-text: ${Colors.Black(90)};
  --colors-link: ${Colors.Blue()};

  --colors-blue: ${Colors.Blue()};
  --colors-blue20: ${Colors.Blue(20)};
  --colors-blue40: ${Colors.Blue(40)};
  --colors-blue60: ${Colors.Blue(60)};
  --colors-blue80: ${Colors.Blue(80)};

  --colors-gray10: ${Colors.Black(10)};
  --colors-gray20: ${Colors.Black(20)};
  --colors-gray40: ${Colors.Black(40)};
  --colors-gray60: ${Colors.Black(60)};
  --colors-gray80: ${Colors.Black(80)};

  @media (${darkMedia}) {
    --colors-bg:   ${Colors.Black(90)};
    --colors-text: ${Colors.White(90)};

    --colors-gray10: ${Colors.White(10)};
    --colors-gray20: ${Colors.White(20)};
    --colors-gray40: ${Colors.White(40)};
    --colors-gray60: ${Colors.White(60)};
    --colors-gray80: ${Colors.White(80)};
  }
`

export const UnderlineText = ({
  color = 'currentColor',
  position = 1.05
} : {
  color: string,
  position: number
}) => css`
  background-image: linear-gradient(to right, ${color} 100%, ${color} 0%);
  background-position: 0 ${position}em;
  background-repeat: repeat-x;
  background-size: 1px 0.5px;
`