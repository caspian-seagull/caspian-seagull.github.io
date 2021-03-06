import React from 'react'
import styled from 'styled-components'
import CommonLayout from 'layouts/Common'
import { Colors } from 'constants/Styles'
import { GroupGrid$ } from 'components/Group'
import PageTitle from 'components/PageTitle'

import ToggleKit from 'components/Toggle/kit'
import RangeInputKit from 'components/RangeInput/kit'
import PageTitleKit from 'components/PageTitle/kit'
import SocialLinksKit from 'components/SocialLinks/kit'
import SettingsPanel from 'components/SettingsPanel/kit'

const UiKit = () => {
  return (
    <CommonLayout>
      <Page$>
        <PageTitle title='UI' />

        <GroupGridWithMargin$>
          <ToggleKit />
          <RangeInputKit />
          <PageTitleKit />
          <SocialLinksKit />
          <SettingsPanel />
        </GroupGridWithMargin$>
      </Page$> 
    </CommonLayout>
  )
}

export default UiKit

const Page$ = styled.div`
  min-height: 100vh;
  background: ${Colors.CSS.bg};
`

const GroupGridWithMargin$ = styled(GroupGrid$)`
  margin-top: 32px;
`