import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set(["event", "homepics"]);

//deployed at msa.sanity.studio
//admin user: Ryan

export default defineConfig({
  name: 'default',
  title: 'MSA-website-content',

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
            // home-pics singleton
            S.listItem()
              .title("Homepage Pictures")
              .child(
                // render a single document instead of a list 
                S.document()
                  .schemaType("homepics")
                  .documentId("homepics")
                  .title("Homepage Pictures")
              ),
            // Regular document types minus the singleton
            ...S.documentTypeListItems()
              .filter((listItem) => 
                !singletonTypes.has(listItem.getId())),
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

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
