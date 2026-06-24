import { beforeEach, expect, it, vi } from 'vitest'

import * as nucleify from 'nucleify'

beforeEach((): void => {
  Object.defineProperty(window, 'location', {
    value: {
      pathname: '/',
      href: '',
      assign: vi.fn(),
    },
    writable: true,
    configurable: true,
  })
})

it('navigates to specified URL', (): void => {
  const testUrl = '/home'

  nucleify.navigateToUrl(testUrl)

  expect(window.location.assign).toHaveBeenCalledWith(testUrl)
})
