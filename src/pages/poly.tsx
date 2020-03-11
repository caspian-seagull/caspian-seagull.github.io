import React, { FunctionComponent, useState, useEffect } from 'react'
import styled from 'styled-components'
import { ThemeNames } from 'constants/Themes'
import { SketchGallery } from 'layouts/SketchGallery'
import P5Sketch from 'components/P5Sketch'
import Range from 'components/Range'
import sketches from 'sketches/poly'
import Media from 'utils/Media'

const SineSeries1: FunctionComponent = () => {
  const [settings, setSettings] = useState({
    vertices: 6,
    polygonsNumber: 25,
    gap: 20,
    amplitude: 10,
    size: 512
  })

  useEffect(() => {
    try {
      setSettings({
        ...settings,
        size: window.innerWidth < 512 ? window.innerWidth : 512
      })
    } catch(e) {
      console.log(e)
    }
  }, [])

  const [sketchIndex, setSketchIndex] = useState(0)

  const updateSettingsValue = (fieldName: string) => (value: number) => {
    setSettings({
      ...settings,
      [fieldName]: value
    })
  }

  return (
    <SketchGallery title='Polygons' layoutTheme={ThemeNames.light}>
      <div>
        {sketches.map((sketch, i) => (
          <Button$ disabled={sketchIndex === i} onClick={() => setSketchIndex(i)}>
            {i+1}
          </Button$>
        ))}
      </div>

      <SketchFrame$>
        <P5Sketch sketch={sketches[sketchIndex](settings)} />
      </SketchFrame$>

      <Controls$>
        <ControlGroup$>
          <Range
            handleChange={updateSettingsValue('vertices')}
            values={[2, 10, 1]}
            initialValue={settings.vertices}
            label='Vertices'
            showValue
          />
        </ControlGroup$>
        
        <ControlGroup$>
          <Range
            handleChange={updateSettingsValue('polygonsNumber')}
            values={[1, 50, 1]}
            initialValue={settings.polygonsNumber}
            label='Shapes count'
            showValue
          />
        </ControlGroup$>

        <ControlGroup$>
          <Range
            handleChange={updateSettingsValue('amplitude')}
            values={[0, 50, 1]}
            initialValue={settings.amplitude}
            label='Amplitude'
            showValue
          />
        </ControlGroup$>

        <ControlGroup$>
          <Range
            handleChange={updateSettingsValue('gap')}
            values={[5, 50, 1]}
            initialValue={settings.gap}
            label='Size'
            showValue
          />
        </ControlGroup$>
      </Controls$>

    </SketchGallery>
  )
}

export default React.memo(SineSeries1)

//#region Styled
const SketchFrame$ = styled.div`
  position: relative;
  line-height: 0;
  border-radius: 6px;
  overflow: hidden;
`

const Controls$ = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 512px;

  ${Media.Phone`
    width: 100%;
    flex-direction: column;
  `}
`

const Button$ = styled.button`
  border: none;
  background: #333;
  height: 32px;
  line-height: 32px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 0 16px;
  z-index: 10;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    background: #000;
  }

  &:first-child {
    border-radius: 50px 0 0 50px;
    border-right: 1px solid #333;
  }

  &:last-child {
    border-radius: 0 50px 50px 0;
  }

  &:disabled,
  &:disabled:hover {
    cursor: default;
    background: #999;
    color: #000 !important;
  }
`

const ControlGroup$ = styled.div`
  width: 240px;
  margin: 10px 0 0;
  display: flex;
  align-items: center;

  input {
    display: block;
    flex: 1 0;
  }

  ${Media.Phone`
    width: 100%;
  `}
`
//#endregion