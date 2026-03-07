import { useRoute } from 'nuxt/app'
import type { Mock } from 'vitest'
import { beforeEach, expect, it, vi } from 'vitest'

import * as nucleify from 'nucleify'

vi.mock('nuxt/app', async (importOriginal): Promise<Mock> => {
  return {
    ...(await importOriginal<typeof import('nuxt/app')>()),
    useRoute: vi.fn(),
  }
})

beforeEach((): void => {
  vi.clearAllMocks()
})

it('returns true when any of the urls matches current route', (): void => {
  ;(useRoute as vi.Mock).mockReturnValue({ path: '/dashboard/settings' })

  const urls: string[] = ['/home', '/dashboard']

  expect(nucleify.isAnyCurrentUrl(urls)).toBe(true)
})

it('returns false when none of the urls match current route', (): void => {
  ;(useRoute as vi.Mock).mockReturnValue({ path: '/about' })

  const urls: string[] = ['/home', '/dashboard']

  expect(nucleify.isAnyCurrentUrl(urls)).toBe(false)
})
