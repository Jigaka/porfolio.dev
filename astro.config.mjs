import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import partytown from "@astrojs/partytown"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
//prueba
export default defineConfig({
  site: 'https://jose-garcete.dev',
  integrations: [
    tailwind(), 
    robotsTxt(),
    partytown({
      config: {
        forward: ["datalayer.push"],
      }
    })],
})
