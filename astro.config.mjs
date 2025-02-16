import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
//prueba
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://jose-garcete.dev',
})
