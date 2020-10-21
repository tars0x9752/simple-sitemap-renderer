export const xmlDeclaration = '<?xml version="1.0" encoding="UTF-8"?>'

export type TagName =
  | 'urlset'
  | 'url'
  | 'loc'
  | 'lastmod'
  | 'changefreq'
  | 'priority'

export type TagRenderer = (value: string) => string

export const open = (tagName: TagName): string => {
  return `<${tagName}>`
}

export const close = (tagName: TagName): string => {
  return `</${tagName}>`
}

export const buildTagRenderer = (tagName: TagName): TagRenderer => {
  return (value: string) => {
    return `${open(tagName)}${value}${close(tagName)}`
  }
}

export const tag = {
  urlSet: buildTagRenderer('urlset'),
  url: buildTagRenderer('url'),
  loc: buildTagRenderer('loc'),
  lastmod: buildTagRenderer('lastmod'),
  changefreq: buildTagRenderer('changefreq'),
  priority: buildTagRenderer('priority'),
} as const
