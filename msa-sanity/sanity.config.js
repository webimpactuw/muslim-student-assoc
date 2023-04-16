import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'MSA-content',

  projectId: "b754quep",
  dataset: 'production',

  plugins: [
    //structure the desk
    deskTool({
      structure: (S) =>
        //as a list under "Content"
        S.list()
          .title("Content")
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem()
              .title("Announcement (Banner)")
              .id("single-announce")
              .child(
                // render a single document instead of a list 
                S.document()
                  .id("Announcement")
                  .schemaType("announcement")
                  .documentId("announcement")
              ),
            // Regular document types minus the singleton
            ...S.documentTypeListItems()
              .filter((listItem) => 
                !["announcement"].includes(listItem.getId()))
          ]),
    }),
  visionTool()],

  schema: {
    types: schemaTypes,
  },
})
