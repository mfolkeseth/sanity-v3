import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'emt9r934',
    dataset: 'production',
  },
  vite: (prevConfig) => {
    return {...prevConfig, build: {...prevConfig.build, assetsDir: 'mynamespace'}}
  },
})
