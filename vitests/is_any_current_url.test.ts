import { beforeEach, expect, it } from 'vitest'

import * as nucleify from 'nucleify'

beforeEach((): void => {
  Object.defineProperty(window, 'location', {
    value: { pathname: '/' },
    writable: true,
    configurable: true,
  })
})

it('returns true when any of the urls matches current route', (): void => {
  window.location.pathname = '/dashboard/settings'

  expect(nucleify.isAnyCurrentUrl(['/home', '/dashboard'])).toBe(true)
})

it('returns false when none of the urls match current route', (): void => {
  window.location.pathname = '/about'

  expect(nucleify.isAnyCurrentUrl(['/home', '/dashboard'])).toBe(false)
})
