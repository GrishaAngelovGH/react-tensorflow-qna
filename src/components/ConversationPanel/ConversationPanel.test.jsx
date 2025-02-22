import { render } from '@testing-library/react'

import ConversationPanel from './ConversationPanel'

test('should render ConversationPanel component', () => {
  const view = render(<ConversationPanel />)

  expect(view).toMatchSnapshot()
})