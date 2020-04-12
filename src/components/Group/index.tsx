import React from 'react'
import styled from 'styled-components'
import { Colors } from 'constants/Styles'

interface GroupPropsI {
  title?: string
}

const Group: React.FunctionComponent<GroupPropsI> = ({ children, title }) => {
  return (
    <Group$>
      {title && <GroupTitle$>{title}</GroupTitle$>}
      {children}
    </Group$>
  )
}

export default Group

const Group$ = styled.div`
  margin: 16px 0;
  padding: 16px;
  border: 1px solid ${Colors.CSS.gray20};
  border-radius: 6px;
  position: relative;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const GroupTitle$ = styled.div`
  position: absolute;
  top: -8px;
  left: 12px;
  background: ${Colors.CSS.bg};
  color: ${Colors.CSS.text};
  padding: 0 4px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1;
`

export const GroupDivider$ = styled.hr`
  margin: 16px 0;
  border: none;
  height: 1px;
  background: ${Colors.CSS.gray10};
`
