import React, { ReactElement } from 'react'

import { Panel } from './style'

interface Props {
  children: ReactElement
}

export const PanelLeft = ({ children }: Props) => <Panel>{children}</Panel>

export const PanelRight = ({ children }: Props) => <Panel>{children}</Panel>
