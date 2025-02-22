import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'
import useFile from 'hooks/useFile'

vi.mock('hooks/useFile')

useFile.mockReturnValue('content')

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
})