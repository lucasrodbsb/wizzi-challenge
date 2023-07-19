import React from 'react'
import * as C from './styles'

interface IHomeText {
    title: string,
    subtitle: string
}

const HomeText = ({title, subtitle}: IHomeText) => {
  return (
    <C.TextContainer>
        <C.Subtitle>{subtitle}</C.Subtitle>
        <C.Title>{title}</C.Title>
    </C.TextContainer>
  )
}

export default HomeText