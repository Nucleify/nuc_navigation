import { beforeEach, expect, it } from 'vitest'

import * as nucleify from 'nucleify'

beforeEach((): void => {
  Object.defineProperty(window, 'location', {
    value: { pathname: '/' },
    writable: true,
    configurable: true,
  })
})

it('returns true when route includes given URL', (): void => {
  window.location.pathname = '/home/dashboard'

  expect(nucleify.isCurrentUrl('/home')).toBe(true)
})

it('returns false when route does not include given URL', (): void => {
  window.location.pathname = '/about'

  expect(nucleify.isCurrentUrl('/home')).toBe(false)
})
