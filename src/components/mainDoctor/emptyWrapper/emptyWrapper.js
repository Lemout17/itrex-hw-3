import React from 'react'
import { EmptyWrapper, EmptyIcon, EmptyText } from '../styles'

const EmptyState = () => {
  return (
    <EmptyWrapper>
      <EmptyIcon />
      <EmptyText>
        You have no patients yet. <br />
        To create a patient profile, please contact your administrator.
      </EmptyText>
    </EmptyWrapper>
  )
}

export default EmptyState
