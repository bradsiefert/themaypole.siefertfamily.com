import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    newsletters: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        issue: z.number(),
        postdate: z.coerce.date(),
        prettydate: z.string(),
        draft: z.boolean().default(false),
        layout: z.string().optional()
      })
    })
  }
})

