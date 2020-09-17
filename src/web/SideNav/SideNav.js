import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'react-router-dom'
import ListAltIcon from '@material-ui/icons/ListAlt'
import BarChartIcon from '@material-ui/icons/BarChart'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import SettingsIcon from '@material-ui/icons/Settings'
import PersonIcon from '@material-ui/icons/Person'

const SideNav = () => {
  return (
    <div css={sideNavLayoutCss}>
      <div css={flexedColumn}>
        asdf;
        <Link to="/"><BarChartIcon /></Link>
        <Link to="/people"><PeopleAltIcon /></Link>
        <Link to="/features"><ListAltIcon /></Link>
      </div>
      <div css={flexedColumn}>
        <Link to="/settings"><SettingsIcon /></Link>
        <Link to="/profile"><PersonIcon /></Link>
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
