import React, { useState, FunctionComponent } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import FullscreenDemo from 'layouts/FullscreenDemo'
import { Interface$, Corner$ } from 'layouts/FullscreenDemo/styles'
import { Colors } from 'constants/Styles'
import P5Sketch from 'components/P5Sketch'
import PageTitle from 'components/PageTitle'
import SettingsPanel from 'components/SettingsPanel'
import sketch, { defaultSettings } from 'sketches/medusa'
import sketchSettings from 'sketches/medusa/sketchSettings'
import SEO from 'components/seo'

const Medusa: FunctionComponent = () => {
  const [settings, setSettings] = useState(defaultSettings)

  return (
    <div className="dark-theme">
      <SEO title="«Medusa» animation" />

      <FullscreenDemo>
        <Interface$>
          <Corner$ top left>
            <PageTitle title='Medusa' />
            <Link to="/">Home</Link>
          </Corner$>

          <Corner$ top right> 
            <SettingsPanel onChange={setSettings} settings={sketchSettings} />
          </Corner$>
        </Interface$>

        <SketchFrame$>
          <P5Sketch sketch={sketch(settings)} />
        </SketchFrame$>
      </FullscreenDemo>
    </div>
  )
}

export default React.memo(Medusa)

//#region Styled
const SketchFrame$ = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${Colors.CSS.bg}
`
//#endregion