import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'react-router-dom'
import BarChartIcon from '../../assets/BarChartIcon'
import PeopleIcon from '../../assets/PeopleIcon'
import SettingsIcon from '../../assets/SettingsIcon'
import UserIcon from '../../assets/UserIcon'

const SideNav = () => {
  return (
    <div css={sideNavLayoutCss}>
      <div css={flexedColumn}>
        <Link to="/">
          <BarChartIcon />
        </Link>
        <Link to="/settings">
          <SettingsIcon />
        </Link>
      </div>
      <div css={flexedColumn}>
        <Link to="/people">
          <PeopleIcon />
        </Link>
        <Link to="/profile">
          <UserIcon />
        </Link>
      </div>
    </div>
  )
}

const flexedColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const sideNavLayoutCss = css`
  ${flexedColumn}
  justify-content: space-between;
  width: 54px;
  background: gray;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%
`

export default SideNav
