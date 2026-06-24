'use client'

import { useSyncExternalStore } from 'react'

function getHash(): string {
  if (typeof window === 'undefined') return ''
  return window.location.hash || ''
}

function subscribeHash(onStoreChange: () => void): () => void {
  window.addEventListener('hashchange', onStoreChange)
  return () => window.removeEventListener('hashchange', onStoreChange)
}

export function useRoute(): { hash: string } {
  const hash = useSyncExternalStore(subscribeHash, getHash, () => '')

  return { hash }
}
