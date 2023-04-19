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
            // Regular document types minus the singleton
            ...S.documentTypeListItems()
              .filter((listItem) => 
                !["event"].includes(listItem.getId())),
            // Our singleton type has a list item with a custom child
            S.listItem()
              .title("Upcoming Event")
              .child(
                // render a single document instead of a list 
                S.document()
                  .id("single-event")
                  .schemaType("event")
                  .documentId("event")
              )
          ]),
    }),
  visionTool()],

  schema: {
    types: schemaTypes,
  },
})
