import { render } from '@testing-library/react'

import Questions from './Questions'

test('should render Questions component', () => {
  const view = render(<Questions />)

  expect(view).toMatchSnapshot()
})