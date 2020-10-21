import { renderSitemap } from '../index'
import { Entry } from '../entry'

describe('renderSitemap', () => {
  describe('single urlset', () => {
    it('only url', () => {
      const entries: Entry[] = [
        {
          url: 'https://github.com/tars0x9752/sitemap-renderer',
        },
      ]

      const renderedXML =
        '<?xml version="1.0" encoding="UTF-8"?>' +
        '<urlset>' +
        '<url>' +
        '<loc>https://github.com/tars0x9752/sitemap-renderer</loc>' +
        '</url>' +
        '</urlset>'

      expect(renderSitemap(entries)).toBe(renderedXML)
    })

    it('full entry', () => {
      const entries: Entry[] = [
        {
          url: 'https://github.com/tars0x9752/sitemap-renderer',
          lastmod: '2020-10-10',
          changefreq: 'always',
          priority: 0.5,
        },
      ]

      const renderedXML =
        '<?xml version="1.0" encoding="UTF-8"?>' +
        '<urlset>' +
        '<url>' +
        '<loc>https://github.com/tars0x9752/sitemap-renderer</loc>' +
        '<lastmod>2020-10-10</lastmod>' +
        '<changefreq>always</changefreq>' +
        '<priority>0.5</priority>' +
        '</url>' +
        '</urlset>'

      expect(renderSitemap(entries)).toBe(renderedXML)
    })
  })
})
