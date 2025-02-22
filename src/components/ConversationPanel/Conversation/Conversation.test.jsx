import { render } from '@testing-library/react'

import Conversation from './Conversation'

test('should render Conversation component', () => {
  const view = render(
    <Conversation
      question="question"
      answers={[{ text: 'answer' }]}
      isProcessing={false}
    />
  )

  expect(view).toMatchSnapshot()
})

test('should render Conversation component without answers', () => {
  const view = render(
    <Conversation
      question="question"
      answers={[]}
      isProcessing={false}
    />
  )

  expect(view).toMatchSnapshot()
})

test('should render Conversation component processing question', () => {
  const view = render(
    <Conversation
      question="question"
      answers={[]}
      isProcessing={true}
    />
  )

  expect(view).toMatchSnapshot()
})