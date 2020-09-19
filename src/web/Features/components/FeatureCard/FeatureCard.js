import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Checkbox from '@material-ui/core/Checkbox'
import Dialog from '@material-ui/core/Dialog'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Slide from '@material-ui/core/Slide'
import { css } from '@emotion/core'
import PriorityTag from '../../../PriorityTag'
import { CardActionArea } from '@material-ui/core'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const FeatureCard = ({ feature }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { estimatedRelease, hardRelease, name, priority, tasks = [] } = feature

  const concattedTasks = tasks.slice(0, 5)

  const getReleaseDate = () => {
    if (hardRelease) return `Release date: ${hardRelease}`
    return `Estimated release date: ${estimatedRelease}`
  }

  return (
    <>
      <Card css={cardLayoutCss} raised variant='outlined'>
        <button css={cardHeaderCss} onClick={() => setIsOpen(true)}>
          <CardHeader title={name} />
        </button>
        <span css={priorityTagCss}><PriorityTag type={priority} /></span>
        <CardContent>
          {concattedTasks.map(({ id, isComplete, name }) => (
            <div key={id}>
              <FormControlLabel
                value="start"
                control={<Checkbox disableRipple checked={isComplete} color="primary" />}
                label={name}
              />
            </div>
          ))}
        </CardContent>
        <div css={cardFooterCss}>
          <CardActionArea disableRipple css={cardActionAreaCss}>{getReleaseDate()}</CardActionArea>
        </div>
      </Card>
      <Dialog fullScreen open={isOpen} TransitionComponent={Transition}>Content</Dialog>
    </>
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
