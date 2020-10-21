# simple-sitemap-renderer

A bare minimum sitemap renderer written in TypeScript.

## Features

- Render Sitemap XML
- Zero-dependencies
- Written in TypeScript

## 💻 Installation

```sh
$ npm i simple-sitemap-renderer
```

or

```sh
yarn add simple-sitemap-renderer
```

## 🎈 Usage

```ts
import { renderSitemap } from 'simple-sitemap-renderer'

renderSitemap([
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
])
```

## API

### renderSitemap(entries: Entry[], options?: RenderOptiopns)

#### Entry

```ts
type Entry = {
  url: string
  lastmod?: string // yyyy-mm-dd
  changefreq?: ChangeFreq // always|hourly|daily|weekly|monthly|yearly|never
  priority?: number // 0.0 ~ 1.0
}
```

#### RenderOptiopns

```ts
type RenderOptiopns = {
  encodeUrl?: boolean
}
```

- `encodeUrl`: If you want this libary to encode a url for you, set it to true. (Otherwise, you don't need this option.)
