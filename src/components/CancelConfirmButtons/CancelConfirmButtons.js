import React from 'react'
import { css } from '@emotion/core'
import { func, string } from 'prop-types'
import Button from '@material-ui/core/Button'

const CancelConfirmButtons = ({ cancelText, confirmText, onCancelClick, onConfirmClick }) => {
  return (
    <div css={buttonLayoutCss}>
      <div css={buttonMarginCss}>
        <Button onClick={onCancelClick} disableElevation disableRipple>
          {cancelText}
        </Button>
      </div>
      <div css={buttonMarginCss}>
        <Button onClick={onConfirmClick} disableElevation disableRipple variant="contained" color="primary">
          {confirmText}
        </Button>
      </div>
    </div>
  )
}

const buttonLayoutCss = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
`

const buttonMarginCss = css`
  margin: 0 16px;
`

CancelConfirmButtons.propTypes = {
  cancelText: string,
  confirmText: string,
  onCancelClick: func,
  onConfirmClick: func
}

CancelConfirmButtons.defaultProps = {
  cancelText: "Cancel",
  confirmText: "Save",
  onCancelClick: () => { },
  onConfirmClick: () => { }
}

export default CancelConfirmButtons
