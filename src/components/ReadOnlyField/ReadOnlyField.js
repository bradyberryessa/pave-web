import React from 'react'
import { css } from '@emotion/core'

const ReadOnlyField = ({ label, fieldText }) => {
  return (
    <div css={fieldPaddingCss}>
      <b>{label}</b>
      <div>{fieldText}</div>
    </div>
  )
}

const fieldPaddingCss = css`
  margin-bottom: 16px;
`

export default ReadOnlyField
