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

  describe('multiple urlsets', () => {
    it('3 entries', () => {
      const entries: Entry[] = [
        {
          url: 'https://your-site/your-page-1',
          lastmod: '2020-10-10',
          changefreq: 'always',
          priority: 0.8,
        },
        {
          url: 'https://your-site/your-page-2',
          lastmod: '2020-10-10',
        },
        {
          url: 'https://your-site/your-page-3',
        },
      ]

      const renderedXML =
        '<?xml version="1.0" encoding="UTF-8"?>' +
        '<urlset>' +
        '<url>' +
        '<loc>https://your-site/your-page-1</loc>' +
        '<lastmod>2020-10-10</lastmod>' +
        '<changefreq>always</changefreq>' +
        '<priority>0.8</priority>' +
        '</url>' +
        '<url>' +
        '<loc>https://your-site/your-page-2</loc>' +
        '<lastmod>2020-10-10</lastmod>' +
        '</url>' +
        '<url>' +
        '<loc>https://your-site/your-page-3</loc>' +
        '</url>' +
        '</urlset>'

      expect(renderSitemap(entries)).toBe(renderedXML)
    })
  })
})
