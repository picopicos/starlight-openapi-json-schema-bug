import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'

export default defineConfig({
  site: 'https://picopicos.github.io',
  base: '/starlight-openapi-json-schema-bug',
  integrations: [
    starlight({
      plugins: [
        // Generate the OpenAPI documentation pages.
        starlightOpenAPI([
          {
           base: 'api',
           schema: 'schemas/api-schema.yaml',
          },
        ]),
      ],
      sidebar: [
        {
          label: 'Guides',
          items: [{ label: 'Example Guide', link: '/guides/example/' }],
        },
        // Add the generated sidebar group to the sidebar.
        ...openAPISidebarGroups,
      ],
      title: 'My Docs',
    }),
  ],
})
