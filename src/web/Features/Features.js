import React, { useState } from 'react'
import { css } from '@emotion/core'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import AppHeader from '../AppHeader'
import FeatureCard from './components/FeatureCard/FeatureCard'

const features = [
  {
    id: 1,
    name: 'PTR',
    tasks: [
      {
        id: 'task1',
        name: 'Mutation',
        taskOrder: 1,
        isComplete: true
      },
      {
        id: 'task2',
        name: 'Bulk Action',
        taskOrder: 2,
        isComplete: false
      },
      {
        id: 'task3',
        name: 'BO Approval',
        taskOrder: 3,
        isComplete: false
      },
      {
        id: 'task4',
        name: 'Admin Approval',
        taskOrder: 4,
        isComplete: false
      },
      {
        id: 'task5',
        name: 'Ship it',
        taskOrder: 5,
        isComplete: false
      },
      {
        id: 'task6',
        name: 'Celebrate',
        taskOrder: 6,
        isComplete: false
      }
    ],
    estimatedRelease: "Q3 2020",
    hardRelease: '04/05/2021',
    priority: 'high'
  },
  {
    id: 2,
    name: 'Column Width',
    tasks: [
      {
        id: 'task1',
        name: "Don't do it",
        taskOrder: 1,
        isComplete: true
      }
    ],
    estimatedRelease: "Q4 2021",
    hardRelease: null,
    priority: 'low'
  }
]

const Features = () => {
  return (
    <>
      <AppHeader>Features</AppHeader>
      <div css={featureCardsLayoutCss}>
        {features.map(feature => <FeatureCard key={feature.id} feature={feature} />)}
      </div>
    </>
  )
}

const featureCardsLayoutCss = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export default Features
