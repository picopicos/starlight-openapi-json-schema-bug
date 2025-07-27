import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://picopicos.github.io',
  base: '/starlight-openapi-json-schema-bug',
  integrations: [
    starlight({
      plugins: [
      ],
      sidebar: [
        {
          label: 'Guides',
          items: [{ label: 'Example Guide', link: '/guides/example/' }],
        },
      ],
      title: 'My Docs',
    }),
  ],
})
