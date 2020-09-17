import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { css } from '@emotion/core'
import PriorityTag from '../PriorityTag'
import { CardActionArea } from '@material-ui/core'

const FeatureCard = ({ feature }) => {
  const { name, tasks = [] } = feature

  const concattedTasks = tasks.slice(0, 5)

  return (
    <Card css={cardLayoutCss} raised variant='outlined'>
      <button css={cardHeaderCss} onClick={() => { }}>
        <CardHeader title={name} />
      </button>
      <span css={priorityTagCss}><PriorityTag type={PriorityTag.LOW_PRIORITY_TYPE} /></span>
      <CardContent>
        {concattedTasks.map(({ id, name }) => (
          <div key={id}>
            <FormControlLabel
              value="start"
              control={<Checkbox disableRipple color="primary" />}
              label={name}
            />
          </div>
        ))}
      </CardContent>
      <div css={cardFooterCss}>
        <CardActionArea disableRipple css={cardActionAreaCss}>Estimated Release Date: Q3 2021</CardActionArea>
      </div>
    </Card>
  )
}

const cardActionAreaCss = css`
  cursor: default !important;
`

const cardFooterCss = css`
  position: absolute;
  bottom: 8px;
  right: 8px;
`

const cardHeaderCss = css`
  background: lightgray;
  width: 100%;
  text-align: left;
`

const cardLayoutCss = css`
  position: relative;
  margin: 0 50px 30px 0;
  height: 315px;
  width: 300px;
`

const priorityTagCss = css`
  position: absolute;
  top: 8px;
  right: 8px;
`

export default FeatureCard
