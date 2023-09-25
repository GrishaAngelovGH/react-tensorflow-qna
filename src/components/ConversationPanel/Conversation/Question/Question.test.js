import { render } from '@testing-library/react'

import Question from './Question'

test('should render Question component', () => {
  const view = render(<Question />)

  expect(view).toMatchSnapshot()
})