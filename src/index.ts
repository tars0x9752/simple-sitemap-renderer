import { tag, xmlDeclaration } from './tag'
import { validateLastmod, validatePriority } from './validation'

export type ChangeFreq =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never'

export type PageEntry = {
  url: string
  lastmod?: string
  changefreq?: ChangeFreq
  priority?: number
}

export type RenderOptions = {
  encodeUrl?: boolean
}

const handleUrl = (url: string, options?: RenderOptions) => {
  return tag.url(options?.encodeUrl ? encodeURI(url) : url)
}

const handleLastmod = (lastmod: string | undefined) => {
  if (lastmod === undefined || !validateLastmod(lastmod)) {
    return ''
  }

  return tag.lastmod(lastmod)
}

const handleChangefreq = (changefreq: ChangeFreq | undefined) => {
  if (changefreq === undefined) {
    return ''
  }

  return tag.changefreq(changefreq)
}

const stringifyPriority = (priority: number) => {
  return `${Math.floor(priority * 10)}`.split('').join('.')
}

const handlePriority = (priority: number | undefined) => {
  if (priority === undefined || !validatePriority(priority)) {
    return ''
  }

  const strigified = stringifyPriority(priority)

  return tag.priority(strigified)
}

export const renderPageEntry = (
  { url, lastmod, changefreq, priority }: PageEntry,
  options?: RenderOptions
): string => {
  return [
    handleUrl(url, options),
    handleLastmod(lastmod),
    handleChangefreq(changefreq),
    handlePriority(priority),
  ].join('')
}

export const renderSitemap = (
  entries: PageEntry[],
  options?: RenderOptions
): string => {
  const urlSet = entries
    .map((entry) => renderPageEntry(entry, options))
    .join('')

  return `${xmlDeclaration}${tag.urlSet(urlSet)}`
}
