import { css } from '@emotion/core'
import React from 'react'
import MaterialTextField from '@material-ui/core/TextField'

const TextField = ({
  error,
  fullWidth,
  helperText,
  id,
  label,
  value,
  variant,
  onBlur,
  onChange,
}) => {
  return (
    <div css={textFieldMarginCss}>
      <MaterialTextField
        error={error}
        fullWidth={fullWidth}
        helperText={helperText}
        id={id}
        label={label}
        value={value}
        variant={variant}
        onBlur={onBlur}
        onChange={onChange}
      />
    </div>
  )
}

TextField.defaultProps = {
  fullWidth: true,
  variant: 'filled'
}

const textFieldMarginCss = css`
  margin-top: 20px;
`

export default TextField
