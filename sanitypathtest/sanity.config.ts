import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanitypathtest',

  projectId: 'emt9r934',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],
  basePath: '/mynamespace',

  schema: {
    types: schemaTypes,
  },
})
