import { render } from '@testing-library/react'

import Answer from './Answer'

test('should render Answer component', () => {
  const view = render(<Answer content={{ text: 'answer' }} />)

  expect(view).toMatchSnapshot()
})

test('should render Answer component without content', () => {
  const view = render(<Answer />)

  expect(view).toMatchSnapshot()
})