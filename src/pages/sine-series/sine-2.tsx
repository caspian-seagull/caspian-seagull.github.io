import React from 'react'
import styled from 'styled-components'
import { ThemeNames } from 'constants/Themes'
import { PageLayout } from 'layouts/PageLayout'
import Canvas from 'components/Canvas'
import Sketch from 'sketches/sine/sine2'

const SineSeries1: React.StatelessComponent = () => {
  return (
    <PageLayout
      titleLink='/sine-series'
      layoutTheme={ThemeNames.dark}
      title='Sine series — 2'
    >
      <SketchFrame$>
        <Canvas controls={{ fullscreen: true }} sketch={Sketch} />
      </SketchFrame$>
    </PageLayout>
  )
}

export default SineSeries1

const SketchFrame$ = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
`