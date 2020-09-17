import React from 'react'
import { css } from '@emotion/core'
import AppHeader from '../AppHeader'
import FeatureCard from './FeatureCard'

const features = [
  {
    id: 1,
    name: 'PTR',
    tasks: [
      {
        id: 'task1',
        name: 'Mutation',
        taskOrder: 1
      },
      {
        id: 'task2',
        name: 'Bulk Action',
        taskOrder: 2
      },
      {
        id: 'task3',
        name: 'BO Approval',
        taskOrder: 3
      },
      {
        id: 'task4',
        name: 'Admin Approval',
        taskOrder: 4
      },
      {
        id: 'task5',
        name: 'Ship it',
        taskOrder: 5
      },
      {
        id: 'task6',
        name: 'Celebrate',
        taskOrder: 6
      }
    ],
    estimatedRelease: "Q3 2020",
    hardRelease: '04/05/2021'
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
