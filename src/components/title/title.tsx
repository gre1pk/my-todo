import { ReactElement } from 'react'

import './title.css'

type TitleProps = {
  title: string
}

function Title({ title }: TitleProps): ReactElement {
  return <h1>{title}</h1>
}

export default Title
