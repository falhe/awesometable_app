import React from 'react'
import moment from 'moment'

import { Padding } from '../style'
import { Wrapper } from './style'

interface FooterProps {
  created: string
  likes: number
}

export const Footer = ({ created, likes }: FooterProps) => {
  return (
    <Wrapper>
      <Padding>
        <p>{likes} personnes</p>
        <p>{moment().from(created)}</p>
      </Padding>
    </Wrapper>
  )
}
