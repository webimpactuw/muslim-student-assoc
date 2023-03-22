import {defineCliConfig} from 'sanity/cli'
import {id} from './Environment.env'

export default defineCliConfig({
  api: {
    projectId: id,
    dataset: 'production'
  }
})
