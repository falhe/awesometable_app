import React from 'react'

import { Padding } from '../style'
import { ContentWrapper, Title, Subtitle } from './style'

interface ContentProps {
  title: string
  description: string
  counter: number
}

export const Content = ({ counter, title, description }: ContentProps) => {
  return (
    <ContentWrapper>
      <Padding>
        {counter}
        <Title>{title ? title : 'Hello'}</Title>
        <Subtitle>{description ? description : 'description'}</Subtitle>
      </Padding>
    </ContentWrapper>
  )
}
