import React from 'react'
import { Wrapper, Icon, Text } from '../styles'

const EmptyState = () => {
  return (
    <Wrapper>
      <Icon />
      <Text>
        You have no patients yet. <br />
        To create a patient profile, please contact your administrator.
      </Text>
    </Wrapper>
  )
}

export default EmptyState
