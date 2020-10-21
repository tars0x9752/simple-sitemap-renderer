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

const renderLoc = (url: string, options?: RenderOptions) => {
  return tag.loc(options?.encodeUrl ? encodeURI(url) : url)
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
  return `0${Math.floor(priority * 10)}`.split('').join('.').slice(-3)
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
  const urlChildren = [
    renderLoc(url, options),
    renderLastmod(lastmod),
    renderChangefreq(changefreq),
    renderPriority(priority),
  ].join('')

  return tag.url(urlChildren)
}
