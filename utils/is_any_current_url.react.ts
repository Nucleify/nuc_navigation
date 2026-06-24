import { isCurrentUrl } from './is_current_url.react'

export function isAnyCurrentUrl(urls: string[], pathname?: string): boolean {
  return urls.some((url) => isCurrentUrl(url, pathname))
}
