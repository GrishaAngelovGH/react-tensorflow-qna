import { render } from '@testing-library/react'

import InteractivePanel from './InteractivePanel'

test('should render InteractivePanel component', () => {
  const view = render(<InteractivePanel />)

  expect(view).toMatchSnapshot()
})