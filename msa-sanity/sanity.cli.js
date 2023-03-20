import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.sanity-project-id,
    dataset: 'production'
  }
})
