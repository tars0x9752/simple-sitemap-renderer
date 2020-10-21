import { tag } from './tag'
import { validateLastmod, validatePriority } from './validation'

export type ChangeFreq =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never'

export type Entry = {
  url: string
  lastmod?: string
  changefreq?: ChangeFreq
  priority?: number
}

export type RenderOptions = {
  encodeUrl?: boolean
}

const renderUrl = (url: string, options?: RenderOptions) => {
  return tag.url(options?.encodeUrl ? encodeURI(url) : url)
}

const renderLastmod = (lastmod: string | undefined) => {
  if (lastmod === undefined || !validateLastmod(lastmod)) {
    return ''
  }

  return tag.lastmod(lastmod)
}

const renderChangefreq = (changefreq: ChangeFreq | undefined) => {
  if (changefreq === undefined) {
    return ''
  }

  return tag.changefreq(changefreq)
}

export const stringifyPriority = (priority: number): string => {
  return `${Math.floor(priority * 10)}`.split('').join('.')
}

const renderPriority = (priority: number | undefined) => {
  if (priority === undefined || !validatePriority(priority)) {
    return ''
  }

  const strigified = stringifyPriority(priority)

  return tag.priority(strigified)
}

export const renderEntry = (
  { url, lastmod, changefreq, priority }: Entry,
  options?: RenderOptions
): string => {
  return [
    renderUrl(url, options),
    renderLastmod(lastmod),
    renderChangefreq(changefreq),
    renderPriority(priority),
  ].join('')
}
