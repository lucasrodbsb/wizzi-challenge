import React from 'react'
import * as C from './styles'

type Props = {
    title: string
}

const PageTitle = ({title}: Props) => {
  return (
    <C.Title>{title}</C.Title>
  )
}

export default PageTitle