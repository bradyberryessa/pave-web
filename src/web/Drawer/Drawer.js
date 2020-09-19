import React from 'react'
import { css } from '@emotion/core'
import { bool, func, node, string } from 'prop-types'
import MaterialDrawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const Drawer = ({
  anchor,
  children,
  title,
  isOpen,
  onCloseDrawerClick
}) => {
  const useStyles = makeStyles(() => ({
    drawerPaper: {
      width: 450
    }
  }))

  const classes = useStyles()

  return (
    <MaterialDrawer
      anchor={anchor}
      classes={{ paper: classes.drawerPaper }}
      ModalProps={{ onBackdropClick: onCloseDrawerClick }}
      open={isOpen}
      PaperProps={{ variant: 'outlined' }}
    >
      <div css={titleLayoutCss}>
        <IconButton disableRipple onClick={onCloseDrawerClick}>
          <CloseIcon />
        </IconButton>
        <div css={titleMarginCss}>{title}</div>
      </div>
      <div css={contentLayoutCss}>
        {children}
      </div>
    </MaterialDrawer>
  )
}

const contentLayoutCss = css`
  height: 100%;
  overflow: auto;
  margin: 16px 32px 0 32px;
`

const titleLayoutCss = css`
  font-size: 28px;
  margin: 16px 0 0 8px;
`

const titleMarginCss = css`
  margin-left: 8px;
`

Drawer.propTypes = {
  anchor: string,
  children: node,
  isOpen: bool,
  title: node,
  onCloseDrawerClick: func
}

Drawer.defaultProps = {
  anchor: 'right',
  onCloseDrawerClick: () => { }
}

export default Drawer
