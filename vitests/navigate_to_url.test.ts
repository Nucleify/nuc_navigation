import { beforeEach, expect, it } from 'vitest'

import * as nucleify from 'nucleify'

beforeEach((): void => {
  Object.defineProperty(window, 'location', {
    value: { href: '' },
    writable: true,
    configurable: true,
  })
})

it('navigates to specified URL', (): void => {
  const testUrl: string = '/home'

  nucleify.navigateToUrl(testUrl)

  expect(window.location.href).toBe(testUrl)
})
