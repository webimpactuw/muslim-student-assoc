import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set(["event", "homepics", "links"]);

//deployed at msauw.sanity.studio
//studio owner: Ryan

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
            // singleton a list item with a custom child
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
            S.listItem()
              .title("Upcoming Event")
              .child(
                S.document()
                  .id("single-event")
                  .schemaType("event")
                  .documentId("event")
              ),
            S.listItem()
              .title("Important Links")
              .child(
                S.document()
                  .id("single-links")
                  .schemaType("links")
                  .documentId("links")
              ),
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
