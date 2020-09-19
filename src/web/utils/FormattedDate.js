import React from 'react'
import { FormattedDate as ReactIntlFormattedDate } from 'react-intl'

const FormattedDate = ({ value, ...props }) => {
  const convertedValue = typeof value === 'string' ? parseInt(value) : value

  return <ReactIntlFormattedDate value={convertedValue} {...props} />
}

export default FormattedDate
