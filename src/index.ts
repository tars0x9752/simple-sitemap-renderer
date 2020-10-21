import { Entry, renderEntry, RenderOptions } from './entry'
import { tag, xmlDeclaration } from './tag'

export const renderSitemap = (
  entries: Entry[],
  options?: RenderOptions
): string => {
  const urlSet = entries.map((entry) => renderEntry(entry, options)).join('')

  return `${xmlDeclaration}${tag.urlSet(urlSet)}`
}
