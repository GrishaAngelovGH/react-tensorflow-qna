import { render } from '@testing-library/react'

import Navbar from './Navbar'

test('should render Navbar component', () => {
  const view = render(<Navbar />)

  expect(view).toMatchSnapshot()
})