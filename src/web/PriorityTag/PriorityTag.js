import React from 'react'
import { oneOf } from 'prop-types'
import { css } from '@emotion/core'

const HIGH_PRIORITY_TYPE = 'high'
const MEDIUM_PRIORITY_TYPE = 'medium'
const LOW_PRIORITY_TYPE = 'low'
const COMPLETE_PRIORITY_TYPE = 'complete'

const priorityBackground = {
  [HIGH_PRIORITY_TYPE]: '#E44158',
  [MEDIUM_PRIORITY_TYPE]: '#FE713A',
  [LOW_PRIORITY_TYPE]: '#FDB447',
  [COMPLETE_PRIORITY_TYPE]: '#169f6d'
}

const priorityName = {
  [HIGH_PRIORITY_TYPE]: 'High',
  [MEDIUM_PRIORITY_TYPE]: 'Medium',
  [LOW_PRIORITY_TYPE]: 'Low',
  [COMPLETE_PRIORITY_TYPE]: 'Done'
}

const PriorityTag = ({ type }) => {
  return <div css={priorityTagCss(type)}>{priorityName[type]}</div>
}

const priorityTagCss = type => css`
  background: ${priorityBackground[type]};
  border-radius: 8px;
  color: #fff;
  cursor: default;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 4px 8px;
  text-transform: uppercase;
`

PriorityTag.propTypes = {
  type: oneOf([HIGH_PRIORITY_TYPE, MEDIUM_PRIORITY_TYPE, LOW_PRIORITY_TYPE, COMPLETE_PRIORITY_TYPE])
}

PriorityTag.HIGH_PRIORITY_TYPE = HIGH_PRIORITY_TYPE
PriorityTag.MEDIUM_PRIORITY_TYPE = MEDIUM_PRIORITY_TYPE
PriorityTag.LOW_PRIORITY_TYPE = LOW_PRIORITY_TYPE
PriorityTag.COMPLETE_PRIORITY_TYPE = COMPLETE_PRIORITY_TYPE

export default PriorityTag